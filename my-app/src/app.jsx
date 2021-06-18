import React from "react";
// import Home from "./Home";
// import Mynav from "./MyNav";
// import StateComponent from "./StateComponent.jsx"
// import ComponentLife from "./ComponentLife.jsx"
// import IfDemo from "./IfDemo"
// import KeyDemo from "./KeyDemo";
// import FormDemo from "./FormDemo";
// import RefsAndDom from "./RefsAndDom";
// import RefsForm from "./RefsForm"
// import Parent from "./components/Parent";
// import Compose from "./Compose";
import PropsTypeDemo from "./PropsTypeDemo";
//用类的方式创建组件
class App extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "文本1"
        }
    }

    updateTitle = () => {
        this.setState((state,props)=>{
            return{
                title:"文本2"
            }
        })
    }

    updateTitle2 = (data) => {
        this.setState((state,props)=>{
            return{
                title:data
            }
        })
    }

    render() {
        // const nav1 = ["首页","学习","视频"]
        // const nav2 = ["1","2","3"]
        return (
            <div>
                {/* <h1>hello Component</h1>
                <h2>学习react</h2>
                <Home/>
                <Mynav nav = {nav1} title="导航1"/>
                <Mynav nav = {nav2} title="导航2"/>
                <StateComponent/> */}
                {/* <ComponentLife title={this.state.title}  updateTitle = {this.updateTitle2}/>
                <button onClick={this.updateTitle}>父组件自己修改title</button> */}
                {/* <IfDemo/> */}
                {/* <KeyDemo/> */}
                {/* <FormDemo/> */}
                {/* <RefsAndDom/> */}
                {/* <RefsForm/> */}
                {/* <Parent/> */}
                {/* <Compose>
                    <div>我是组合效果</div>
                </Compose> */}
                <PropsTypeDemo/>
            </div>
        )
    }
}

export default App;