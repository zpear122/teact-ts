import React from "react";

const Demo = (props)=>{
    console.log(props)
    return(
        <div>
            demo{props.name}
        </div>
    )
}

export default Demo;