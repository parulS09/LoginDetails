import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function EditForm() {
  var [names, setName] = useState("")
  var [email, setEmail] = useState("")
  var [pswrd, setPswrd] = useState("")
  var received_data = useLocation().state;

  //for automatic redirection
  var navigate = useNavigate();

  useEffect(() => {  
    setName(received_data.prop_name);
    setEmail(received_data.prop_email);
    setPswrd(received_data.prop_pswrd)
  }, [])

  function buttonHandler(e) {
    e.preventDefault();
    if(names===""||email===""||pswrd===""){
      alert("Fill all details ")
    }
    else{
      axios.put(`https://project-api-u0j8.onrender.com/accounts/${received_data.prop_id}`,{
        user_name: names,
        user_email: email,
        user_pswrd: pswrd
      }).then(()=>{
        console.log("Data Updated Sucess");
        navigate("/");
      }).catch(()=>{console.log("Data not Updated")})
    }
  }

  return (
    <>
      <form>
        <center><div className='body'>
          <label className='ttext'>Name </label>
          <input type='text' value={names} placeholder='Enter Your Name' onChange={(e) => { setName(e.target.value) }} className='text'></input>
          <br></br>
          <br></br>
          <label> Email </label>
          <input type='email' value={email} placeholder='Enter Email' onChange={(e) => { setEmail(e.target.value) }} className='mail'></input>
          <br></br>
          <br></br>
          <label> Password </label>
          <input type='password' value={pswrd} placeholder='Enter Password' onChange={(e) => { setPswrd(e.target.value) }} className='pword'></input>
          <br></br>
          <br></br>
          <button className='btn' onClick={(e) => { buttonHandler(e) }}>Submit</button>
        </div></center>
      </form>
    </>
  )
}

export default EditForm