import React from 'react'
import './style.css';

function Certifications() {
  return (
    <div className="certification">
        <h2><i className="fa fa-certificate "></i>Licenses & cert.</h2>
        {/* Experience start */}
        <div className="Experience">
          <h5>Front end development</h5>
          <h6 ><i className="fa fa-calendar"></i>Issued  Dec 2021 - <span>No Expiring Date </span></h6>
          <p> W3Schools.com</p>
          <hr />
        </div> {/* Experience end */}
         {/* Experience start */}
         <div className="Experience">
          <h5>Front-End Web Developent</h5>
          <h6 ><i className="fa fa-calendar"></i>Issued  May 2021 - <span>No Expiring Date </span></h6>
          <p>World Wide Web Consortium</p>
          <hr />
        </div> {/* Experience end */}
         {/* Experience start */}
         <div className="Experience">
          <h5>Google UX Design Professional Certificate</h5>
          <h6 ><i className="fa fa-calendar"></i>Issued  May 2020 - <span>No Expiring Date </span></h6>
          <p> Google LLC</p>
          <hr />
        </div> {/* Experience end */}
    </div>
  )
}

export default Certifications