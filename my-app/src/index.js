import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx"

//jsx语法:  <h1>hello12</h1>   既不是对象也不是字符串  插入到dom里面
//jsx语法  javaScript + XML(html)语法
//解读： 遇见<>按照html解析 遇见{}按照javascript解析
// const temp = "你好";
// ReactDOM.render(
//     <h1>hello12 {temp}!</h1>,
//     document.getElementById('root')
// );

// 如果存在标签结构并且要换行，要用小括号括起来
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }

// setInterval(tick, 1000);

//组件
//可以是jsx也可以是js
ReactDOM.render(<App/>, document.getElementById("root"));
