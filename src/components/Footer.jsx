import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Footer.css'

class Footer extends React.Component {
    render(){
      return (
        <footer>
            <div className="container">
            <div className="col-md-3 colorlib-widget">
                <h4>Quick Links</h4>
                <ul className="footer-links">
                    <li><a href="#"><i className="icon-check"></i> About Us</a></li>
                    <li><a href="#"><i className="icon-check"></i> Testimonials</a></li>
                    <li><a href="#"><i className="icon-check"></i> Courses</a></li>
                    <li><a href="#"><i className="icon-check"></i> Event</a></li>
                    <li><a href="#"><i className="icon-check"></i> News</a></li>
                    <li><a href="#"><i className="icon-check"></i> Contact</a></li>
                </ul>
            </div>
            <div className="col-md-3 colorlib-widget">
                <h4>All menus</h4>
                <ul className="footer-links">
                    <li> <Link to="/about"> About Us</Link></li>
                    <li><Link to="/news"> News</Link></li>
                    <li><Link to="/contact"> Contact</Link></li>	
                </ul>
            </div>
            
            </div>
        </footer>
      )
    }
}
export default Footer