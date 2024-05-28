import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar(props) {
  return (
    <div >
<nav className= {`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand info" to="#">{props.tittle}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
      </ul>
     {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-info" type="submit">Search</button>
      </form>
  */}
    <div>
      <button

className="btn  mx-2 rounded-circle"
style={{ width: '30px', height: '30px' ,backgroundColor: "#003300"}}
onClick={() =>props.myColor('#003300')}
>
{/* Add your button content here */}
</button>
<button
className="btn  mx-2 rounded-circle"
style={{ width: '30px', height: '30px' ,backgroundColor: "#4d88ff"}}
onClick={() =>props.myColor("#4d88ff")}
>
{/* Add your button content here */}
</button>
<button
className="btn btn-primary mx-2 rounded-circle"
style={{ width: '30px', height: '30px' ,backgroundColor: "#8f246b"}}
onClick={() =>props.myColor("#8f246b")}

>
{/* Add your button content here */}
</button>
    </div>
  </div>
  <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.txt}</label>
</div>

  
  </div>
</nav>
    </div>
  )
}
