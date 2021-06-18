import React from "react";
import './App.css';
import ProxyDemo from "./ProxyDemo";
// import qs from "querystring";
// function App() {
//   return (
//     <div className="App">
//       hello
//     </div>
//   );
// }

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    // /**
    //  * fetch是基于promiss的
    //  */
    // fetch("http://wthrcdn.etouch.cn/weather_mini?city=北京")
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data.data.forecast)
    //     this.setState({
    //       list:data.data.forecast
    //     }) 
    //   })

    // /**
    //  * post请求
    //  */
    // fetch("/fengjing",{
    //   method: "POST",
    //   mode:"cors",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     "Accept": "application/json,text/plain,*/*"
    //   },
    //   //要传的参数
    //   body: qs.stringify({
    //     // city: "北京"
    //   })
    // }).then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //   })
  }

  render() {
    return (
      <div className="App">
        hello
        {/* <div>
          {
            this.state.list ?
              <div>
                <ul>
                  {
                    this.state.list.map((element, index) => {
                      return (
                        <li key={index}>
                          <span>{element.date}</span>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              :
              <div>请求中....</div>
          }
        </div> */}
        <ProxyDemo/>
      </div>
    );
  }
}

export default App;
