import React, { useEffect ,useState } from 'react';
import './Banner.css';
import axios from '../../axios'
import { baseUrl } from '../../constants/constants';


function Banner() {
  
const [state,setState]=useState([])
  return(
    <div className="Banner">
        <h1>hello world</h1>

        <button onClick={()=>{
        axios.get('grocery/ecom').then((response)=>{console.log(response.data) 
        setState (response.data)})
        }}>click me</button>
        {
           <div className="app-container"> 
          <input className="search"
             type="text"
          placeholder="Search here"
            
          />

         

          <table>
            <thead>
             <tr>
               <th> id </th>
                <th> name </th>
            <th> avatar </th>
              </tr>
     
            </thead>
            
            
        {state.map((obj,index)=>{
        return(
        
         
          <tbody>
         <tr>
           <td>{index+1}</td>
           <td>{obj.name}</td>
           <td><img src={obj.avatar} alt=" "/> </td>

        </tr>
         
      </tbody>
   
   )})}
    </table>


</div>

  }
  </div>
  )}

    export default Banner; 





    
