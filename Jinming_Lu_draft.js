/*
function myFunction()
{
    document.getElementById("demo").innerHTML= 0.1+0.2;
}


var x = 5; // 初始化 x
elem = document.getElementById("demo"); // 查找元素 
elem.innerHTML = "x 为：" + x + "，y 为：" + y;           // 显示 x 和 y
var y = 7; // 初始化 y
*/

let array1 = ["nihao", "hello", 'hi', "what"];
//let test1 = array1.length;
//let test1 = array1.push('red sea');
array1 = [...array1, 'blue sea'];
array1.splice(1,3);
array1.splice(3,0,'dark sea','orange sea','star sea');

let numbers = [-1, 3, 5];
let test1 = numbers.every((ele) => {
return ele > 0;
});

let people = [
    {name: 'glm',age:18,sex:1},
    {name: 'jh',age:33,sex:0},
    {name: 'ljl',age:44,sex:1}
             ]
people.forEach((item, index)=>{
    console.log( index + ':' + item.name)
});

const cssClasses = ['btn', 'btn-primary', 'btn-active'];
const btnClass = cssClasses.join(' ');
console.log(btnClass);

const title = 'JavaScript array join example'; 
const url = title.split(' ') .join('-') .toLowerCase();
console.log(url);

let  arr = [1,2,2,11,55,44,33,77,44,22,66,33,55,878,33];

// 降序
arr.sort((a,b)=> b-a);

console.log(arr);


document.getElementById("demo").innerHTML= array1;
document.getElementById("demo2").innerHTML= test1;