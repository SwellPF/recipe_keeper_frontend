const endPoint = "http://localhost:3000/api/v1/recipes"
let createRecipeForm = document.querySelector('#create-recipe-form')
createRecipeForm.addEventListener('submit', (e) => createFormHandler(e))

document.addEventListener('DOMContentLoaded', () => {
    getRecipes()
    let createIngredientField = document.querySelector('#add-ingredient-button')
    createIngredientField.addEventListener('click', (e) => addIngredientField(e))
});
    
 function getRecipes(){   
     fetch(endPoint)
     .then(response => response.json())
     .then(recipes => {
        recipes.data.forEach(recipe => {
            let newRecipe = new Recipe(recipe);
            document.querySelector('#recipes-container').innerHTML += newRecipe.renderIndexRecipe();
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
    // debugger
    ingredientInputs.forEach(ingredient => {
    //    console.log(ingredient.value);
       ingredientList.push(ingredient.value)});
       ingredients = ingredientList.join('^');
    postRecipe(nameInput, directionsInput, categoryId, ingredients)
}

 function postRecipe(name, directions, category_id, ingredients){
     let bodyData = {name, directions, category_id, ingredients}
      //debugger
     fetch(endPoint, {
         method: "POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify(bodyData)
     })
     .then(response => response.json())
     .then(recipe => {
        // console.log(recipe);
        recipe = recipe.data
        const newRecipe = new Recipe(recipe)
        // debugger
        document.querySelector('#recipes-container').innerHTML += newRecipe.renderIndexRecipe();
        createRecipeForm.reset();
    })
    
 }

 function deleteRecipe(e){
        //debugger
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
    // console.log(e);
    // debugger
    const ingredientContainerEl = document.getElementById("ingredient-container");
    const ingredientCounter = ingredientContainerEl.childElementCount;    
    
    const newIngredientField = document.createElement('div');
    newIngredientField.innerHTML = 
    `<input id="ingredient[${ingredientCounter}]" class="ingredient-entry" type="text" name="ingredient[${ingredientCounter}]" value="" placeholder="Enter ingredient here" class="input-text"><br>`
    ingredientContainerEl.appendChild(newIngredientField);
 }