let fullNeame = 'bing chilling';


const h1 = document.querySelector('h1');

h1.innerHTML += '<em>' +  fullNeame + '</em>';

const section = document.createElement('section');

const h2 = document.createElement("h2");

h2.textContent= ('section 3');

const p = document.createElement('p');

p.textContent = 'this is a paragraph'

section.appendChild(h2);
section.appendChild(p);

document.body.appendChild(section);