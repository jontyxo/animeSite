import axios from 'axios';
import React,{useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";
import Footer from '../footer/footer';

import "./streamEp.css"

function StreamEp() {
const navigate=useNavigate();

const{id} =useParams();
const{episodeNum} =useParams();
const [epLink,setEpLink] = useState();
const [epId,setEpId]=useState();
const [loading,setLoading]=useState(false);

const fetch=async()=>{
    const result=await axios.get(`https://gogoanime2.p.rapidapi.com/vidcdn/watch/${id}-episode-${episodeNum}`);
     setEpLink(result.data.Referer)
     setEpId(epLink.slice(36, 44));
    setLoading(false)


        
   
    
   
}
useEffect(() => {
  setLoading(true)
    fetch();
    
},[epLink,epId])
const handleClick=async()=>{
   navigate(`//gogohd.net/streaming.php?id=${epId}&title=${id}+Episode+${episodeNum}&typesub=SUB`)
    
}

  return (
    <>
    {
        loading ? (
            <div className="PuffLoaderParent">

    <PuffLoader
        color="#000"
        loading={loading}
        
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
        ):
        (
            <>

           
    <div className="streamEp"> 
    <h1>{id}</h1>
            Watch Ep {episodeNum} here:
<button onClick={handleClick} className="btn btn-light">
    click
</button>
    </div>
            </>
        )
    }
   

   </>
  )
}

export default StreamEp