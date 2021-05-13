class Recipe {
    constructor(recipe) {
        this.id = recipe.id
        this.name = recipe.attributes.name;
        this.directions = recipe.attributes.directions;
        this.category_id = recipe.attributes.category.id;
        this.category_name = recipe.attributes.category_name;
    }

    renderIndexRecipe() {
        // debugger
        return `<div data-id=${this.id}>
        <h3>${this.name}</h3>
        <p>Category: ${this.category_name}</p>
        <button class="delete-btn" data-id=${this.id}>Delete Recipe</button>
        </div>
        <br>`
    }




}
