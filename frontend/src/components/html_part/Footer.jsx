import React from 'react'
import { Link } from 'react-router-dom';
import '../css_part/footer.css'

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Info</h4>
            <ul className="links">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/service">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/postjob">Post Job</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="links">
              <li><Link to="/home/webDeveloper">Web Developer</Link></li>
              <li><Link to="/home/logoDesign">Logo Designs</Link></li>
              <li><Link to="/home/graphicDesign">Graphic Design</Link></li>
              <li><Link to="/home/webDeveloper">Web Design</Link></li>
              <li><Link to="/home/appDeveloper">App Developer</Link></li>
              <li><Link to="/home/dataScientist">Data Scientists</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul className="links">
              <li><Link to="/home">Customer Agreement</Link></li>
              <li><Link to="/home">Privacy Policy</Link></li>
              <li><Link to="/home">GDPR</Link></li>
              <li><Link to="/home">Security</Link></li>
              <li><Link to="/home">Testimonials</Link></li>
              <li><Link to="/home">Media Kit</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="p-0">Newsletter</h4>
            <p>
              Subscribe to our newsletter for a weekly dose
              of news, updates, helpful tips, and
              exclusive offers.
            </p>
            <form action="/home">
              <input type="text" placeholder="Your email" required/>
              <button type="submit">SUBSCRIBE</button>
            </form>
            {/* <div className="icons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
