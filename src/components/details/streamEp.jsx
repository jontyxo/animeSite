import axios from 'axios';
import React,{useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";
import Footer from '../footer/footer';

import "./streamEp.css"

function StreamEp() {
const navigate=useNavigate();

let{id,episodeNum} =useParams();

const [epLink,setEpLink] = useState();
const [epId,setEpId]=useState();
const [loading,setLoading]=useState(false);

const fetch=async()=>{
    const result=await axios.get(`https://gogoanime2.p.rapidapi.com/vidcdn/watch/${id}-episode-${episodeNum}`);
     setEpLink(result.data.Referer)
    //  setEpId(epLink.slice(36, 44));
    setLoading(false)
}

useEffect(() => {
  setLoading(true)
    fetch();
    
},[epLink,epId,episodeNum])

const prevEp=()=>{
  episodeNum=(Number(episodeNum)-1);
 
  navigate(`/details/watch/${id}/${episodeNum}`)

}

const nextEp=()=>{
  episodeNum=(Number(episodeNum)+1);
  navigate(`/details/watch/${id}/${episodeNum}`)

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
           <p className="streamEpP"> Watch Ep {episodeNum} here: </p>
           <div>
    <button disabled={{episodeNum}===1} className="btn btn-light streamButtons" onClick={prevEp}>Prev Episode</button>
    <button className="btn btn-light streamButtons" onClick={nextEp}>Next Episode</button>

    </div>
<iframe width="50%" height="500px" src={epLink} frameborder="0" allowFullScreen className='iframe'></iframe>

    </div>
    

            </>
        )
    }
   

   </>
  )
}

export default StreamEp