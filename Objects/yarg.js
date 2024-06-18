import { persons } from "./objects";
import { addStudent, persons } from "./objects";

function displayStudents(){
persons.forEach((person) => {
    const article = document.createElement('article');

    const firstName = document.createElement('p');
    firstName.textContent = person.firstName;

    const lastName = document.createElement('p');
    lastName.textContent = person.lastName;

    const iNumber = document.createElement('p');
    iNumber.textContent = person.iNumber;

    const age = document.createElement('p');
    age.textContent = person.age;

    article.append(firstName,lastName,iNumber,age);
    document.querySelector('section').append(article);
})
}

document.querySelector('#firstName').focus()
document.querySelector('button').addEventListener('click',(event)=>{
    event.preventDefault();
    const firstName = document.querySelector('#firstName').value
    addStudent(firstName);
});
displayStudents();

console.log(persons)