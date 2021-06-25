import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import reducers from "./reducers/counter";
import 'antd/dist/antd.css'; //最好放在最外层
//创建store仓库
const store = createStore(reducers);
// store.subscribe(()=>{ //监听数据的变化
//   console.log("state:",store.getState())
// })
const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        onIncrement={() => store.dispatch({ type: "INCREMENT" })}
        onDecrement={() => store.dispatch({ type: "DECREMENT" })}
        value={store.getState()}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

render();
store.subscribe(()=>{
  render();
})