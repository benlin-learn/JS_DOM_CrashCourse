// Examine The Document Object //

// console.dir(document);  
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'hello';  <= Not a good idea!
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// --------------------------------
// GetElementById //

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.textContent); //remain 123
// console.log(headerTitle.innerText); //no 123

// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// --------------------------------

// GetElementByClassName //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2 ';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // items.style.backgroundColor = '#f4f4f4';
// // won't work

// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// --------------------------------

//  GetElementByTagName //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2 ';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // li.style.backgroundColor = '#f4f4f4';
// // won't work

// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// --------------------------------
//QuerySelector//

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color = 'blue';

// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color = 'coral';

// QuerySelectorAll//

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// --------------------------------------------------------

// Traversing the DOM//
// var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor ='#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// parentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor ='#f4f4f4';
// console.log(itemList.parentElement.parentElement);

//  ChildNodes
// console.log(itemList.childNodes); => (see the console)there are some extra "text" if you have line break when using childNodes

// Children (better than childNodes)
// console.log(itemList.children);
// console.log(itemList.children[1]);itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild
// console.log(itemList.firstChild); => same problem as childNodes

// firstElementChild (better than firstChild)
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello1'


//lastChild
// console.log(itemList.lastChild); 
// => same problem as childNodes

// lastElementChild (better than lastChild)
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello2'

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

//  previousSibling
// console.log(itemList.previousSibling);

// //  previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div
// var newDiv = document.createElement('div');
// // Add class
// newDiv.className = 'hello';
// // Add id
// newDiv.id = 'hello1';
// // Add attr
// newDiv.setAttribute('title', 'Hello Div');
// // Create text node
// var newDivText = document.createTextNode('Hello World');
// // Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv, h1);


// ----------------------------------------------------------
// Event //

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e){
//     // console.log('Button clicked');
//     // document.getElementById('header-title').textContent = 'Changed';
//     // document.querySelector('#main').style.backgroundColor = '#f4f4f4';

//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);

    // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>'+e.target.id+'</h3>';
//     // console.log(e.type);

//     // from whole windows
//     // console.log(e.clientX);
//     // console.log(e.clientY);
    
//     // from actual element itself
//     // console.log(e.offsetX);
//     // console.log(e.offsetY);

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);
// }
// var button = document.getElementById('button');
// var box= document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// inner element also cause event 
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent); 


var itemInput = document.querySelector('input[type = "text"]');
var form = document.querySelector('form');

var select = document.querySelector('select');
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('copy', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e){
    e.preventDefault();
    console.log('Event Type: '+e.type);
    

    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>' +e.target.value+'</h3>';

    // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';
    // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}