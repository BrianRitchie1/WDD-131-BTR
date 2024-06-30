import recipes from './recipes.mjs';

function randNum(max) {
    return Math.floor(Math.random() * max);
}

function getScwRandom(list) {
    const index = randNum(list.length);
    return list[index];
}

function tagsT(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratiT(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += '<span aria-hidden="true" class="icon-star">⭐</span>';
        } else {
            html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }
    html += '</span>';
    return html;
}

function RecT(recipe) {
    return `
        <figure class="recipe">
            <img src="${recipe.image}" alt="image of ${recipe.name}" />
            <figcaption>
                <ul class="recipe__tags">
                    ${tagsT(recipe.tags)}
                </ul>
                <h2><a href="#">${recipe.name}</a></h2>
                <p class="recipe__ratings">
                    ${ratiT(recipe.rating)}
                </p>
                <p class="recipe__description">
                    ${recipe.description}
                </p>
            </figcaption>
        </figure>
    `;
}

function showReci(recipeList) {
    const recipesContainer = document.getElementById('recipes');
    const recipesHTML = recipeList.map(recipe => RecT(recipe)).join('');
    recipesContainer.innerHTML = recipesHTML;
}

function init() {
    const recipe = getScwRandom(recipes);
    showReci([recipe]);
}

init();

function filtR(query) {
    query = query.toLowerCase();
    return recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.find(tag => tag.toLowerCase().includes(query))
        );
    }).sort((a, b) => a.name.localeCompare(b.name));
}

function theSearchHandler(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    const filteredRecipes = filtR(query);
    showReci(filteredRecipes);
}

document.getElementById('search-form').addEventListener('submit', theSearchHandler);
