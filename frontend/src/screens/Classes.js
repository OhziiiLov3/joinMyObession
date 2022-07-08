import React from 'react'

function Classes() {
  return (
    <div className="myClasses">
      <div className="d-flex justify-content-center my-5">
        <h1>My Services</h1>
      </div>
        <h2 className="mx-auto py-3">Interactive Online Fitness Programs</h2>
      <div className="container myClasses-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker">
            <div className="timeline-content">
              <h3>Hiit</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                esse fugit minima corporis beatae aliquid?
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <div className="marker">
            <div className="timeline-content">
              <h3>Plyometric Training</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                esse fugit minima corporis beatae aliquid?
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-right">
          <div className="marker">
            <div className="timeline-content">
              <h3>Fat Burning and Muscle Scuplting</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                esse fugit minima corporis beatae aliquid?
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <div className="marker">
            <div className="timeline-content">
              <h3>KickBoxing</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                esse fugit minima corporis beatae aliquid?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes