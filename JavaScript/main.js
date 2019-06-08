function ConsoleTip(){
    // for more info JavaScript Documentation: mdn <insert method here> 
    console.log('Hello World!');
    console.error('This is an error');
    console.warn('This is a warning');
}

function variables(){
    // variables
    // var (not recommended much because it uses up a lot of variables),
    // let (allows you to reassign values), 
    // const (use if you know you won't reassign it, value is necessary)
    let age = 30;
    age = 31;

    console.log(age);
}

function DataTypes(){
    // String, Numbers, Boolean, null, undefined, Symbol (uncommon)
    const name = 'John';
    const age = 30;
    const rating = 4.5;
    const isCool = true; // no quotation marks
    const x = null; // variable that is empty, undefined
    const y = undefined; // undefined
    let z; // undefined
    

    // console.log(typeof x); // error because undefined
    
    // Concatenation
    console.log('My name is ' + name + ' and I am ' + age); // old way

    // Template String (or literals)
    console.log(`My name is ${name} and I am ${age}`); // use the back quote

    // String
    const s = 'Hello World';
    console.log(s.length);
    console.log(s.toLowerCase());
    console.log(s.substring(0,5)); // subset of string
    console.log(s.substring(0,5).toUpperCase()); // chaining possible
    console.log(s.split('')); // split into an array
    
    const s1 = 'technology, computers, it, code';
    console.log(s1.split(', '));
}

function Arrays(){
    // array are variables that hold multiple values
    const numbers = new Array(); // 'new' + something after it this is a constructor
    const fruits = ['apples', 'oranges', 'pearl', 10, true];
    console.log(numbers);
    console.log(fruits);
    console.log(fruits[0]); // arrays start from index 0

    // not static typing like TypeScript
    // const example:String; // error

    // you can add values in the array even if its const
    fruits[3] = 'grapes'; 
    console.log(fruits);

    // add at the end of array
    fruits.push('mango');
    console.log(fruits);

    // add at the start of array
    fruits.unshift('strawberries');
    console.log(fruits);

    // take the last one off
    fruits.pop();
    console.log(fruits);

    // check if something is an array
    console.log(Array.isArray(fruits));
    console.log(Array.isArray("fruits"));

    // get index of object
    console.log(`the index is: ${fruits.indexOf('oranges')}`);
}

function ObjectLiterals(){
    // object literals are key value pairs
    const person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        hobbies: ['music', 'movies', 'sports'],
        address: {
            street: '50 main st',
            city: 'Boston',
            state: 'MA'
        }
    }

    console.log(person);
    console.log(person.firstName, person.lastName); // you can log multiple
    console.log(person.hobbies[1]); // get the value inside the array of the object
    console.log(person.address.city); // get the value inside another object of the object

    // pulling out values, and make a variable
    const { firstName, lastName, address: {city} } = person;
    console.log(firstName);
    console.log(city);

    // add properties to object
    person.email = 'j-doe@gmail.com';
    console.log(person);

    // arrays of objects
    const todos = [
        {
            id: 1,
            text: 'Take out of trash',
            isCompleted: true
        },
        {
            id: 2,
            text: 'Meeting with boss',
            isCompleted: true
        },
        {
            id: 3,
            text: 'Dentist appt',
            isCompleted: false
        }
    ]
    console.log(todos[1].text);

    // convert to JSON
    const todoJSON = JSON.stringify(todos);
    console.log(todoJSON);

    // for loop
    for (let i = 0; i <= 10; i++) {
        console.log(`For Loop Number: ${i}`);
    }

    // while loop
    let i = 0;
    while (i <= 10){
        console.log(`While Loop Number: ${i}`);
        i++;
    }

    // for loop thru arrays
    for (i = 0; i < todos.length; i++){
        console.log(todos[i].text);
    }

    // for of loop in arrays
    for(let todo of todos){
        console.log(todo.id);
    }

    // High order array methods: forEach, map, filter
    // forEach
    todos.forEach(function(todo) { // take in a function() parameter
        console.log(todo.text); 
    });

    // map
    const todoText = todos.map(function(todo) {
        return todo.text;
    });
    console.log(todoText);

    // filter
    const todoCompleted = todos.filter(function(x) {
        return x.isCompleted ===  true;
    });
    console.log(todoCompleted);

    // chaining
    const todoCompleted2 = todos.filter(function(x) {
        return x.isCompleted ===  true;
    }).map(function(todo) {   // chaining filter and map
        return todo.text;
    })
    console.log(todoCompleted2);

}

function Conditionals(){
    const x = '10';

    if (x == 10){ // == only tests for value so even if you change the value to '10', still true
        console.log('test1: x is 10');
    }
    if (x === 10){ // === tests for value and datatype 
        console.log('test2: x is 10');
    } else if (x > 10){
        console.log('test2: x is greater than 10')
    } else {
        console.log('test2: x is less than 10');
    }

    const y = 4;
    const z = 10;
    if (y > 5 || z > 10){
        console.log(true);
    }

    // Ternary Operator: ? (represents then), and : (represents else)
    const x1 = 10;
    const color = x > 10 ?  'red' : 'blue';
    console.log(color);

    // Switches
    switch(color) {
        case 'red':
            console.log('color is red');
            break;
        case 'blue':
            console.log('color is blue');
            break;
        default:
            console.log('color is NOT red or blue');
            break;
    }
}

function Functions(){
    function addNums(num1 = 1, num2 = 1){ // you can set default values
        console.log(num1 + num2);
        return num1 + num2;
    }
    addNums(5,4);
    addNums(); // should get NaN (not a number) if no default values
    console.log(addNums(10,1));

    // 
}

Functions();