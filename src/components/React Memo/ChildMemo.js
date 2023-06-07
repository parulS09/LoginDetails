import React, { memo } from 'react'

function ChildMemo(props) {
    console.log("Child is working")

    return (
    <>
    {props.prop_data.map((data,index)=>{
        return <h1 key={index}> {data} </h1>
    })}
    </>
  )
}

export default memo(ChildMemo)