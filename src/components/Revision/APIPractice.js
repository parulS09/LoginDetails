/*
import axios from 'axios';
import React, { useState } from 'react';


function APIPractice() {

  var [name,setName]=useState(""); 
  var [email,setEmail] = useState("");
  var [api,setApi] = useState([])

  function submitButtonHnadler(e){
    e.preventDefault();
    if(name==="" || email===""){
      alert("Feilds are empty");
    }else{

      //create user object 
      var users_data = {
        user_name : name,
        user_email: email
      } 
      console.log(users_data)

      //update it to api
      axios.post("http://localhost:3001/users",users_data)
      .then(()=>{console.log("Data Sent")}).catch(()=>{console.log("data not sent")})}

      setName("")
      setEmail("")
    }
  
    function fetchAPI(){
      var dataReceivedFromAxios = axios.get("http://localhost:3001/users")
      dataReceivedFromAxios.then((data)=>{setApi(data.data)}).catch((err)=>{console.log("Api not fetched")})
    }
  
    console.log(api)
  return (
    <>
      <h1>Api by Axios</h1>
      
      <form>
        <label>Enter your Name - </label>
        <input type='text' placeholder='Enter your name' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        <br></br>
        <label>Enter your Email - </label>
        <input type='email' placeholder='Enter your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        <br></br>
        
        <button onClick={(e)=>{submitButtonHnadler(e)}}>Submit Data</button>
        <br></br><br></br>
      </form>

    
      <button onClick={()=>{fetchAPI()}}>Fetch Api</button>

      <ol>
        <li>dqwdqwd </li>
        {api?.map((data,index)=>{ 
          return <li>{data.user_name}</li>
        })}
      </ol>
    </>
  )   
}

export default APIPractice
*/



import axios from 'axios'
import React, { useState } from 'react'

function APIPractice() {

  var [names,setName] = useState("")
  var [email,setEmail] = useState("")

  // var fetchedData = axios("http://localhost:3001/users")
  // fetchedData.then((data)=>{console.log(data)}).catch(()=>{console.log("wrong")})

  function dataChanged(e) {
    e.preventDefault()
    if(names==="" || email==""){
      alert("fill the form")
    }
    else{
      var user_info = {
        user_name : names,
        user_mail : email
      }
      console.log(user_info)
      axios.post("http://localhost:3001/users",user_info)
      .then(()=>{console.log("done")}).catch(()=>{console.log("not done")})
    }


  }
  

  return (
    <>
    <form>
      <input type='text' placeholder='enter name' onChange={(e)=>{setName(e.target.value)}} ></input>
      <br></br>
      <input type='email' placeholder='enter email' onChange={(e)=>{setEmail(e.target.value)}}></input>
      <br></br><br></br>

      <button onClick={(e)=>{dataChanged(e)}}>submit</button>
    </form>

    </>
  )
}

export default APIPractice