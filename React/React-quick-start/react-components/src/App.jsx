// // React组件是返回标签的JS函数
// // React组件必须以大写字母开头 HTML标签则必须是小写字母
// function MyButton(){
//   return(
//     <button>我是一个按钮</button>
//   )
// }


// // 已经声明了MyButton 把它嵌套到另一个组件中
// // export default关键字指定了文件中的重要组件 属于JS语法
// export default function MyApp(){
//   return (
//     <div>
//       <h1>欢迎来到我的应用</h1>
//       <MyButton />
//     </div>
//   )
// }


// // JSX会把标签放到JS中 而大括号会“回到”JS中
// // 这样就可以从代码中嵌入一些变量并展示给用户
// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// export default function Profile(){
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of' + user.name}
//         // 第一层括号表示是JS表达式
//         // 第二层括号表示是JS对象
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   )
// }


// // 条件渲染
// // JS数组
// const products = [
//   { title: '卷心菜', isFruit: false, id: 1},
//   { title: '大蒜', isFruit: false, id: 2},
//   { title: '苹果', isFruit: true, id: 3},
// ];

// // 依赖JS的特性 用map()函数来渲染组件列表
// export default function ShoppingList() {
//   // map()函数将数组转换为<li>标签构成的列表
//   const listItems = products.map(product =>
//     <li 
//       key={product.id}
//       style={{
//         color: product.isFruit ? 'magenta' : 'darkgreen'
//       }}
//     >
//       {product.title}
//     </li>
//   );

//   return (
//     <ul>
//       {listItems}
//     </ul>
//   )
// }

// // 响应事件
// function MyButton(){
//   // 通过在组件内部声明事件处理函数来响应事件
//   // 事件处理函数通常在组件内部声明是因为
//   // 1.组件的事件处理函数需要访问组件的状态和属性
//   // 2.在组件中使用hooks可以让我们很容易地声明和使用事件处理函数
//   // 3.事件处理函数通常和组件的UI逻辑紧密相关 在组件内部声明会使代码更加清晰和易于维护
//   // 但在某些情况下 可以将事件处理函数提取到外部
//   function handleClick(){
//     alert('You clicked me');
//   }

//   return (
//     // onClick={handleClick}的结尾没有小括号！！
//     // 不要调用事件处理函数 只需要把函数传递给事假即可
//     // 当用户点击按钮时React会调用传递的事件处理函数
//     <button onClick={handleClick}>
//       点我
//     </button>
//   )
// }


// // 更新界面
// // 有时会希望组件“记住”一些信息并展示出来 这就需要在组件中添加state
// import {useState} from 'react';

// export default function MyApp(){
//   return(
//     <div>
//       <h1>独立更新的计数器</h1>
//       <MyButton />
//       <MyButton />
//     </div>
//   );
// }

// function MyButton(){
//   const [count, setCount] = useState(0);

//   function handleClick(){
//     setCount(count + 1);
//   }

//   return(
//     <button onClick={handleClick}>
//       点了{count}次
//     </button>
//   )
// }


// 组件间共享数据并一起更新
// 需要将各个按钮的state“向上”移动到包含所有按钮的组件中
// import {useState} from 'react';

// export default function MyApp(){
//   const [count, setCount] = useState(0);

//   function handleClick(){
//     setCount(count + 1);
//   }

//   return(
//     <div>
//       <h1>共同更新的计数器</h1>
//       {/* 将点击事件处理函数及state一同向下传递到每个MyButton中 */}
//       {/* 这种方式传递的信息被称作prop */}
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//     </div>
//   );
// }

// function MyButton({ count, onClick }){
//   return(
//     <button onClick={onClick}>
//       点了{count}次
//     </button>
//   )
// }