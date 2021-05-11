const endPoint = "http://localhost:3000/api/v1/recipes"

document.addEventListener('DOMContentLoaded', () => {
    getRecipes()

    let createRecipeForm = document.querySelector('#create-recipe-form')
    createRecipeForm.addEventListener('submit', (e) => createFormHandler(e))
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
     postRecipe(nameInput, directionsInput, categoryId)
 }

 function postRecipe(name, directions, category_id){
     
     let bodyData = {name, directions, category_id}
     fetch(endPoint, {
         method: "POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify(bodyData)
     })
     .then(response => response.json())
     .then(recipe => {
        console.log(recipe);
        //  const recipeData = recipe.data.attributes
         const recipeMarkup = `
         <div data-id=${recipe.id}>
         <h3>${recipe.name}</h3>
         <p>${recipe.category_id}</p>
         <button data-id=${recipe.id}>Show Recipe</button>
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
            // console.log(e.target.parentElement);
        });
 }
 