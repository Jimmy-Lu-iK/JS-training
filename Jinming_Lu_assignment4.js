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
            index >= this.todo.length
          ) {
            reject({ error: 'index is not valid !' });
          }
  
          if (!todo || todo.content) {
            reject({ error: 'content is empty !' });
          }
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
  //console.log(todoApi.todos);
  //todoApi.getAllTodos().then(data) => console.log(data);
  const url = 'http://github.com/Jimmy-Lu-iK/JS-training/blob/main/todoApi.js';
  const url2 = 'http://api.github.com/user/wikiwi';
  const generateTodoLsit = async() => {
      const response = await fetch(url);
      const data = await response.json(); 
      const unorderList = document.createElement('ul');
      const nodeList = Object.keys(data).map((key)=>{
          const li = document.createElement('li');
          li.textContent = '${key}:${data[key]}';
          return li;
      });
      unorderList.append(...nodeList);
      return unorderList;
  };

  generateTodoLsit().then((unorderList)=>{
      document.querySelector('#content').append(unorderList);
  });