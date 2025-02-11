import React from 'react';
import check from '../img_part/check.png'
import '../css_part/description.css';

function Description() {
    const features = [
        {
          title: "The best for every budget",
          description: "Find high-quality services at every price point. No hourly rates, just project-based pricing."
        },
        {
          title: "Quality work done quickly",
          description: "Find the right freelancer to begin working on your project within minutes."
        },
        {
          title: "Protected payments, every time",
          description: "Always know what you'll pay upfront. Your payment isn't released until you approve the work."
        },
        {
          title: "24/7 support",
          description: "Questions? Our round-the-clock support team is available to help anytime, anywhere."
        }
      ];
  return (
    <>
    <div className="descrip-container">
      <div className="descrip-text-section">
        <h1>A whole world of freelance talent at your fingertips</h1>
        <br />
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="feature-item">
              <div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img className='descrip-check' src={check} alt="Error" />
                    <p className="feature-title">{feature.title}</p>
                </div>
                <p className="feature-description">{feature.description}</p>
              </div>
              {/* <br /> */}
            </li>
          ))}
        </ul>
      </div>
      <div className="descrip-video-section">
        <video controls className='descrip-video'>
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    </>
  )
}

export default Description
