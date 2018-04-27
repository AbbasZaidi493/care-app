import React, {Component} from 'react';
import Header from '../header/header';
import Employees from '../employees/employees';
import ManageEmployees from '../manage-employees/manage-employees';
import Employer from '../employer/employer';
import Perks from '../perks/perks';
import ContactUS from '../contact-us/contact-us';
import Footer from '../footer/footer';
import SuccessStories from '../success-stories/success-stories';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import './home.css';


class Home extends Component {

  state = {
    componentShow: 0
  }

  nextComponent = () => {
    if(this.state.componentShow === 0) {
      this.setState({ componentShow: 1});
    }
    else {
      this.setState({ componentShow: 0});
    }
  }

  render() { 
    return (
        <div>
            <Header />
            <div  className="home-section">
              <FaAngleLeft className="left-arrow" onClick={this.nextComponent}/>
              <FaAngleRight className="right-arrow" onClick={this.nextComponent}/>
              { this.state.componentShow === 0 ?
              <Employees /> : <Employer />
              }
            </div>
            <ManageEmployees />
            <Perks />
            <SuccessStories />
            <ContactUS />
            <Footer />
       </div>
);
  }
}
 
export default Home;