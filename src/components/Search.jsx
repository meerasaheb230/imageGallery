import axios from "axios";
import React ,{useEffect,useState}from "react"
import { useParams } from 'react-router-dom';
import "./Search.css";
import { useNavigate } from "react-router-dom";

export const Search=()=>{
const {search} =useParams();
let navigate=useNavigate();

const [data,setData]=useState([]);
useEffect(()=>{
  axios.get(`https://pixabay.com/api/?key=28321779-270997abe323e421f9bc9d2cf&q=${search}&image_type=photo&pretty=true`)
  .then(res =>setData(res.data.hits))
})


    return (
     
     <div>
       
       <div className="search">
       <button onClick={()=> navigate(`/`)} type="button">Home</button>
        <div className="row">
          {data && data.map(imgObj=>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" key={imgObj.id} src={imgObj.largeImageURL} height="250"  alt="images"/>
              <div className="card-body">
                <h5 className="card-title">{imgObj.tags}</h5>
              </div>
              </div>
            </div>)}
        </div>
       </div>

     </div>
        )
}