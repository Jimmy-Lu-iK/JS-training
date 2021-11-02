//"use strict";

const todoApi = {
    todos: [
      { content: 'write some code', isCompleted: false },
      { content: 'watch some movies', isCompleted: true },
      { content: 'listen some music', isCompleted: false },
    ],
    getAllTodos: async function () {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ todos: this.todos });
        }, 500);
      });
    },
    addTodo: async function (todo) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!todo || !todo.content) {
            console.log();
            reject({ error: 'content is empty !' });
          }
          this.todos.push(todo);
          console.log(this.todos);
          resolve({ addTodo: 'succeed' });
        }, 500);
      });
    },
    modTodo: async function (index) {
      return new Promise((resolve, reject) => {

        setTimeout(() => {
          if (
            !Number.isInteger(index) ||
            index < 0 ||
            index >= this.todos.length
          ) {
            reject({ error: 'index is not valid !' });
          }
          this.todos[index].isCompleted = !this.todos[index].isCompleted;
          resolve({ modTodo: 'succeed' });
        }, 500);
      });
    },
    delTodo: async function (index) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (
            !Number.isInteger(index) ||
            index < 0 ||
            index >= this.todos.length
          ) {
            reject({ error: 'index is not valid !' });
          }
  
          // if (!todo || todo.content) {
          //   reject({ error: 'content is empty !' });
          // }
          this.todos = [
            ...this.todos.slice(0, index),
            ...this.todos.slice(index + 1),
          ];
          resolve({ delTodo: 'succeed' });
        }, 500);
      });
    },
  };

  //const menu = document.querySelector('#content');
  //let todoList = todoApi.todos;
  //menu.appendChild(todoList);
  //console.log(menu.innerHTML);
  
  //todoApi.getAllTodos().then(data) => console.log(data);
  // const url = 'http://github.com/Jimmy-Lu-iK/JS-training/blob/main/todoApi.js';
  // const url2 = 'http://api.github.com/user/wikiwi';
  // const generateTodoLsit = async() => {
  //     const response = await fetch(url);
  //     const data = await response.json(); 
  //     const unorderList = document.createElement('ul');
  //     const nodeList = Object.keys(data).map((key)=>{
  //         const li = document.createElement('li');
  //         li.textContent = '${key}:${data[key]}';
  //         return li;
  //     });
  //     unorderList.append(...nodeList);
  //     return unorderList;
  // };

  // generateTodoLsit().then((unorderList)=>{
  //     document.querySelector('#content').append(unorderList);
  // });

  

  // function AddtodoItem (text) {
  //   alert("Add " + text + " TodoList");
  //   unorderList.appendChild(createListItem(text));
  // };
  // document.getElementById('addTodoBtn').addEventListener("click", AddtodoItem(InputText.value));

  // console.log(todoApi.todos);
  // let unorderList = document.createElement('ul');
  // document.getElementById('content').appendChild(unorderList);

  // function createListItem (name) {
  //   let li = document.createElement('li');
  //   li.textContent = name;
  //   return li;
  // };
  

  let InputText = document.getElementById('inputTodoField');

  document.getElementById('addTodoBtn').addEventListener("click", ()=>{  //click button to add todo item
    let object = {content:InputText.value, isCompleted:false}; 
    todoApi.addTodo(object).then((message)=>{
      alert('Add "' + object.content + '" to TodoList ' + message.addTodo);
    });
    PrintList();
  });

  InputText.addEventListener("keyup", (event)=>{   //enter to add todo item
    if(event.keyCode===13){
      let object = {content:InputText.value, isCompleted:false}; 
      todoApi.addTodo(object).then((message)=>{
        alert('Add "' + object.content + '" to TodoList ' + message.addTodo);
      });
      PrintList();
    };
  });

  let unorderList = document.createElement('ul');
  document.getElementById('content').appendChild(unorderList);


  function createListItem (name,index) {      //create unorder list elements
    let li = document.createElement('li');
    let line = document.createElement('p');
    let text = document.createElement('span');
    let button = document.createElement('button');
    text.textContent = name.content;
    if(name.isCompleted){
      text.style="text-decoration:line-through";
    };
    text.value = index;
    text.addEventListener("dblclick", ()=>{         //double click to mod the todo item
      todoApi.modTodo(parseInt(text.value)).then((value)=>{
        alert('mod "'+name.content+'" '+value.modTodo);
        PrintList();s
      });
    });
    button.textContent = 'DEL';
    button.value = index;
    button.addEventListener("click", ()=>{             //click delete button to delete the todo item
      todoApi.delTodo(parseInt(button.value)).then((value)=>{
        alert('delete "'+name.content+'" '+value.delTodo);
        PrintList();
      });
    });
    line.appendChild(text);
    line.appendChild(button);
    li.appendChild(line);
    return li;
  };
  

  function clear() {                     //clear the old version of todo list
    unorderList.innerHTML = "";
  };

  function PrintList() {                    //print todo list to html
    clear();
    todoApi.getAllTodos().then((value) => {
      value.todos.forEach((element,index) => {
        unorderList.appendChild(createListItem(element,index));
      });
    });
  };
  PrintList();

