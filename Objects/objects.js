const person1 ={
    firstName: 'Brian',
    lastName: 'Ritchie',
    iNumber: '234345456',
    age: 21

};
const person2 ={
    firstName: 'Dan',
    lastName: 'Yarg',
    iNumber: '2343454336',
    age: 22

};

export const persons = [person1, person2];

export function addStudent(firstName,lastName,iNumber,age){
    const newStudent = {
        firstName,
        lastName,
        iNumber,
        age
    }
    persons.push(newStudent);
}
