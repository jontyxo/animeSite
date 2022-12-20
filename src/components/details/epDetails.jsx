import React,{useState,useEffect} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import "./epDetails.css"
import PuffLoader from "react-spinners/PuffLoader";
import Footer from '../footer/footer';






function EpDetails() {
const{id} =useParams();
const navigate=useNavigate();

const [epList,setEpList]=useState([[]]);
const [loading,setLoading]=useState(false);


   


    useEffect(() => {
      setLoading(true)
    
fetch();


    },[])
    const fetch=async()=>{
      const result=await axios.get(`https://gogoanime2.p.rapidapi.com/anime-details/${id}`)
     
      
   console.log(result.data)
        setEpList(result.data.episodesList)
  setLoading(false)

                 
  
    }
  return (
    <>

   
    
          {
            loading ? 
            (
              <div className="PuffLoaderParent">

    <PuffLoader
        color="#000"
        loading={loading}
        
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
            ) : (
              <div className="eplist">
              <div>
          {
            epList.map((episode)=>{
              const {episodeId,episodeNum,episodeUrl}=episode
                   return (
                    <>

                    <p className="pepDetails" onClick={() =>{
                              navigate(`/details/watch/${id}/${episodeNum}`)
                    }}>Episode {episodeNum} </p>
                    
                    </>
                   )
            })
          }
              </div>
         

              </div>
              
            )
         


          }
        
    </>
  )
}

export default EpDetails