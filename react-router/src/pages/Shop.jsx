import React from "react";
import {Redirect} from "react-router-dom";
export default class Shop extends React.Component{

    state={
        isLogin:true
    }

    render(){
        const { isLogin } = this.state;
        return(
            <div>
                {
                   isLogin?
                   <div>Shop</div>
                   :
                   <Redirect to="/"></Redirect>
                }
            </div>
        )
    }
}
