import React from 'react'
import '../css/CustomNavbar.css'
import logo from '../img/logo.jpg';
class customNavBar extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <img src={logo} width="145" height="95" />
          {/* <a className="navbar-brand" href="#">KHS ALumni</a> */}
        </div>
    
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Library</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">News</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Profile <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Login</a></li>
                <li><a href="#">New Member</a></li>
               
              </ul>
            </li>
          </ul>
         
         
        </div>
      </div>
    </nav>
    ) 
  }
}
export default customNavBar;