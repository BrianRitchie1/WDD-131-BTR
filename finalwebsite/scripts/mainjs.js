
import { memes } from './data.js';

function populateMemeDropdown() {
    const memeNumberSelect = document.getElementById('meme-number');
    memes.forEach((meme, index) => {
        const option = document.createElement('option');
        option.value = meme.number;
        option.textContent = `Number ${meme.number}`;
        if (index === 0) option.selected = true; 
        memeNumberSelect.appendChild(option);
    });
}

function displayMemeDetails(number) {
    const meme = memes.find(m => m.number == number);
    const memeDetailsDiv = document.getElementById('meme-details');
    memeDetailsDiv.innerHTML = ''; 

    if (meme) {
        const memeContent = `
            <div class="meme">
                <h2>Number ${meme.number}: ${meme.name}</h2>
                <img src="${meme.image}" alt="${meme.name}">
                <p>${meme.description}</p>
            </div>
        `;

        memeDetailsDiv.innerHTML = memeContent;
    }
}

document.getElementById('meme-number').addEventListener('change', function() {
    displayMemeDetails(this.value);
});

populateMemeDropdown();

displayMemeDetails(memes[0].number);
