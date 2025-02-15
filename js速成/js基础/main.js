var name = "wsy";

console.log(name);

let a=1;

console.log(a);

const b=2;

console.log(b);

// 类型转换
var x;
// x = "3" + 4 + 5;
x = 3 + 4 + "5";
console.log(x);

console.log(123 == "123");
console.log(123 === "123");
console.log(1 == true);
console.log(1 === true);


// var声明的变量有函数作用域，如果在函数外使用var声明变量
// 它将是一个全局变量，let和const声明的变量有块级作用域
// 更推荐使用let声明变量
var age = 20;
if(name == "wsy" && age == 21){
    console.log("wsy");
}
else{
    console.log("not wsy");
}

var allowed = age >= 18 ? "Yes" : "No";
console.log(allowed);

switch(name){
    case "wsy":
        console.log("wsy");
        break;
    case "John":
        console.log("John");
        break;
    default:
        console.log("Stranger");
}

// 对象的创建
var obj = new Object();
var obj2 = {};
obj = {
    name: "Simon",
    age: 20,
    email:"simon@gmail.com",
    contact:{
        phone: "123456789",
        Telegram:"@Simon"
    }
};
obj.contact.Wechat = "abcd";
console.log(obj);

// 数组
// 并不一定从头到尾都是满的，中间可能有空的
// 但是空的也占位置
var arr = new Array();
var arr_1 = [];
arr[0] = "dog";
arr[1] = "cat";
arr[5] = "tiger";
console.log(arr);
console.log(arr[2]);
console.log(arr.length); 
arr_1 = ["dog","cat","tiger"];
console.log(arr_1);
// 遍历数组
// 这种方式遍历会出现undefined
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
// 这种方式不会有undefined
for(let i in arr){
    console.log(arr[i]);
}
arr.push("sheep");
console.log(arr);
arr.pop();
console.log(arr);
arr_1.reverse();
console.log(arr_1);
arr.shift();
console.log(arr);
arr.unshift("lion");
console.log(arr);


// 函数
function add(){
    let sum = 0;
    for(let i = 0, j = arguments.length; i < j; i++){
        sum += arguments[i];
    }
    return sum;
}
let ans = add(1,2,3,4,5,6,7,8,9,10);
console.log(ans);