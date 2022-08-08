// IPO Pattern - Input -> Process -> Output

//cached element references - variables that store referenced to DOM elements
const btn = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const body = document.querySelector('body');

// event listeners - code that handles DOM events
btn.addEventListener('click', handleButtonPress);
input.addEventListener('keydown', handleEnterPress);


// body.addEventListener('click', handleButtonPress); 
ul.addEventListener('click', handleLiClick);

//seperation of concerns
/*
seperating the code based on the role it serves 
in order to make it easier to maintain
*/


// functions
function handleEnterPress(event) {
    console.log(keypress)
    if(event.keyCode === 13){
        handleButtonPress(event);
    }
}

function handleButtonPress(event) {
    // let's creat a DOM element so we can add comments to the list
    const li = document.createElement('li');
    // the next step is getting the text value from the input tag
    // setting it's value as textContent to the li element 
    li.textContent = input.value;
    // how can I clear the input value?... or set it to an empty string
    input.value = '';
    // adding the new li tag to the ul element
    ul.appendChild(li);

    // console.log(input.value);
}

function handleLiClick(event) {
    // only allow for li tags to trigger events
    if(event.target.tagName === 'LI'){
        // write the code that will change the color of the text
        event.target.style.color = 'rebeccapurple';
        if(event.target.style.textDecoration === 'none'){
        event.target.style.textDecoration = 'line-through';
        } else {
        event.target.style.textDecoration = 'none'
        }
    }
  }  


    // console.log('something inside the ul tag was clicked');


