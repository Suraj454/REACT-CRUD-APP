import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Create = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate()

     const header = {"Access-Control-Allow-Origin": "*" };

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log("CLick")
       axios.post("https://665fedb05425580055b15ea1.mockapi.io/react/crud/crud-react",{
        name : name,
        email: email,
        header,
       })
       .then(() => {
        navigate("/read");
       })
    };
  return (
    <>

    <div className='container'>
    
    <div className='heading '>
    <h2>Create</h2>
    <Link  to="/read"> <button className='btn'>Show Data</button> </Link>
    </div>

   
        <form>
            <label>Name</label>
           <input type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)} />
            

           <label>Email Address</label>
           <input type='text'  
           placeholder='Email'
              value={email}
            onChange={(e) => setEmail(e.target.value)} />
               
           <button onClick={handleSubmit} className='btn'>Submit </button>
         
        </form>
        </div>
    </>
  )
}

export default Create