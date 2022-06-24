import React from 'react'

function Rating({value, text, color}) {
    return (
      <div className="rating">
        <span>
          <i style={{ color }} className="fa-solid fa-dumbbell" size="3x"></i>
        </span>
        <span>
          <i style={{ color }} className="fa-solid fa-dumbbell" size="3x"></i>
        </span>
        <span>
          <i style={{ color }} className="fa-solid fa-dumbbell" size="3x"></i>
        </span>
        <span>
          <i style={{ color }} className="fa-solid fa-dumbbell" size="3x"></i>
        </span>
        <span>
        </span>
        <span>{text && text}</span>
      </div>
    );
}

export default Rating
