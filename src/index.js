const endPoint = "http://localhost:3000/api/v1/recipes"

document.addEventListener('DOMContentLoaded', () => {
    getRecipes()

    let createRecipeForm = document.querySelector('#create-recipe-form')
    createRecipeForm.addEventListener('submit', (e) => createFormHandler(e))

    let createIngredientField = document.querySelector('#add-ingredient-button')
    createIngredientField.addEventListener('click', (e) => addIngredientField(e))
});
    
 function getRecipes(){   
     fetch(endPoint)
     .then(response => response.json())
     .then(recipes => {
         recipes.data.forEach(recipe => {
            const recipeMarkup = `
                <div data-id=${recipe.id}>
                <h3>${recipe.attributes.name}</h3>
                <p>Category: ${recipe.attributes.category.name}</p>
                <button class="delete-btn" data-id=${recipe.id}>Delete Recipe</button>
                </div>
                <br><br>`;

        document.querySelector('#recipes-container').innerHTML += recipeMarkup
    })
    const deleteButtons = document.querySelectorAll(".delete-btn")
    deleteButtons.forEach((btn) => btn.addEventListener("click", deleteRecipe));
    
})
 }

 function createFormHandler(e) {
     e.preventDefault()
     const nameInput = document.querySelector('#input-name').value
     const directionsInput = document.querySelector('#input-directions').value
     const categoryId = parseInt(document.querySelector('#categories').value);
     ingredientList = [];
     const ingredientInputs = Array.from(document.getElementsByClassName('ingredient-entry'))
     debugger
     ingredientInputs.forEach(ingredient => {
        console.log(ingredient.value);
        ingredientList.push(ingredient.value)})
     postRecipe(nameInput, directionsInput, categoryId, ingredientList)
 }

 function postRecipe(name, directions, category_id, ingredientList){
     let bodyData = {name, directions, category_id, ingredientList}
     fetch(endPoint, {
         method: "POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify(bodyData)
     })
     .then(response => response.json())
     .then(recipe => {
        debugger
        console.log(recipe);
        const recipeData = recipe.data.attributes
         const recipeMarkup = `
         <div data-id=${recipe.data.id}>
         <h3>${recipeData.name}</h3>
         <p>Category: ${recipeData.category.name}</p>
         <button data-id=${recipe.data.id}>Delete Recipe</button>
         </div>
         <br><br>`;
    document.querySelector('#recipes-container').innerHTML += recipeMarkup
     })
 }

 function deleteRecipe(e){
        const {id} = e.target.dataset;
        fetch(`http://localhost:3000/api/v1/recipes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            e.target.parentElement.remove();
        });
 }
 

 function addIngredientField(e){
    e.preventDefault(); 
    console.log(e);
    // debugger
    const ingredientContainerEl = document.getElementById("ingredient-container");
    const ingredientCounter = ingredientContainerEl.childElementCount;    
    
    const newIngredientField = document.createElement('div');
    newIngredientField.innerHTML = 
    `<input id="ingredient[${ingredientCounter}]" class="ingredient-entry" type="text" name="ingredient[${ingredientCounter}]" value="" placeholder="Enter ingredient here" class="input-text"><br>`
    ingredientContainerEl.appendChild(newIngredientField);
 }