import React, {Component} from 'react';
import './success-stories.css';
import FaStarO from 'react-icons/lib/fa/star-o';
import FaQuoteRight from 'react-icons/lib/fa/quote-right';

class SuccessStories extends Component {

  render() { 
    return (
        <div className="success-section">
            <div className="success-wrapper">
               <div className="success-top">
                 <span className="perks-heading" style={{fontWeight: '900'}}>Success Stories</span>
                 <span className="success-subheading" >Why Clients Love Us</span>
                 <span className="perks-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
              </div>
              <div className="success-bottom">
                  <div className="story">
                      <div className="story-inner">
                      <span className="story-heading">AWESOME! LOVING IT</span>
                      <span className="story-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                      <div className="story-image">
                      <img className="dummy-image" src={require('../../images/dummy.png')} alt="smart"/>
                      <div className="bio">
                        <span className="person-name">Hania Sheikh</span>
                        <span style={{fontSize: '12px', paddingTop: '5px'}}>CEO Pvt Inc.</span>
                          <div className="stars">
                            <FaStarO style={{fill: 'yellow'}}/>
                            <FaStarO style={{fill: 'yellow'}}/>
                            <FaStarO style={{fill: 'yellow'}}/>
                            <FaStarO style={{fill: 'yellow'}}/>
                            <FaStarO style={{fill: 'yellow'}}/>
                          </div>
                       </div>
                       <FaQuoteRight className="quotes"/>
                      </div>
                      </div>
                  </div>
                  <div className="story story-spacing" >
                      <div className="story-inner">
                      <span className="story-heading">VERY QUICK AND FAST</span>
                      <span className="story-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                      <div className="story-image">
                      <img className="dummy-image" src={require('../../images/dummy.png')} alt="smart"/>
                      <div className="bio">
                      <span className="person-name">Jacoica Albana</span>
                      <span style={{fontSize: '12px', paddingTop: '5px'}}>CTO Albana Inc.</span>
                      <div className="stars">
                          <FaStarO style={{fill: 'yellow'}}/>
                          <FaStarO style={{fill: 'yellow'}}/>
                          <FaStarO style={{fill: 'yellow'}}/>
                          <FaStarO style={{fill: 'yellow'}}/>
                          <FaStarO style={{fill: 'yellow'}}/>
                      </div>
                      </div>
                      <FaQuoteRight className="quotes"/>
                      </div>
                      </div>
                  </div>
              </div>
            </div>
       </div>
);
  }
}
 
export default SuccessStories;