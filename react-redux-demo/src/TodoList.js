import React, { Component } from "react"; //imrc
import { Input, Button, List } from "antd";
const list = ["啊我死了啊我死了啊我死了", "哈哈哈哈哈哈哈哈", "嘿嘿额嘿嘿额黑恶黑"];
class TodoList extends Component {
  //ccc
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            placeholder="write something"
            style={{ width: "200px", marginRight: "20px" }}
          />
          <Button type="primary" style={{marginBottom:"20px"}}>增加</Button>
          <div>
              <List
                bordered
                dataSource={list}
                renderItem={item=>(<List.Item>{item}</List.Item>)}
              >

              </List>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
