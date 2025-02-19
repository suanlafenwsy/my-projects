// console.log(window);
// // 窗口对象是浏览器的父对象
// // alert是窗口对象的一部分，所以alert()等同于window.wlert()
// // 因为窗口是最顶层的，所以不必对窗口中的任何东西加.
// // alert(1);


// // 如何从Dom中选择东西

// // 单个元素选择器
// // 在控制台显示
// // console.log(document.getElementById('my-form'));
// // 赋给变量
// const form = document.getElementById('my-form');
// console.log(form);

// // 单元素选择器，即使有多个也只选第一个
// console.log(document.querySelector('h1'));


// // 多个元素选择器 

// // 返回节点列表，可以给它运行数组方法
// // 里面可以放id名、类名等等，建议用这个方法
// console.log(document.querySelectorAll('.item'));
// // 返回的是HTML集合，和节点列表类似，但是不能使用数组方法
// // 如果想要给它运行数组方法，必须手动将其转换为数组
// console.log(document.getElementsByClassName('item'));


// const ul = document.querySelector('.items');

// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// // 动态添加html
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// // 还可以来改变样式
// // 有css，为什么还需要这样做
// //      可以有事件和函数，可以让其动态化，rg：点击一个东西让它的颜色改变等等
// const btn = document.querySelector('.btn');
// btn.style.background = 'red';


const btn = document.querySelector('.btn');

// 事件监听器，第一个参数是事件，第二个参数是事件发生时要运行的函数
// 让用户界面具有交互性
// btn.addEventListener('click', (e) => {
//     // 阻止默认行为，这样在点击后，控制台的显示就不会闪烁并消失
//     // 因为表单不再实际提交
//     e.preventDefault();
//     // console.log('click');
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

// 悬停事件
// btn.addEventListener('mouseover', (e) => {
//     // 阻止默认行为，这样在点击后，控制台的显示就不会闪烁并消失
//     // 因为表单不再实际提交
//     e.preventDefault();
//     // console.log('click');
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });




const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // 第二个参数以毫秒为单位
        setTimeout(() => msg.remove(), 3000);
    }else{
        // 从任何地方创建元素并将它们插入到Dom中
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
            `${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}