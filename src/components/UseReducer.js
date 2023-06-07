import React, { useReducer, useState } from 'react'

function reducer(state,action){
    switch(action){
        case "Inc":
            return state + 1;
        case "Dec":
            return state - 1;
    }
}


function UseReducer() {
     var  [state,dispatch] = useReducer(reducer,0)

    return (
        <>
            {state}
            <br></br>
            <button onClick={()=>{dispatch("Inc")}}>Inc Value</button>
            <button onClick={()=>{dispatch("Dec")}}>Dec Value</button>
        </>
    )
}

export default UseReducer