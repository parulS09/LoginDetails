import React, { useState } from 'react'

function State() {
    var [state,setState] = useState(0)
    var [data,setData]= useState(0)


    function inc(){
        setState(state+1)
        console.log(state)
    }

    function dec(){
        setState(state-1)
        console.log(state)
    }

    function print_tables(){
        for(var i=1;i<=10;i++){
            console.log(data);
            data = data+1;
        }
    }



  return (
    <>
    {state}
    <button onClick={()=>{inc()}}> increment </button>
    <button onClick={()=>{dec()}}> decrement</button>
    <button onClick={()=>{print_tables()}}> print numbers</button>
    </>
  )
}

export default State