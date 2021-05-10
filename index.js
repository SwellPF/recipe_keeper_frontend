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
                <button data-id'${recipe.id}>View Recipe</button>
                </div>
                <br><br>`;

        document.querySelector('#recipes-container').innerHTML += recipeMarkup
    })
})
 }

 function createFormHandler(e) {
     e.preventDefault()
     const nameInput = document.querySelector('#input-name').value
     const directionsInput = document.querySelector('#input-directions').value
     const categoryId = parseInt(document.querySelector('#categories').value)
     postRecipe(nameInput, directionsInput, categoryId)
 }

 function postRecipe(name, directions, category_id){
     console.log(name, directions, category_id);
 }