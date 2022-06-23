import React from 'react'

import { PropTypes } from 'prop-types'

export default function Navbar(props) {
    return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">{props.about}</a>
            </li>
       
           
          </ul>
         <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.colorPallet('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          <div className="bg-success rounded mx-2" onClick={()=>{props.colorPallet('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.colorPallet('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.colorPallet('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
         </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" for="flexSwitchCheckDefault">{props.mode=='light'?'Enable dark mode':'Enable light mode'}</label>
  </div>
        </div>
       </div>
       </nav>
    )
  }


  // used to check the prop type passed from app.js

Navbar.propTypes = {title:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired}

// used to set default props when no props are passed from app.js

Navbar.defaultProps = {title:'Please set title here',
       about:'About us'}