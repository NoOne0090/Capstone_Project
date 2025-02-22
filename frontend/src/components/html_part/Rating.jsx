import React from 'react'

function Rating({ rating, setRating }) {
  return (
    <>
        <div style={{width: '35%'}}>
            {[1, 2, 3, 4, 5].map((star) => {
                return (  
                <span
                    className='start'
                    style={{
                        cursor: 'pointer',
                        color: rating >= star ? 'gold' : 'gray',
                        fontSize: `24px`,
                    }}
                    onClick={() => {setRating(star)}}
                >
                ★
                </span>
                )
            })}
        </div>
    </>
  )
}

export default Rating
