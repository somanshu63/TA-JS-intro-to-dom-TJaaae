/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here
let createInputElm = (labelname, typeofinput="text") => {
  let label = document.createElement("label");
  label.innerText = (labelname + `:`);
  let input = document.createElement("input");
  input.type = typeofinput;
  label.append(input);
  return label;
}
// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here
createInputElm = (labelname, typeofinput="text") => {
  return `<label>${labelname}: <input type=${typeofinput}></label>`;
}


// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here
let createList = (array) => {
  let ul = document.createElement("ul");
  for(let i = 0; i < array.length; i++){
    ul.append(document.createElement("li"));
    ul.children[i].innerText = array[i];
  }
  return ul;
}
// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here
let createToDoList = (array) => {
  let ul = document.createElement("ul");
  for(let i = 0; i < array.length; i++){
    ul.append(document.createElement("li"));
    ul.children[i].append(document.createElement("p"));
    ul.children[i].children[0].innerText = array[i].name;
    ul.children[i].append(document.createElement("input"));
    ul.children[i].children[1].type = "checkbox";
    ul.children[i].children[1].checked= "";
    ul.children[i].children[1].name = "";
    ul.children[i].children[1].id = "";
    ul.children[i].append(document.createElement("span"));
    if(array[i].isDone == false){
      ul.children[i].children[2].innerText = "X";
    } else {
      ul.children[i].children[2].innerText = "Y";
    }
  }
  return ul;
}
// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
