import React, { useState } from 'react'

function Events() {

    var [names,setName] = useState("");
    var [email,setEmail] = useState("");
    var [password,setPassword] = useState("");

    function submitHandler(e){
        e.preventDefault()
        if(names==="" || email==="" || password ===""){
            alert("Fill all Feilds..")
        }else{
            var user_obj = {
                user_name : names,
                user_email : email,
                user_pass : password
            }
            console.log(user_obj)
            var convertedData = JSON.stringify(user_obj)
            console.log(convertedData)
            localStorage.setItem(email,convertedData)
            

            setName("");
            setEmail("");
            setPassword("");
        }
    }

    return (
        <form>
            <label> Name: </label>
            <input type='text'  value={names}  onChange={(event)=>{setName(event.target.value)}}/>
            <br/>
            <br/>
            <label> Email: </label>
            <input type='email' value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
            <br/>
            <br/>
            <label> Password: </label>
            <input type='password' value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
            <br/>
            <br/>
            <button type='submit' onClick={(e)=>{submitHandler(e)}}> submit</button>
        </form>  
    )
}

export default Events