const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
];

function DeepClone(source){
    const targetObj = source.constructor === Array ? [] : {};
    for(let keys in source){
        if(source.hasOwnProperty(keys)){
            if(source[keys] && typeof source[keys] === 'object'){
                targetObj[keys] = source[keys].constructor == Array ? [] : {};
                targetObj[keys] = DeepClone(source[keys]);
            }else{
                targetObj[keys] = source[keys];
            }
        }
    }
    return targetObj;
};

function First_Function(Object) {  //generating a new array which doubles the quantity and price in each object
    let NewObject = DeepClone(Object);
    NewObject.forEach((ele)=>{
        ele.quantity = 2*ele.quantity; //xi wang yong map
        ele.price = 2*ele.price;
    });
    return NewObject;
}; 

console.log(itemsObject.map(({quantity, price})=>{
    quantity = quantity*2;
    price = price*2;
    return {quantity,price};
}));
console.log(itemsObject);

let array1 = First_Function(itemsObject);
console.log(array1);

let array2 = itemsObject.filter((ele)=> {  // generating a new array which contains itemquantity > 2 and price > 300 only.
    return ((ele.quantity > 2) && (ele.price > 300));
});

console.log(array2);

let array3 = itemsObject.reduce((prev,curr)=> {
    return prev + curr.price * curr.quantity;
},0);

console.log(array3);


const string =' Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ';

const modification = string.split(/[ ]|[-]|[p]/) .join('') .toLowerCase();
console.log(modification);
    