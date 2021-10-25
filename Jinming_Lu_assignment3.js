//question 1:
const tableInfo = [ 
    { 
    studentName: 'John', 
    Age: 19, 
    Phone: '455 - 983 - 0903', 
    Address: '123 Ave, San Francisco, CA, 94011',}, 
    { 
    studentName: 'Alex', 
    Age: 21, 
    Phone: '455 - 983 - 0912', 
    Address: '456 Rd, San Francisco, CA, 94012',}, 
    { 
    studentName: 'Josh', 
    Age: 22, 
    Phone: '455 - 345 - 0912', 
    Address: '789 Dr, Newark, CA, 94016',}, 
    { 
    studentName: 'Matt',
    Age: 23, 
    Phone: '321 - 345 - 0912', 
    Address: '223 Dr, Sunnyvale, CA, 94016', 
    }, 
]; 

let table = document.createElement('table');
document.getElementById('question1').appendChild(table);
let thead = document.createElement('thead');
table.appendChild(thead);
let tr = document.createElement('tr');
thead.appendChild(tr);


function createTheadItem(name) { 
    let th = document.createElement('th'); 
    th.textContent = name; 
    return th; 
}

tr.appendChild(createTheadItem('Student Name')); 
tr.appendChild(createTheadItem('Age')); 
tr.appendChild(createTheadItem('Phone#'));
tr.appendChild(createTheadItem('Address'));

let tbody = document.createElement('tbody');
table.insertBefore(tbody, table.firstElementChild.nextSibling);

for (let i=0; i<tableInfo.length; i++) {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (let j in tableInfo[i]){
        let td = document.createElement('td');  
        td.textContent = tableInfo[i][j];            
        tr.appendChild(td);
    };
};

//question2:

let GoogleSearch = document.createElement('input');
GoogleSearch.placeholder = "Search";

document.getElementById('question2').appendChild(GoogleSearch);


GoogleSearch.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode===13){
        alert(GoogleSearch.value);
    }
});

//question3:
const list = ['HTML', 'JavaScript', 'CSS', 'React', 'Redux', 'Java'];

function createListItem (name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
//Unordered List:
let TextofUnorderedList = document.createElement('p');
TextofUnorderedList.textContent = 'Unordered List:';
document.getElementById('question3').appendChild(TextofUnorderedList);
let UnorderedList = document.createElement('ul');
document.getElementById('question3').insertBefore(UnorderedList, TextofUnorderedList.nextSibling);
list.forEach(ele=>{
    UnorderedList.appendChild(createListItem(ele));
});
//Ordered List:
let TextofOrderedList = document.createElement('p');
TextofOrderedList.textContent = 'Ordered List:';
document.getElementById('question3').insertBefore(TextofOrderedList, UnorderedList.nextSibling);
let OrderedList = document.createElement('ol');
document.getElementById('question3').insertBefore(OrderedList, TextofOrderedList.nextSibling);
list.forEach(ele=>{
    OrderedList.appendChild(createListItem(ele));
});

//question4:
const dropDownList = [ 
    { value: 'newark', content: 'Newark' }, 
    { value: 'santaClara', content: 'Santa Clara' }, 
    { value: 'unionCity', content: 'Union City' }, 
    { value: 'albany', content: 'Albany' }, 
    { value: 'dalyCity', content: 'Daly City' }, 
    { value: 'sanJose', content: 'San Jose' }, 
];

let select = document.createElement('select');
document.getElementById('question4').appendChild(select);

dropDownList.forEach(ele=>{
    select.options.add(new Option(ele.content,ele.value));
});
