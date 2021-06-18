import React from "react";

import PropTypes from "prop-types";

export default class PropsTypeDemo extends React.Component {

    render(){
        return(
            <div>
                PropsTypeDemo
                <p>{this.props.title}</p>
            </div>
        )
    }
}


PropsTypeDemo.propTypes = {
    title:PropTypes.string //类型 必传
    // title:PropTypes.string.isRequired //类型 必传
}

//缺省值
PropsTypeDemo.defaultProps = {
    title:'默认值'
}