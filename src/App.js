import React from 'react'
 import Create from './components/Create';
 import Read from './components/Read';
 import Update from './components/update'
 import "./style.css";

 import { BrowserRouter,Routes,Route } from 'react-router-dom';
 

const App = () => {
  return (
    <>
    <BrowserRouter>  
     <Routes>
        <Route exact path="/" element={<Create/>}> </Route>
        <Route exact path="/read" element={<Read/>}> </Route>
        <Route exact path="/update" element={<Update/>}> </Route>
       

     </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App