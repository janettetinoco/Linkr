
import React from 'react'; 
import {Link} from 'react-router-dom';

class AboutUs extends React.Component{


  render(){
    return (
      <div id="about-us">
        <div id="about-us-wrapper">
          <div id="about-us-header">Meet the developers</div>

          <ul id="about-us-list">
            <li>
              <div className="about-us-name">Alexey Sergeev</div>
              <div className="about-us-img-container"><img className="about-us-img" src="https://linkr-dev.s3-us-west-1.amazonaws.com/alexey_sergeev.jpg" alt="Alexey Sergeev"/></div>
              <div className="about-us-links">
                <a href="https://www.linkedin.com/in/alexey-sergeev-cm/" target="_blank"><img alt="about-us" className="a-u-link" src="https://img.icons8.com/color/48/000000/linkedin.png" /></a>
                <a href="https://github.com/alexeysergeev-cm" target="_blank"><img alt="about-us" className="a-u-link" src="https://img.icons8.com/fluent/48/000000/github.png" /></a>
                <a href="https://angel.co/u/alexey-sergeev-cm" target="_blank"><img alt="about-us" className="a-u-link" src="https://img.icons8.com/ios/50/000000/angelist.png" /></a>

              </div>
            </li>
            <li>
              <div className="about-us-name">Michael Noble</div>
              <div className="about-us-img-container"><img className="about-us-img" src="https://linkr-dev.s3-us-west-1.amazonaws.com/michael-noble.JPG" alt="Michael Noble"/></div>
              <div className="about-us-links">
                <a href="https://www.linkedin.com/in/michaelclaytonnoble/" target="_blank"><img alt="about-us" className="a-u-link" src="https://img.icons8.com/color/48/000000/linkedin.png" /></a>
                <a href="https://github.com/MichaelClaytonNoble" target="_blank"><img alt="about-us" className="a-u-link" src="https://img.icons8.com/fluent/48/000000/github.png" /></a>
                <a href="https://angel.co/u/michael-clayton-noble" target="_blank"><img alt="about-us" className="a-u-link" src="https://img.icons8.com/ios/50/000000/angelist.png" /></a>

              </div>
            </li>
            <li>
              <div className="about-us-name">Janette Tinoco</div>
              <div className="about-us-img-container"><img className="about-us-img" src="https://linkr-dev.s3-us-west-1.amazonaws.com/janette-tinoco.JPG" alt="Janette Tinoco"/></div>
              <div className="about-us-links">
                <a href="https://www.linkedin.com/in/janette-tinoco-b15665192/" target="_blank"><img alt="about-us" className="a-u-link" src="https://img.icons8.com/color/48/000000/linkedin.png" /></a>
                <a href="https://github.com/janettetinoco/" target="_blank"><img alt="about-us" className="a-u-link" src="https://img.icons8.com/fluent/48/000000/github.png" /></a>
                <a href="https://angel.co/u/janette-tinoco" target="_blank"><img alt="about-us" className="a-u-link" src="https://img.icons8.com/ios/50/000000/angelist.png" /></a>

              </div>
            </li>
            <li>
              <div className="about-us-name">Jonathan Diaz</div>
              <div className="about-us-img-container"><img className="about-us-img" src="https://linkr-dev.s3-us-west-1.amazonaws.com/jonathan-diazjpeg.jpg" alt="Jonathan Diaz"/></div>
              <div className="about-us-links">
                <a href="" target="_blank"><img alt="about-us" className="a-u-link" src="https://img.icons8.com/color/48/000000/linkedin.png" /></a>
                <a href="" target="_blank"><img alt="about-us" className="a-u-link" src="https://img.icons8.com/fluent/48/000000/github.png" /></a>
                <a href="" target="_blank"><img alt="about-us" className="a-u-link" src="https://img.icons8.com/ios/50/000000/angelist.png" /></a>

              </div>
            </li>
          </ul>
          <div id="about-us-personal-message">
            <p>We appreciate you! Our mission is to help professionals expand their business network.<br />
              Since networking has taken a turn for the digital, Linkr strives to be the intuitive go-to application for meeting new associates.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutUs; 