import React, {Component} from 'react';
import './header.css';


class Header extends Component {

  render() { 
    return (
       <div  className="header">
           <ul className="header-list">
               <li className="list-items">HOME</li>
               <li className="list-items">FEATURES</li>
               <li className="list-items">DEMO</li>
               <li className="list-items">SUCCESS STORIES</li>
               <li className="list-items">BLOG</li>
               <li className="list-items">CONTACT</li>
               <li className="list-items login">LOGIN/SIGNUP</li>
            </ul>
       </div>
);
  }
}
 
export default Header;