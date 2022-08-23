
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";


export const Home=()=>{
  let navigate=useNavigate();
    const [search,setSearch] =useState([]);
    
    
    return (
      <div className="App">
        <form >
          <h2>Image Gallery</h2>
          <input type="text" onChange={(e)=>setSearch(e.target.value)}/> &nbsp;
          <button onClick={()=>search && navigate(`/search/${search}`)} type="button">Search</button>
          
        </form>
      </div>
    )
}

