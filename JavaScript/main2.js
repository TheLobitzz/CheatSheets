// DOM (Document Object Model) basically like a tree structure of you whole document, your html tag etc. You can take HTML elements and put them into variables to work with them in JS.

/*
    // window object. the parent object of the browser.
    // important: the fetch API is inside the window object (see console)
    // the document part of the window object is what makes up the DOM. This is what used to grab single elements from the document
    console.log(window);
    // the console.alert(1) is the same as below
    window.alert(1);
    // you don't even need to add the window, because it's the parent and the browser already knows
    alert(2);
*/

/*
    // Single element
    // example: you wanna grabe the html id of 'my-form', you use the document property of the Window object
    console.log(document.getElementById('my-form'));
    // querySelector can also be used for a single element
    console.log(document.querySelector('.container'));
    const form = document.getElementById('my-form');

    //Multiple elements
    console.log(document.querySelectorAll('.item')); // this gives a NodeList which is very similar to an array. you can do forEach, etc. on it. Highly recommended. together with getSelector.
        // console.log(document.getElementsByClassName('item')); // gives an HTMLCollection, which you CAN'T use array methods. so, this is not recommended.
        // console.log(document.getElementsByTagName('li')); // get only by tag

    // loop over the items
    const items = document.querySelectorAll('.item');
    items.forEach((item) => console.log(item)); //looping through and grabbing each of the list items
*/

/*
    // manipulate HTML using JS
    const ul = document.querySelector('.items');
    // ul.remove(); removes that elements
    // ul.lastElementChild.remove(); // last item is gone
    ul.firstElementChild.textContent = 'Hello'; // manipulate values of the html
    ul.children[1].innerText = 'Brad'; //edit inside a NodeList (type of array)
    ul.lastElementChild.innerHTML = '<h1>Hello</h1>' // add an html tag dynamically

    const btn = document.querySelector('.btn');
    btn.style.background = 'red';
*/

/*
    // Event listener
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', (e) => { // first is the click event, second one is function, e is an event parameter
        // other events 'mouseover' or 'mouseout'
        e.preventDefault(); // prevents submitting
        // console.log('click');
        // console.log(e); // see log
        // console.log(e.target); // shows the button object itself
        // console.log(e.target.className); // gets the value if the class of the event
        
        document.querySelector('#my-form').style.background = '#ccc' // changes background to gray when button is clicked
        document.querySelector('body').classList.add('bg-dark'); // you can even add a class
        document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
    });
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if (nameInput.value === '' || emailInput.value === '' ){
        // alert('Please enter fields'); // highly unrecommended because it stops code
        msg.classList.add('error'); // now it is an error class
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000); // error message goes away after 3 seconds
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // clear fields
        nameInput.value = '';
        emailInput.value= '';
    }
}