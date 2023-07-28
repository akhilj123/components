import React, { useEffect ,useState } from 'react'
import axios from '../../axios'


const SearchBar = () => {

  const [searchInput, setSearchInput] = useState([])

  axios.get('grocery/ecom').then((response)=>{console.log(response.data) 
    setSearchInput (response.data)})
    
   


  const handleChange = (e) => {
   e.preventDefault();
   setSearchInput(e.target.value);
 };
 
 if (searchInput.length > 0) {
  searchInput.filter((obj) => {
     return obj.name.includes(searchInput);
 });
 }
 
 return (
   <div className="app-container"> 
   <input className="search"
    type="text"
    placeholder="Search here"
    onChange={handleChange}
    value={searchInput} 
  />

 <table>
     <thead>
      <tr>
        <th> id </th>
        <th> name </th>
        <th> avatar </th>
      </tr>
   </thead>
   
   
  {searchInput.map((obj,index)=>{
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
 )
};
export default SearchBar;


