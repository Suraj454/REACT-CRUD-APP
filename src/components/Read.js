import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Read = () => {

     const [data, setData] = useState([]);   

    function getData() {

        axios.get("https://665fedb05425580055b15ea1.mockapi.io/react/crud/crud-react")
        .then((res) => {
            console.log(res.data);
            setData(res.data);
              })
    }

    useEffect(() => {
        getData();
    },[])


    function handleDelete(id) {
        axios.delete(`https://665fedb05425580055b15ea1.mockapi.io/react/crud/crud-react/${id}`)
        .then(() =>{
            getData()
        })
    }

    const  setToLocalStorage  = (id,name,email) => {
          localStorage.setItem("id", id);
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
    }

   
  return (
    <>

    <div className='Read-container'>
    
    <div className='heading'>
    <h2 >Read Operation</h2>
    <Link to="/"><button className='btn-create'> Create </button> </Link>
    </div>

        <table  className='table-content'>
            <thead>
                <tr> 
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
                </tr>
            </thead>

 {
     data.map((ele) => {
       return(
        <>
            <tbody>
            <tr>
            <td>{ele.id}</td>
            <td>{ele.name}</td>
             <td>{ele.email}</td>
            <td>
            <Link to="/update"> 
            <button  onClick={() => setToLocalStorage(ele.id,ele.name,ele.email)} className='edit-btn'>Edit</button> 
            </Link>
                <button onClick={() =>handleDelete(ele.id)}  className='delete-btn'>Delete</button>
            </td>
            </tr>
            </tbody>
            </>
          )
        })

}
           

        </table>
        </div>
    </>
  )
}

export default Read