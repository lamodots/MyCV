import React from 'react'
import './style.css';
import avatar from '../../images/avatar.JPG';

function LeftColumn() {
  return (
    // left column start
    <div className="left-column">

           {/* img container start */}
           <div className="left-colunm-img">
            <img src={avatar} alt="Avatar" className="avater" />
            <div className="my-name">
                <h2>Lamodot Lamo</h2>
            </div>

        </div>  {/* img container End */}
        {/* left column content start */}
      <div className="left-column-content">
       
        {/* basic info start */}
        <div className="basic-info">
            <p><i className="fa fa-briefcase"></i>Front-end Developer</p>
            <p><i className="fa fa-home"></i>Lagos Nigeria</p>
            <p><i className="fa fa-envelope"></i>lamodots@gmail.com</p>
            <p><i className="fa fa-phone"></i>+2347060400698</p>
            <hr/>
        </div>{/* basic info start */}
        {/* Skill start */}
        <div className="skills">
            <p className="title"><i className="fa fa-asterisk"></i>Skills</p>
            {/* start of each skill */}
            <p className="skillname">Figma</p>
            <div className="fima-skil">
                <div className="proficiency">70%</div>
            </div>
            <p className="skillname">HTML</p>
            <div className="html-skil">
                <div className="proficiency">100%</div>
            </div>
            <p className="skillname">CSS</p>
            <div className="css-skil">
                <div className="proficiency">100%</div>
            </div>
            <p className="skillname">Bootstrap</p>
            <div className="bootstrap-skil">
                <div className="proficiency">100%</div>
            </div>
            <p className="skillname">Tailwind</p>
            <div className="tailwind-skil">
                <div className="proficiency">100%</div>
            </div>
            <p className="skillname">SASS</p>
            <div className="sass-skil">
                <div className="proficiency">100%</div>
            </div>
            <p className="skillname">JavaScript</p>
            <div className="javascript-skil">
                <div className="proficiency">100%</div>
            </div>
            <p className="skillname">Jquery</p>
            <div className="jquery-skil">
                <div className="proficiency">100%</div>
            </div>
            <p className="skillname">Reactjs</p>
            <div className="react-skil">
                <div className="proficiency">60%</div>
            </div>    {/* end of each skill */}

        </div> {/* Skill end */}
        {/* stat of languages */}
        <div className="languages">
            <p className="title"><i className="fa fa-globe "></i>Languages</p>
            <p className="english">English</p>
            <div className="eng">
                <div className="eng-proficiency">100%</div>
            </div>
            <p className="french">French</p>
            <div className="french-div">
                <div className="french-proficiency">80%</div>
            </div>
           
        </div>{/* end of languages */}
      </div> 
      {/* left conlunm content end */}

    </div>// left column End
  )
}

export default LeftColumn