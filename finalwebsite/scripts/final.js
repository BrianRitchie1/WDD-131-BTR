
import { memes } from './data.js';

function displayMemeDetails(memes) {
    const memeDetailsDiv = document.getElementById('meme-details');
    memeDetailsDiv.innerHTML = '';

    memes.forEach(meme => {
        const memeContent = `
            <div class="meme">
                <div class="meme-header">
                    <h2>Number ${meme.number}: ${meme.name}</h2>
                </div>
                <img src="${meme.image}" alt="${meme.name}">
                <p>${meme.description}</p>
            </div>
        `;

        memeDetailsDiv.innerHTML += memeContent;
    });
}

function sortMemes(criteria) {
    let sortedMemes = [...memes];
    if (criteria === 'number') {
        sortedMemes.sort((a, b) => a.number - b.number);
    } else if (criteria === 'alphabetical') {
        sortedMemes.sort((a, b) => a.name.localeCompare(b.name));
    }
    displayMemeDetails(sortedMemes);
}

document.getElementById('sort').addEventListener('change', function() {
    sortMemes(this.value);
});

displayMemeDetails(memes);
