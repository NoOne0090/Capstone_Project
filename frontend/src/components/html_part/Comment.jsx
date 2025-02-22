import React, {useState} from 'react'
import '../css_part/comment.css'
import Rating from './Rating';

function Comment() {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState([]);
  
    const onClickHandler = () => {
        if (comment.trim() === "") return; // Prevent empty comments


        // setComments((comments) => [...comments, comment]);
        setComments((comments) => [...comments, {comment, rating}]);

        // Clear input fields
        setComment("");
        setRating(0);
    };
    const onChangeHandler = (e) => {
      setComment(e.target.value);
    };
    return (
      <div className="comment-main-container">
        {comments.map((text) => (
          <div className="comment-container">
            <p className='comment-para'>Rating:{' '}
                {text.rating}{' '}{' '}
                <div style={{width: '35%'}}>
                    <span style={{ color: "gold", fontSize: `20px` }}>{"★".repeat(text.rating)}</span>
                    <span style={{ color: "gray", fontSize: `20px` }}>{"☆".repeat(5 - text.rating)}</span>
                </div>
            </p>
            <br />
            <p>{text.comment}</p>
          </div>
        ))}
        <br />
        <div className="comment-flexbox">
          <h2 className="comment-heading">Comments</h2>
          <textarea
            value={comment}
            onChange={onChangeHandler}
            className="comment-input-box"
          />
          <Rating rating={rating} setRating={setRating}/>
          <button onClick={onClickHandler} className="comment-button">
            Submit 
          </button>
        </div>
      </div>
    );
}

export default Comment
