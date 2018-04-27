import React, {Component} from 'react';
import FaAndroid from 'react-icons/lib/fa/android';
import FaWindows from 'react-icons/lib/fa/windows';
import FaApple from 'react-icons/lib/fa/apple';
import './contact-us.css';


class ContactUs extends Component {

  render() { 
    return (
        <div >
            <div className="contact-section">
                <span className="smart-phone">Now On Smart Phones</span>
                <span className="download">DOWNLOAD OUR FREE APPS</span>
                <span className="available">Available on <span className="apps">APP</span> Store now, <span className="apps">PLAY</span> and <span className="apps">WINDOWS</span> are Coming Soon</span>
                <div className="app-buttons">
                    <button className="play"><FaAndroid className="icon"/> PLAY STORE</button>
                    <button className="window"><FaWindows className="icon"/><span> WINDOW STORE</span></button>
                    <button className="apple"><FaApple className="icon"/> APP STORE</button>
                </div>
                <div className="mobile">
                <img className="mobile-pic" src={require('../../images/mobile.png')} alt="smart"/>

                </div>
            </div>
        </div>
);
  }
}
 
export default ContactUs;