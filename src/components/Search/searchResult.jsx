import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import PuffLoader from "react-spinners/PuffLoader";
import { useNavigate } from "react-router-dom";


import axios from 'axios'

function SearchResult() {
  const navigate=useNavigate();

    const {animename}=useParams();
const [myData,setMyData]=useState([]);

    const [loading,setLoading]=useState(false);
     const fetch=async()=>{
        console.log({animename})
        const result =await axios.get(`https://gogoanime2.p.rapidapi.com/search?keyw=${animename}`)
        console.log(result.data)
        setMyData(result.data)
        
        setLoading(false)
     }
    useEffect(() => {
      
        setLoading(true)
fetch();
    },[animename])
  return (
    <>
        {loading ? (
            <div className="PuffLoaderParent">

            <PuffLoader
    color="#000"
    loading={loading}
    
    size={100}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
            </div>
        ) :
        (
             <>
             <span className="headerTitle">Searched Results for: {animename}</span>

                <div className="home-anime">
                {myData.map((post)=>{
   const {animeId,animeTitle,animeImg,releasedDate}=post;

return (
 
 <div className="card" key={animeId} onClick={()=>{
 navigate("/details/"+animeId)
   }}>
   <img className="anime-poster" src={animeImg} />

   <p className="anime-title">{animeTitle}</p>

   
 </div>
 
)
   })}
                </div>
             </>           
        )}
    </>
  )
}

export default SearchResult