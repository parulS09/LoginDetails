import React, { useRef } from 'react'

function Refs() {
    ////please do study of Forward refs from internet
    var input_box = useRef();
    function colorChnageHandler(e){
        e.preventDefault();
        input_box.current.style.backgroundColor = "red"
        setTimeout(()=>{
        input_box.current.style.backgroundColor = "white"
        },3000)
    }

  return (
    <form>
        <label>Enter Name - </label>
        <input type='text' placeholder='enter your name' ref={input_box}></input>
        <br></br>
        <button onClick={(e)=>{colorChnageHandler(e)}}>Submit</button>
    </form>
  )
}

export default Refs