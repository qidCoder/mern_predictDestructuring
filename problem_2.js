const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;


//Predict the output
console.log(name);//error: undefined
console.log(otherName);//Elon
