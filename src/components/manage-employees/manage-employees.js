import React, {Component} from 'react';
import './manage-employees.css';


class ManageEmployees extends Component {

  render() { 
    return (
        <div className="manage-section">
            <div className="heading-section">
                <div className="heading-wrap">
                    <span className="heading">MANAGE WORK SCHEDULE AND EMPLOYEE ATTENDANCE VIA 
                        <span style={{fontWeight: '700'}}> 3 EASY STEPS!</span>
                    </span>
                </div>
                </div>
                <div className="steps-container">
                <div className="steps">
                    <div className="left-section">
                        <img className="steps-image" src={require('../../images/engineering.png')} alt="smart"/>
                    </div>
                    <div className="right-section"  style={{marginLeft: '20px'}}>
                        <span className="step-span">STEP 1</span>
                        <span className="step-heading">SETUP YOUR COMPANY IN MINUTES</span>
                        <span className="step-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
                         <div className="step-buttons">
                             <button className="button-step">LEARN MORE</button>
                             <button className="button-step" style={{marginLeft: '20px'}}>SIGNUP NOW</button>
                         </div>
                    </div>
                </div>
                <div className="steps" style={{marginTop:'70px'}} >
                    <div className="right-section">
                        <span className="step-span">STEP 2</span>
                        <span className="step-heading">CLOCK IN FROM ANYWHERE</span>
                        <span className="step-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span>
                        <button className="button-step" style={{marginTop:'20px'}}>LEARN MORE</button>
                    </div>
                    <div className="left-section" style={{marginLeft: '20px' , paddingTop: '20px'}}>
                        <img className="steps-image" src={require('../../images/web.png')} alt="smart"/>
                    </div>
                </div>
                <div className="steps" style={{marginTop:'70px'}}>
                    <div className="left-section">
                        <img className="steps-image" src={require('../../images/cloud.png')} alt="smart"/>
                    </div>
                    <div className="right-section" style={{marginLeft: '20px'}}>
                        <span className="step-span">STEP 3</span>
                        <span className="step-heading">MANAGE HR ON THE GO</span>
                        <span className="step-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span>
                        <button className="button-step" style={{marginTop:'20px'}}>LEARN MORE</button>
                    </div>
                </div>
            </div>
       </div>
);
  }
}
 
export default ManageEmployees;