let div=document.createElement('div');
div.id = 'content';
div.className = 'note';
div.textContent = 'This is a Test';

document.body.appendChild(div);

function createMenuItem (name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}

const menu = document.querySelector('#menu');
menu.appendChild(createMenuItem('home'));
menu.appendChild(createMenuItem('service'));
menu.appendChild(createMenuItem('About Us'));
console.log(menu.innerHTML);