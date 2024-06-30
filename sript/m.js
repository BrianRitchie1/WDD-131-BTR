const years = [2022, 2021, 2020, 2019]

const section = document.querySelector('section');
Math.floor(Math.random()*4)

years
    .sort()
    
    .forEach((year) => {
        const p = document.createElement("p")
        p.textContent = year;
        section.appendChild(p);
        
    });


// const sudents = [
//     {
//         first: 'oden',
//         last:'cheese',
//         age: 16
//     },
//     {
//         first: 'blai',
//         last:'cheese',
//         age: 19
//     },
//     {
//         first: 'oqwarden',
//         last:'cheese',
//         age: 18
//     },
//     {
//         first: 'qwpori',
//         last:'cheese',
//         age: 17
//     },
    
// ]

// const section = document.querySelector('section');

// students 
//     .sort()
//     .forEach(student => {
        
//     });