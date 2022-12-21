import "./home.css"
import React,{useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios"
import PuffLoader from "react-spinners/PuffLoader";
import Footer from "../footer/footer";






function Home()  {
  const navigate=useNavigate();

 
const [myData,setMyData]=useState([]);
const [loading,setLoading]=useState(false);
let arr=[];
const fetch=async()=>{
  for(let i=1;i<=3;i++){
    const result =await axios.get("https://gogoanime2.p.rapidapi.com/popular?page="+i)
   arr.push(...result.data);
    }
    setMyData(arr);
  setLoading(false);

   }

useEffect(() => {
  setLoading(true);

  fetch();

},[])




  return (
    <>
    {
      <div className="PuffLoaderParent">

<PuffLoader
    color="#000"
    loading={loading}
    
    size={100}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
</div>
    }{!loading &&
    <>
    <span className="headerTitle">Popular Animes</span>
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
  <Footer style={{position: 'relative'}}/>
    </>
      
    }
   
  
    </>
  )
}

export default Home
