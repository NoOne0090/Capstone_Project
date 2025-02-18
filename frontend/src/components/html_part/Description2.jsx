import React from 'react';
import check from '../img_part/check.png'
import '../css_part/description2.css';

function Description2() {
  return (
    <>
    <div className="descrip2-container">
      <div className="descrip2-text-section">
        <h1>Connect, Collaborate & Create future</h1>
        <p className='descrip2-para' >Upgrade to a curated experience packed with tools and benefits, dedicated to community</p>
        <br />
        <ul>
            <li>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img className='descrip2-check' src={check} alt="Error" />
                    <p className="descrip2-points">Connect to freelancers with shared passion and ignite innovation</p>
                </div>
            </li>
            <li>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img className='descrip2-check' src={check} alt="Error" />
                    <p className="descrip2-points">Get matched with the perfect talent by a customer success manager</p>
                </div>
            </li>
            <li>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img className='descrip2-check' src={check} alt="Error" />
                    <p className="descrip2-points">Manage teamwork and boost productivity with one powerful workspace</p>
                </div>
            </li>
        </ul>

        <button className="descrip2-button">
            Explore Our Community
        </button>
      </div>

      <div className="descrip2-image-section">
        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="Error" />
      </div>
    </div>
    </>
  )
}

export default Description2;
