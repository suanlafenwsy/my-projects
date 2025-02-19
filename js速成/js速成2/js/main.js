console.log("Hello world");
console.error("This is an error");
console.warn("This is a warning");

const name = "John";
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof z);
console.log("My name is " + name + " and I am " + age);
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

const s = "Hello World!";
// 属性没有括号，如果它有括号，它就是一个方法
// 方法是一个与对象关联的函数
console.log(s.length);
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(""));

const str = "technology, computers, it, code";
console.log(str.split(", "));

// 创建数组
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ["apples", "oranges", "pears", 10, true];
console.log(fruits);
console.log(fruits[1]);
// 通过const定义数组，但是这样的操作仍然是合法的
// 但是fruits = [];就会报错
// 不可以重新分配它，只是可以操作它
fruits[5] = "grapes";
console.log(fruits);
fruits.push("mangos");
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(Array.isArray("hello"));
console.log(fruits.indexOf("oranges"));

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};

const {
  firstName,
  lastName,
  address: { city },
} = person;
console.log(city);

// 对象数组
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
  },
];
console.log(todos[1].text);

// 将js对象转换成JSON字符串
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

todos.forEach(function (todo) {
  console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompleted);

// 三目运算符
const m = 11;
const color = x > 10 ? 'red' : 'blue';
console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

// 为函数设置默认参数值
function addNums(num1 = 1, num2 = 1){
    return num1 + num2;
}
console.log(addNums(5,5));

// 箭头函数
// 等号后面是参数，=> 后面是函数体，如果是返回值，不需要写return
// const addNumss = (num1 = 1, num2 = 1) => console.log(num1 + num2);
// addNumss(5,6);

// 只有一个参数时不需要括号
const addNumss = num1 => num1 + 5;
console.log(addNumss(5));

// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
    // 日期对象
    // this.dob = new Date(dob);
    // this.getBirthYear = function(){
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function(){
    //     return `${this.firstName} ${this.lastName}`;
    // }
// }
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-6-1970');
// console.log(person1.dob);
// console.log(person2.dob.getFullYear());
// console.log(person2.getBirthYear());
// console.log(person2.getFullName());
// console.log(person1);

// 原型对象
// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }
// console.log(person1);

// es6中加入了类
class Person{
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');
console.log(person1);
