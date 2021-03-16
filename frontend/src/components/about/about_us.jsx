
import React from 'react'; 
import {Link} from 'react-router-dom';

class AboutUs extends React.Component{

  render(){
    return (
      <div id="about-us">
        <ul id="about-us-list">
          <li>
            <div className="about-us-header">Alexey Sergeev</div>
            <div className="about-us-img-container"><img className="about-us-img" src="https://linkr-dev.s3-us-west-1.amazonaws.com/alexey_sergeev.jpg" alt="Alexey Sergeev"/></div>
            <div className="about-us-links">
              <Link to=""><img alt="about-us" className="a-u-linkedIn" src="https://img.icons8.com/color/48/000000/linkedin.png" /></Link>
            </div>
          </li>
          <li>
            <div className="about-us-header">Michael Clayton Noble</div>
            <div className="about-us-img-container"><img className="about-us-img" src="https://linkr-dev.s3-us-west-1.amazonaws.com/michael-noble.JPG" alt="Michael Noble"/></div>
            <div className="about-us-links">
              <Link to=""><img alt="about-us" className="a-u-linkedIn" src="https://img.icons8.com/color/48/000000/linkedin.png" /></Link>
            </div>
          </li>
          <li>
            <div className="about-us-header">Janette Tinoco</div>
            <div className="about-us-img-container"><img className="about-us-img" src="https://linkr-dev.s3-us-west-1.amazonaws.com/janette-tinoco.JPG" alt="Janette Tinoco"/></div>
            <div className="about-us-links">
              <Link to=""><img alt="about-us" className="a-u-linkedIn" src="https://img.icons8.com/color/48/000000/linkedin.png" /></Link>
            </div>
          </li>
          <li>
            <div className="about-us-header">Jonathan Diaz</div>
            <div className="about-us-img-container"><img className="about-us-img" src="https://linkr-dev.s3-us-west-1.amazonaws.com/jonathan-diazjpeg.jpg" alt="Jonathan Diaz"/></div>
            <div className="about-us-links">
              <Link to=""><img alt="about-us" className="a-u-linkedIn" src="https://img.icons8.com/color/48/000000/linkedin.png" /></Link>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default AboutUs; 