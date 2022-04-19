import React from 'react'
import './style.css';

function Education() {
  return (
    <div className="education-container">

<h2><i className="fa fa-certificate "></i>Education</h2>
        {/* Experience start */}
        <div className="Experience">
          <h5>FUTMinna</h5>
          <h6 ><i className="fa fa-calendar"></i>Nov. 2009 - <span> Feb. 2017 </span></h6>
          <p> Bachellor in Tech.</p>
          <hr />
        </div> {/* Experience end */}
         {/* Experience start */}
         <div className="Experience">
          <h5>El-Amin International Minna</h5>
          <h6 ><i className="fa fa-calendar"></i>Feb. 2003 - <span>Mar. 2009 </span></h6>
          <p> West African Cert.</p>
          <hr />
        </div> {/* Experience end */}
         {/* Experience start */}
         <div className="Experience">
          <h5>El-Amin International Minna</h5>
          <h6 ><i className="fa fa-calendar"></i>Octo. 1997 - <span> Octo. 2002 </span></h6>
          <p> Primary School Cert. </p>
          <hr />
        </div> {/* Experience end */}
    </div>
  )
}

export default Education