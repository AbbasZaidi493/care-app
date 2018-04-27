import React, {Component} from 'react';
import FaEnvelopO from 'react-icons/lib/fa/envelope-o';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaPinterestSquare from 'react-icons/lib/fa/pinterest-square';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';
import FaWifi from 'react-icons/lib/fa/wifi';
import './footer.css';


class Footer extends Component {

  render() { 
    return (
        <div className="footer-section">
            <div className="footer-wrapper">
                <div className="company">
                    <span className="company-name">Comapany<span style={{color: 'blueviolet'}}>Name</span></span>
                    <span className="company-description">ComapanyName keeps track of your employees attendance,
                         their performance and leave status!</span>
                    <span className="company-description">ComapanyName is a modern cloud based HR solution
                        for increasing your workplace productivity. </span>
                </div>
                <div className="info">
                    <span className="links">Blog</span>
                    <span className="links spacing">Contact</span>
                    <span className="links spacing">Success Stories</span>
                </div>
                <div className="nav-bar"></div>
                <div className="info">
                    <span className="links">FAQ's</span>
                    <span className="links spacing">Privacy Policy</span>
                    <span className="links spacing">Terms and Conditions</span>
                </div>
                <div className="email">
                    <div><span className="links"><FaEnvelopO /> contact@companyName.com</span></div>
                    <div className="border-line"></div>
                    <div className="social-media">
                        <FaFacebookSquare className="media"/> 
                        <FaPinterestSquare className="media"/>
                        <FaTwitter className="media"/>
                        <FaGooglePlus className="media"/>
                        <FaWifi className="media"/>
                    </div>

                </div>

            </div>
        </div>
);
  }
}
 
export default Footer;