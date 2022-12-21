import React,{useRef} from 'react'
import "./navbar.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


function Navbar() {
  const navigate=useNavigate();
  const name=useRef(null)
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name.current.value)
    navigate(`/search/${name.current.value}`)

  }
  return (
    <div className="navbar">

        <div className="left-nav">
      <Link  clas to="/" className="nav-item">Home</Link>
      <Link to="/about" className="nav-item">About</Link>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" ref={name}/>
      </form>
        </div>
        <div className="right-nav"><button className="btn btn-success" onClick={()=>{
          window.open("https://github.com/jontyxo/animeSite",'_blank')
        }} >Github</button></div>

    </div>
  )
}

export default Navbar