import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";
import Mine from "./pages/Mine";

import Nav from "./Nav/Index";
import UCenter from "./pages/UCenter";
import Notfound from "./pages/Notfound";
import Demo from "./pages/Demo";
import Shop from "./pages/Shop";
import Book from "./pages/Book";
//嵌套
import JavaBook from "./pages/BookCom/JavaBook";
import WebBook from "./pages/BookCom/WebBook";
/**
 *
 * HashRouter:锚点链接  带#
 * BrowserRouter:H5新特性,history.push  如果上线之后后台需要处理(重定向):否则会产生404bug
 */

/**
 *
 * 访问/mine/ucenter包含了mine
 * exact={true} 加入这个参数可以变成精准匹配   访问/mine/ucenter 不会再包含mine
 * strict严格匹配，不能多斜杠
 */

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Redirect from="/hellomine" to="/mine"></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/mine" exact={true} component={Mine}></Route>
          <Route path="/mine/ucenter/:id?/:name?" component={UCenter}></Route>
          <Route
            path="/demo"
            render={(props) => <Demo {...props} name="你好" />}
          ></Route>
          <Route path="/shop" exact component={Shop}></Route>
          {/* <Route path="/book" exact component={Book}></Route> */}
          <Book>
            <Switch>
              <Route path="/book/javabook" exact component={JavaBook} />
              <Route path="/book/webbook" exact component={WebBook} />
            </Switch>
          </Book>
          <Route component={Notfound}></Route>{" "}
          {/**这种没配路径path的404要放在最后面 */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
