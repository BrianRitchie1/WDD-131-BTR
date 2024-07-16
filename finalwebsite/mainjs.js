// mainjs.js

import { memes } from './data.js';

// Function to populate the select dropdown with meme numbers
function populateMemeDropdown() {
    const memeNumberSelect = document.getElementById('meme-number');
    memes.forEach((meme, index) => {
        const option = document.createElement('option');
        option.value = meme.number;
        option.textContent = `Number ${meme.number}`;
        if (index === 0) option.selected = true; // Set the first option as selected
        memeNumberSelect.appendChild(option);
    });
}

// Function to display the selected meme details
function displayMemeDetails(number) {
    const meme = memes.find(m => m.number == number);
    const memeDetailsDiv = document.getElementById('meme-details');
    memeDetailsDiv.innerHTML = ''; // Clear previous content

    if (meme) {
        // Create HTML content for the selected meme
        const memeContent = `
            <div class="meme">
                <h2>Number ${meme.number}: ${meme.name}</h2>
                <img src="${meme.image}" alt="${meme.name}">
                <p>${meme.description}</p>
            </div>
        `;

        // Insert the meme content into the memeDetailsDiv
        memeDetailsDiv.innerHTML = memeContent;
    }
}

// Event listener for the meme number select dropdown
document.getElementById('meme-number').addEventListener('change', function() {
    displayMemeDetails(this.value);
});

// Call the function to populate the meme dropdown initially
populateMemeDropdown();

// Display the first meme by default
displayMemeDetails(memes[0].number);
