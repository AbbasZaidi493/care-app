import React, {Component} from 'react';
import './employees.css';


class Employees extends Component {

  render() { 
    return (
            <div  className="employee-section">
              <div className="employee">
              <div className="employee-content">
                <h1 className="employee-heading">KEEPS TRACK OF YOUR EMPLOYEES' ATTENDANCE</h1>
                <h2 className="employee-subheading">THEIR PERFORMANCE AND LEAVE STATUS</h2>
                <span className="employee-span">CompanyName is a modern cloud based HR solution
                  for increasing your workplace productivity.
                </span>
                <div>
                <button className="employee-button">READ MORE</button>
                <button className="demo-button">VIEW DEMO NOW</button>
                </div>
              </div>
              <div className="image-section">
              <img className="smart-devices" src={require('../../images/engineering.png')} alt="smart"/>
              </div>
              </div>
            </div>
);
  }
}
 
export default Employees;