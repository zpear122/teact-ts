import React from "react";

//props内容不可以被修改，只能在父组件里面去修改
export default class MyNav extends React.Component{
    render(){
        console.log(this.props.nav)
        return(
            <div>
                {/* jsx语法 */}
                <div>{this.props.title}</div>
                <ul>
                    {
                        this.props.nav.map((element,index)=>{
                            return <li key={index}>{element}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}