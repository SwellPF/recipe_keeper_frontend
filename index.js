const endPoint = "http://localhost:3000/api/v1/recipes"

document.addEventListener('DOMContentLoaded', () => {
    getRecipes()
})
    
 function getRecipes(){   
    fetch(endPoint)
    .then(response => response.json())
    .then(recipes => {
        console.log(recipes);
        recipes.data.forEach(recipe => {
            const recipeMarkup = `
                <div data-id=${recipe.id}>
                <h3>${recipe.attributes.name}</h3>
                <p>${recipe.attributes.category.name}</p>
                <button data-id'${recipe.id}>edit</button>
                </div>
                <br><br>`;

        document.querySelector('#recipes-container').innerHTML += recipeMarkup
    })
})
 }
