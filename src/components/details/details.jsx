import "./details.css"
import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";
import Footer from "../footer/footer";




function Details() {
    const{id} =useParams();
  const navigate=useNavigate();


const [animeImg,setAnimeImg]=useState();
const [animeTitle,setAnimeTitle]= useState();
const [releasedDate,setReleasedDate]=useState();
const [status,setStatus]=useState();
const [description,setDescription]=useState();
const [loading,setLoading]=useState(false);

useEffect(()=>{
  setLoading(true)
   fetch();
},[])
  const fetch=async()=>{
    const result=await axios.get(`https://gogoanime2.p.rapidapi.com/anime-details/${id}`)
   
    setAnimeImg(result.data.animeImg);
    setAnimeTitle(result.data.animeTitle);
    setReleasedDate(result.data.releasedDate)
    setStatus(result.data.status)
    setDescription(result.data.synopsis)
    setLoading(false)
   

  }


  return (
    <div className="details">

  {
    loading ? 
    <div className="PuffLoaderParent">

    <PuffLoader
        color="#000"
        loading={loading}
        
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    
    : (
      <div className="animeDetails">
      <div className="left">
       <img src={animeImg} />
     
   
      </div>
      <div className="right">
       <span className="animeTitle">{animeTitle}</span>
       <div>
           <p><strong>Release Year:</strong> {releasedDate}</p>
           <p><strong>Status:</strong> {status}</p>
   </div>
   <p>
       <strong>Description:</strong> {description}
   </p>
    <button type="button" className="btn btn-light"onClick={()=>{
       navigate(`/details/watch/${id}`);
      }}>Watch</button>
      </div>
     
       </div>
    )
  }
  
    </div>

    

  
  )
}

export default Details