// 项目的根组件 一切组件的根基
// 被引入到index.js 然后渲染到index.html中id为root的dom节点上

// const count = 100;

// function getName(){
//   return 'Jack';
// }

// function App() {
//   return (
//     <div className="App">
//       this is App

//       {/* 如何在JSX中使用JS表达式? 通过大括号（只能识别表达式，不能语句） */}
//       {/* 使用引号传递字符串 */}
//       {'this is massage'}
//       {/* 识别js变量 */}
//       {count}
//       {/* 函数调用 */}
//       {getName()}
//       {/* 方法调用 */}
//       {new Date().getDate()}
//       {/* 使用js对象 */}
//       <div style = {{color:'red'}}>this is div</div>
//     </div>
//   );
// }

// const list = [
//   {id: 1001, name: 'Vue'},
//   {id: 1002, name: 'React'},
//   {id: 1003, name: 'Angular'}
// ]

// function App(){
//   return (
//     <div className = "App">
//       this is App
//       {/* 渲染列表 */}
//       {/* map 循环哪个结构 return结构 */}
//       {/* 注意事项：加上一个独一无二的key 字符串或者number 一般用id */}
//       {/* key的作用：React框架内部使用 提升性能的 */}
//       <ul>
//         {list.map(item => <li key = {item.id}>{item.name}</li>)}
//       </ul>
//     </div>
//   )
// }

// jsx中实现条件渲染
// const isLogin = false;

// function App(){
//   return (
//     <div className="App">
//       {/* 逻辑与 */}
//       {isLogin && <span>this is span</span>}
//       {/* 三元运算 */}
//       {isLogin ? <span>jack</span> : <span>loading...</span>}
//     </div>
//   )
// }

// // 定义文章类型
// const articleType = 1; //0 1 3

// // 定义核心函数（根据文章类型返回不同的JSX模板）
// function getArticleTem(){
//   if(articleType === 0){
//     return <div>我是无图文章</div>
//   } else if(articleType === 1){
//     return <div>我是单图模式</div>
//   } else{
//     return <div>我是三图模式</div>
//   }
// }

// function App(){
//   return(
//     <div className = "App">
//       {/* 通过调用函数渲染不同的模板 */}
//       {getArticleTem()}
//     </div>
//   )
// }

// function App(){
// const handleClick = () => {
//   console.log('button被点击了')
// }

// 事件参数e
// const handleClick = (e) => {
//   console.log('button被点击了', e)
// }

// 传递自定义参数
// const handleClick = (name) => {
//   console.log('button被点击了', name)
// }

// 同时传递事件对象和自定义参数
//   const handleClick = (name, e) => {
//     console.log('button被点击了', name, e)
//   }

//   return(
//     <div className = "App">
//       <button onClick = {(e) => handleClick('jack', e)}>click me</button>
//     </div>
//   )
// }

// // 1.定义组件
// function Button(){
//   // 组件逻辑
//   return <button>click me!</button>
// }

// function App(){
//   return (
//     <div className = "App">
//       {/* 2.使用组件（渲染组件） */}
//       {/* 自闭和 */}
//       <Button />
//       {/* 成对标签 */}
//       <Button></Button>
//     </div>
//   )
// }

// useState实现一个计数器按钮
// import { useState } from 'react'

// function App(){
//   // 1.调用useState添加一个状态变量
//   // count 状态变量
//   // setCount 修改状态变量的方法
//   let [count, setCount] = useState(0)

//   // 2.点击事件回调
//   const handleClick = () => {
//     // 作用：1.用传入的新值修改count
//     // 2.重新使用新的count渲染UI
//     setCount(count + 1)
//     // 直接修改 无法引发视图更新
//     // count++
//     // console.log(count)
//   }

//   // 修改对象状态

//   const [form, setForm] = useState({name: 'Jack'})

//   const formChange = () => {
//     // 错误写法：直接修改
//     // form.name = 'John'
//     // 正确写法：setForm 传入一个全新的对象
//     setForm({
//       ...form,
//       name: 'John'
//     })
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>{count}</button>
//       <button onClick={formChange}>修改form{form.name}</button>

//     </div>
//   )
// }

import "./index.css"

const style = {
  color: "red",
  fonSize: "50px"
};

function App() {
  return (
    <div>
      {/* 行内样式控制 */}
      <span style={style}>this is span</span>
      {/* 通过class类名控制 */}
      <span className="foo">this is class foo</span>
    </div>
  );
}

export default App;
