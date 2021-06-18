import React from "react";

export default class KeyDemo extends React.Component {

    constructor() {
        super();
        this.state = {
            userInfo: [
                {
                    name: 'aa',
                    age: 18,
                    sex: "男",
                    jobs: ["11", "22", "33"]
                },
                {
                    name: 'bb',
                    age: 19,
                    sex: "男",
                    jobs: ["11", "22", "33"]
                },
                {
                    name: 'bb',
                    age: 20,
                    sex: "女",
                    jobs: ["11", "22", "33"]
                },
            ]
        }
    }
    add = () => {
        //这里不用push是因为push返回的是一个数组长度
        // this.state.userInfo.push
        //加key之后，如果数据索引没有发生变化则UI不会重绘，只有发生变化的部分会重绘，节省资源提高性能
        // 不加key每次新增整个列表都会重新渲染
        this.setState({
            userInfo: this.state.userInfo.concat(
                [{
                    name: "周周",
                    age: 18,
                    sex: "男",
                    jobs: ["挖坑工程师"]
                }
                ]
            )
        })
    }
    render() {
        return (
            <div>
                keyDemo
                <ul>
                    {
                        this.state.userInfo.map((element, index) => {
                            return (
                                //key永远在最外层
                                <li key={index}>
                                    <span>{element.name}</span>
                                    <span>{element.age}</span>
                                    <span>{element.sex}</span>
                                    <div>
                                        {
                                            element.jobs.map((elementChild, indexChild) => {
                                                return (
                                                    <div key={indexChild}>
                                                        <span>{elementChild}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.add}>添加数据</button>
            </div>
        )
    }
}