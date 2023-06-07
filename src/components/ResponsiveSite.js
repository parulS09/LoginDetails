import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../components/styles/ResponsiveSite.css"
import { Link } from 'react-router-dom'

function ResponsiveSite() {
  var [names, setName] = useState("")
  var [email, setEmail] = useState("")
  var [pswrd, setPswrd] = useState("")
  var [api, setApi] = useState([])
  //for refreshing page after input data and deletion
  var [upload, setUpload] = useState();
  var [del, setDel] = useState();


  function FetchAPIAutomatic() {
    axios.get("https://project-api-u0j8.onrender.com/accounts")
      .then((done) => { setApi(done.data) }).catch((err) => { console.log(err) })
  }
  //component did mount and did update useEffect refreshes the page
  useEffect(() => {
    FetchAPIAutomatic();
  }, [del, upload])


  function buttonHandler(e) {
    e.preventDefault()
    if (names === "" || email === "" || pswrd === "") {
      alert("please fill details")
    }
    else {
      var user_info = {
        user_name: names,
        user_email: email,
        user_pswrd: pswrd
      }
      console.log(user_info)
      axios.post("https://project-api-u0j8.onrender.com/accounts", user_info)
        .then(() => {
          console.log("done")
          setUpload(email);
          setName("")
          setEmail("")
          setPswrd("")
        }).catch(() => { console.log("not done") })
    }
  }
  function deletedData(e, id) {
    e.preventDefault()
    axios.delete(`https://project-api-u0j8.onrender.com/accounts/${id}`)
      .then(() => {
        console.log("deleted");
        setDel(id)
      }).catch(() => { console.log("not deleted") })
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

      <center><table border={2} className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th colSpan={2}>Buttons</th>
          </tr>
        </thead>

        <tbody>
          {api.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.user_name}</td>
                <td>{data.user_email}</td>
                <td>{data.user_pswrd}</td>
                <td><button onClick={(e) => { deletedData(e, data.id) }}>Delete</button></td>
                <td><Link to={"/edit"} state={
                  {
                    prop_id: data.id,
                    prop_name: data.user_name,
                    prop_email: data.user_email,
                    prop_pswrd: data.user_pswrd
                  }
                }><button>Edit</button></Link></td>
              </tr>
            )
          })}
        </tbody>
      </table></center>
    </>
  )
}

export default ResponsiveSite




