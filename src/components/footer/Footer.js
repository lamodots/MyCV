import React from 'react'
import './style.css';
export default function Footer() {
  return (
    <div className="footer-container">
      <footer className="content">
        <p className='social-info'>Find me on social media.</p>
      <i className=" fa fa-twitter-square"></i>
        <div className="socilas">
        <i class="fa fa-github" aria-hidden="true"></i>
          <i className="fa fa-twitter-square"></i>
          <i className="fa fa-linkedin-square"></i>
        </div>
        <p className='poweredby'>Powered by <a href="https://www.lamodot.com" target="_blank">Lamodot</a></p>
      </footer>

    </div>
  )
}
