const themeSelector = document.getElementById('theme-selctor');

function changeTheme() {
    const selectedTheme = themeSelector.value;

    const body = document.body;

    const logo = document.querySelector('.logo');

    if (selectedTheme === 'Dark') {
        body.classList.add('Dark');

        logo.src = 'blue-logo.png';
    } else {
        body.classList.remove('Dark');

        logo.src = 'white-logo.png';
    }
}

themeSelector.addEventListener('input', changeTheme);
