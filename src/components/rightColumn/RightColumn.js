import React from 'react'
import Summary from './Summary';
import Certifications from './Certifications';
import Education from './Education';
import Experince from './Experince';
import './style.css';

function RightColumn() {
  return (
    <div className="right-colunm">
      {/* right-colunm-content start */}
      <div className="right-colunm-content">
        <Summary />
       <Experince />
       <Education />
       <Certifications />
        
      </div>{/* right-colunm-content start */}
    </div>
  )
}

export default RightColumn