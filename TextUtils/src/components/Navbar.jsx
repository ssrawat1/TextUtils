import React from 'react'
// import PropTypes from 'prop-types'


const Navbar = ({heading,mode,toggleMode}) => {
  return (
       <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand " href="/">{heading}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
      </ul>
      <div className={`form-check form-switch text-${mode==='light'?'dark':'light'} `}>
        <input className="form-check-input" onClick = {toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
       <label className="form-check-label text-mode==='light'?'black':'white" htmlFor="flexSwitchCheckDefault">{mode==='light'?'Enable Dark Mode':'Enable Light Mode'}</label>
     </div>
    </div>
  </div>
</nav>
   )
}

export default Navbar


// Navbar.prototypes = { // we use to propTypes if it not match then it will throw an error
//     title: PropTypes.string.isRequired,
//     home: PropTypes.string
    
// }

// Navbar.defaultProps = {  // if prop do not pass then default props will be set in place of that
//     title:'TextEnhancement',
//     home:'Home Page'

// }