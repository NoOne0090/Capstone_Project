import React from 'react'
import { useLocation } from 'react-router-dom';
import '../css_part/continue.css'
import SlideShow from './SlideShow';
import time from '../img_part/time.png'
import reload from '../img_part/reload.png'
import greenCheck from '../img_part/greenCheck.png'
import Comment from './Comment';

function Continue() {
    const location = useLocation();
    console.log("Location state:", location.state);
    const {images = [], name, sellerName, price, description} = location.state || {};

    // console.log(img)
    // console.log(name)
    // console.log(price)
  return (
    <>
        <div className="continue-container">
            <div className="continue-left">
                <h1>{name}</h1>

                <SlideShow images={images}/>
                
                <br />

                <h1>About this Gig</h1>
                <p>{description}</p>
                <br />

                <div className="continue-price-box" style={{position: 'relative', top: '0'}}>
                    <div className="continue-price">
                        <h2>Price</h2>
                        <h2>₹{price}</h2>
                    </div>
                    <br />
                    <div className="continue-details">
                        <div className="continue-item" style={{flexDirection: 'row', gap: '13px', alignItems: 'center', width:'140px'}}>
                            <img src={time} alt="Error" style={{width: '21px'}} />
                            <span>3 days delivery</span>
                        </div>
                        <div className="continue-item" style={{flexDirection: 'row', gap: '13px', alignItems: 'center', width:'107px'}}>
                            <img src={reload} alt="Error" style={{width: '21px'}} />
                            <span>2 Reviews</span>
                        </div>
                    </div>
                    <br />
                    <div className="continue-item" style={{flexDirection: 'row', gap: '13px', alignItems: 'center', width:'125px'}}>
                        <img src={greenCheck} alt="Error" style={{width: '21px'}}/>
                        <span>{sellerName}</span>
                    </div>

                    <div className="continue-button">
                        <button>Continue</button>
                    </div>
                </div>

                <br />
                <p>Price: ₹{price}</p>
                <br />

                <div className="continue-about">
                    <h2>About The Seller</h2>
                    <div className="continue-box">
                        <div className="continue-items">
                            <div className="continue-item">
                                <span style={{fontWeight: '550', fontSize: '17px'}}>From</span>
                                <span>India</span>
                            </div>
                            <div className="continue-item">
                                <span style={{fontWeight: '550', fontSize: '17px'}}>Member Since</span>
                                <span>Jun 2024</span>
                            </div>
                            <div className="continue-item">
                                <span style={{fontWeight: '550', fontSize: '17px'}}>Average Response Time</span>
                                <span>6 hours</span>
                            </div>
                            <div className="continue-item">
                                <span style={{fontWeight: '550', fontSize: '17px'}}>Last Delivery</span>
                                <span>2 Months Ago</span>
                            </div>
                            <div className="continue-item">
                                <span style={{fontWeight: '550', fontSize: '17px'}}>Languages</span>
                                <span>English</span>
                            </div>
                        </div>

                        <br />

                        <div className="continue-button">
                            <button>Contact Me</button>
                        </div>
                    </div>                    
                </div>

                <br />


                <div className="continue-reviews">
                    <h1 style={{marginBottom: '11px'}}>Reviews</h1>
                    <Comment/>
                </div>

                <br />
                
            </div>

            <div className="continue-right">
                <div className="continue-price-box">
                    <div className="continue-price">
                        <h2>Price</h2>
                        <h2>₹{price}</h2>
                    </div>
                    <br />
                    <div className="continue-details">
                        <div className="continue-item" style={{flexDirection: 'row', gap: '13px', alignItems: 'center', width:'140px'}}>
                            <img src={time} alt="Error" style={{width: '21px'}} />
                            <span>3 days delivery</span>
                        </div>
                        <div className="continue-item" style={{flexDirection: 'row', gap: '13px', alignItems: 'center', width:'107px'}}>
                            <img src={reload} alt="Error" style={{width: '21px'}} />
                            <span>2 Reviews</span>
                        </div>
                    </div>
                    <br />
                    <div className="continue-item" style={{flexDirection: 'row', gap: '13px', alignItems: 'center', width:'125px'}}>
                        <img src={greenCheck} alt="Error" style={{width: '21px'}}/>
                        <span>{sellerName}</span>
                    </div>
                    {/* <br />  */}
                    <div className="continue-button">
                        <button>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Continue
