import React,{useEffect} from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  const hello = async()=> {
    let url = 'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=4fc0853a916e412190cbf44f5b6f8360';
    let data = await fetch(url);
    let parseData = await data.json(); 
    console.log(parseData);
  }
  useEffect(()=>{
    hello();
  },[])
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsMonkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/NewsMonkeyApp">Home</Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link> </li>
            </ul>
            </div>
        </div>
        </nav>      
      </>
    )
}
export default Navbar
