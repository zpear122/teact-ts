import React from "react";
import api from "./api"
export default class ProxyDemo extends React.Component {

  componentDidMount() {

    // fetch("/api/list")
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //   })

    //封装的get请求
    api.getChenpin().then(res => res.json()).then(data => {
      console.log(data)
    })

    //封装的post请求
    api.postLogin({
      user_id:"iwen@qq.com",
      password:"iwen123",
      verification_code:"crfvw"
    }).then(res=>res.json()).then(data=>{
      console.log('登录返回：',data)
    })
  }



  render() {
    return (
      <div>
        <p>ProxyDemo</p>
        <div>

        </div>
      </div>
    )
  }
}