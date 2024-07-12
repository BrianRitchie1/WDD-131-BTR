// final.js

import { memes } from './data.js';

// Function to display meme details
function displayMemeDetails(memes) {
    const memeDetailsDiv = document.getElementById('meme-details');
    memeDetailsDiv.innerHTML = ''; // Clear previous content

    memes.forEach(meme => {
        // Create HTML content for each meme
        const memeContent = `
            <div class="meme">
                <div class="meme-header">
                    <h2>Number ${meme.number}: ${meme.name}</h2>
                </div>
                <img src="${meme.image}" alt="${meme.name}">
                <p>${meme.description}</p>
            </div>
        `;

        // Insert the meme content into the memeDetailsDiv
        memeDetailsDiv.innerHTML += memeContent;
    });
}

// Function to sort memes
function sortMemes(criteria) {
    let sortedMemes = [...memes];
    if (criteria === 'number') {
        sortedMemes.sort((a, b) => a.number - b.number);
    } else if (criteria === 'alphabetical') {
        sortedMemes.sort((a, b) => a.name.localeCompare(b.name));
    }
    displayMemeDetails(sortedMemes);
}

// Event listener for the filter
document.getElementById('sort').addEventListener('change', function() {
    sortMemes(this.value);
});

// Call the function to display meme details initially
displayMemeDetails(memes);
