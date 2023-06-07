import React, { useState } from 'react'
import ChildMemo from './ChildMemo'

function ParentMemo() {
    var [data,setData] = useState(["Aakash","Parul","Ramesh"]);

    var [count,setCount] = useState(0);
    return (
    <>
        <h1>Parent</h1>
        {count}
        <ChildMemo prop_data = {data}/>

        <button onClick={()=>{setCount(count+1)}}>Increment Count</button>
    </>
  )
}

export default ParentMemo