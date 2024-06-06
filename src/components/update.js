import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

const Update = () => {
    
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[])

    const handleUpdate = (e) => {
          e.preventDefault();
         axios.put(`https://665fedb05425580055b15ea1.mockapi.io/react/crud/crud-react/${id}`,
            {
                name:name,
                email:email,
            }
         ).then(() => {
             navigate("/read");
         })
    }
   
  return (
       <>
      
      <div className='container'>
     
     <div className='heading'>
     <h2>Update</h2>
     </div>


        <form>
           <label>Name</label>
           <input type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value) }
         />

           <label>Email Address</label>
           <input type='text' placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value) }
         />
               
           <button  type="submit" onClick={handleUpdate} className='btn'> Update </button>
           <Link to="/read">  <button className='back-btn'> Back </button> </Link>
         
        </form>
        </div>
        </>
    
  )
}

export default Update;
