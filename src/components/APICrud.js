import axios from 'axios'
import React, { useState } from 'react'

function APICrud() {
    var [names,setName] = useState("")
    var [email,setEmail] = useState("")
    var [pswrd,setPswrd] = useState("")
    var [api, setApi] = useState([])


    function submitData(e){
        e.preventDefault()
        if(names==="" || email==="" || pswrd===""){
            alert("fill details")
        }
        else{
            var user_details = {
                user_name : names,
                user_email : email,
                user_pswrd : pswrd
            }
            console.log(user_details)
            axios.post("http://localhost:3001/users",user_details)
            .then(()=>{
                console.log("done")
                setName("")
                setEmail("")
                setPswrd("")
            }).catch(()=>{console.log(" not done")})
        } 
    }

    function get_details(e){
        e.preventDefault()
        axios.get("http://localhost:3001/users")
        .then((done)=>{setApi(done.data)}).catch((error)=>{console.log(error)})
    }

    function deleteHandler(e,id){
        e.preventDefault()
        console.log(id)
        axios.delete(`http://localhost:3001/users/${id}`)
        .then(()=>{console.log("Deleted Sucess")}).catch(()=>{"Unable to delete  "})
    }
    

  return (
    <>
        <label> Name : </label>
        <input type='text' value={names} onChange={(e)=>{setName(e.target.value)}}></input>
        <br></br>
        <br></br>
        <label> Email : </label>
        <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        <br></br>
        <br></br>        
        <label> password : </label>
        <input type='password' value={pswrd} onChange={(e)=>{setPswrd(e.target.value)}} ></input>
        <br></br>
        <br></br>
        <button onClick={(e)=>{submitData(e)}}>submit</button>
        <button onClick={(e)=>{get_details(e)}}>print details</button>
        {api.map((array_data,array_index)=>{
           return <h2 key={array_index}> 
                        {array_data.user_name} {array_data.user_email} <button onClick={(e)=>{deleteHandler(e,array_data.id)}}>delete</button>
                  </h2>
        })} 
    </>
  )
}

export default APICrud