import React, {useState} from 'react'
import '../css_part/card.css'
import { useNavigate } from 'react-router-dom';
import Rating from './Rating';

function Card({images, name, price, description}) {
    const navigate = useNavigate();
    const navigateInformation = () =>{
      navigate('/continue', {
        state: {
          images: images,
          name: name,
          sellerName: 'Seller Name',
          price: price,
          description: description
        }
      })
    }

    const [rating, setRating] = useState(0);
  return (
    <>
        <div className="selling-card">
            <img className='selling-card-img' src={images[0]} alt="Error" onClick={navigateInformation} />
            <div className="selling-card-heading">
                <h2 onClick={navigateInformation}>{name}</h2>
                {/* <div className="selling-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div> */}

                <Rating rating={rating} setRating={setRating} />
            </div>

            {/* <br /> */}

            <div className="selling-card-price" onClick={navigateInformation}>
                <p>₹{price}</p>
            </div>

            <div className="selling-card-text" onClick={navigateInformation}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, id provident doloribus perspiciatis dicta perferendis voluptates eum inventore qui fugit similique?</p>
                {/* <p>{description}</p> */}
            </div>

            {/* <br /> */}

            <div className="selling-card-button">
                <button>Contact to Seller</button>
            </div>
        </div>
    </>
  )
}

export default Card
