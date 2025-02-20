import React from 'react'
import '../css_part/card.css'

function Card() {
    // const navigate = useNavigate();
    // const navigateInformation = () =>{
    //   navigate('/addToCart', {
    //     state: {
    //       img: img,
    //       name: name,
    //       price: price,
    //       description: description
    //     }
    //   })
    // }
  return (
    <>
        <div className="selling-card">
            {/* <img className='selling-card-img' src={img} alt="Error" onClick={navigateInformation} /> */}
            <img className='selling-card-img' src="" alt="Error" />
            <div className="selling-card-heading">
                {/* <h2 onClick={navigateInformation}>{name}</h2> */}
                <h2>Name</h2>
                <div className="selling-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div>
            </div>

            {/* <br /> */}

            {/* <div className="card-price" onClick={navigateInformation}> */}
            <div className="selling-card-price" >
                {/* <p>₹{price}</p> */}
                <p>₹Price</p>
            </div>

            {/* <div className="card-text" onClick={navigateInformation}> */}
            <div className="selling-card-text">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, id provident doloribus perspiciatis dicta perferendis voluptates eum inventore qui fugit similique?</p>
                {/* <p>{description}</p> */}
            </div>

            {/* <br /> */}

            <div className="selling-card-button">
                <button>Add To Cart</button>
            </div>
        </div>
    </>
  )
}

export default Card
