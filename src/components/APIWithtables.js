import axios from 'axios'
import React, { useEffect, useState } from 'react'

function APIWithtables() {
    var [names, setName] = useState("")
    var [email, setEmail] = useState("")
    var [pswrd, setPswrd] = useState("")
    var [api, setApi] = useState([])





    function submitHandler(e) {
        e.preventDefault()
        if (names === "" || email === '' || pswrd === "") {
            alert("enter details")

        }
        else {
            var user_data = {
                user_name: names,
                user_email: email,
                user_pswerd: pswrd
            }
            // console.log(user_data)
            axios.post("http://localhost:3001/users", user_data)
                .then(() => { console.log("done")
                setName("")
                setEmail("")
                setPswrd("")
             }).catch(() => { console.log(" not done") })
        }
    }


    function APILOAD(){
        axios.get("http://localhost:3001/users")
        .then((done) => { setApi(done.data) }).catch((err) => { console.log(err) })
    }
    useEffect(() => {
        APILOAD()
    }, [])


    function deleteData(e,id){
        e.preventDefault();
        axios.delete(`http://localhost:3001/users/${id}`)
        .then(()=>{
            console.log("done")
            APILOAD();
        }).catch(()=>{console.log("not done")})

    }






    return (
        <>
            <form>
                <input type='text' value={names} placeholder='enter your name' onChange={(e) => { setName(e.target.value) }}></input>
                <br></br>
                <br></br>
                <input type='email' value={email} placeholder='enter your email' onChange={(e) => { setEmail(e.target.value) }}></input>
                <br></br>
                <br></br>
                <input type='password' value={pswrd} placeholder='enter your password' onChange={(e) => { setPswrd(e.target.value) }}></input>
                <br></br><br></br>
                <button onClick={(e) => {submitHandler(e)}}>submit</button>
            </form>
// prints each data on screen
           {api.map((data,index)=>{
             return <h1 key={index}>{data.user_name}<button onClick={(e)=>{deleteData(e, data.id)}}>delete</button></h1>
           })}


        </>
    )
}

export default APIWithtables