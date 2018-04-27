import React, {Component} from 'react';
import FaCloud from 'react-icons/lib/fa/cloud';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';
import FaEyeSlash from 'react-icons/lib/fa/eye-slash';
import FaUniversalAccess from 'react-icons/lib/fa/universal-access';
import './perks.css';


class Perks extends Component {

  render() { 
    return (
        <div>
            <div className="perks-wrapper">
              <div className="perks">
                  <div className="perks-left">
                    <span className="perks-heading">The <span className="name">Company</span>Name Perks</span>
                    <span className="perks-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
                     <div className="tiles-wrapper">
                      <div className="tile">
                          <div className="tile-left">
                              <FaCloud className="cloud"/>
                          </div>
                          <div className="tile-right">
                            <div className="right-inner">
                              <span className="cloud-heading">CLOUD</span>
                              <span className="cloud-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor.
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className="tile" style={{paddingLeft:"20px"}}>
                          <div className="tile-left" style={{background: 'red'}}>
                              <FaInfoCircle className="cloud"/>
                          </div>
                          <div className="tile-right">
                            <div className="right-inner">
                              <span className="cloud-heading">SUPPORT</span>
                              <span className="cloud-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor.
                              </span>
                            </div>
                          </div>
                      </div>
                      </div>
                      <div className="tiles-wrapper2">
                      <div className="tile">
                          <div className="tile-left" style={{background: 'cornflowerblue'}}>
                              <FaEyeSlash className="cloud"/>
                          </div>
                          <div className="tile-right">
                            <div className="right-inner">
                              <span className="cloud-heading">NO HIDDEN EXTRAS</span>
                              <span className="cloud-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod.
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className="tile" style={{paddingLeft:"20px"}}>
                          <div className="tile-left" style={{background: 'springgreen'}}>
                              <FaUniversalAccess className="cloud"/>
                          </div>
                          <div className="tile-right">
                            <div className="right-inner">
                              <span className="cloud-heading">MULTIPLE DEVICE ACCESS</span>
                              <span className="cloud-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              </span>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                 <div className="perks-right">
                   <img className="perks-image" src={require('../../images/perks.png')} alt="smart"/>
                 </div>
              </div>
            </div>
       </div>
);
  }
}
 
export default Perks;