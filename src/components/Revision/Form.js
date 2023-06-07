import React, { useState } from 'react'

function Form() {
//value updation
    var [names,setNames]= useState('')
    var [email,setEmail]= useState('')
    var [pswrd,setPswrd]= useState('')


//button handler
    function submitData(e){
        e.preventDefault()
        if(names==='' || email==='' || pswrd===''){
            alert("please fill the details")
        }
        else{
            var user_info = {
                user_names : names,
                user_email : email,
                user_pswrd : pswrd
            }
            console.log(user_info)

//updation in local storage after change it into strings
            var changedData = JSON.stringify(user_info)
            console.log(changedData)
            localStorage.setItem(email,changedData)

//Reseting of form
            setNames("")
            setEmail("")
            setPswrd("")

        }
    }

//to fetch details from localstorage with the help of keys
    function fetchDetails(e){
        e.preventDefault()
        var allKeys = Object.keys(localStorage)
        // console.log(allKeys)
        allKeys.forEach((data,index)=>{
            var valuee = localStorage.getItem(data)
            console.log(valuee)
// convert strings data into objects
            var converted = JSON.parse(valuee)
            console.log(converted)
        })
    }




  return (
//form 
//event handler--
//value
    <form>
        <label> Name : </label>
        <input type='text' value={names}  onChange={(e)=>{setNames(e.target.value)}}></input>
        <br></br>
        <br></br>
        <label> Email : </label>
        <input type='email'value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        <br></br>
        <br></br>        
        <label> password : </label>
        <input type='password' value={pswrd} onChange={(e)=>{setPswrd(e.target.value)}}></input>
        <br></br>
        <br></br>
        <button onClick={(e)=>{submitData(e)}}>submit</button>
        <button onClick={(e)=>{fetchDetails(e)}}>Fetch Data</button>
    </form>
  )
}

export default Form