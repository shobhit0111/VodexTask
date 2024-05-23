import logo from './Images/logo.png';
import Background from './Images/Background1.jpeg';

import './App.css';

const Header = () =>{
  return(
    <>
      <div className="Header">
        <div className="logo-container">
          <img src={logo} alt="logo"  />
        </div>
        <div className="nav-item">
            <ul>
                <li>About</li>
                <li>How It Works</li>
                <li>Pricing</li>
            </ul>
        </div>
        <button className="login-button" type="submit">Login/SignUp</button>
      </div>
      <div className="Body">
        <div className="background">
          <img className="background1" src={Background} alt="background"></img>
        </div>
        <div className="center">
          <div className="circle">
            <div className="innerCircle">
            </div>
          </div>
          
        </div>

      </div>
    </>
    
  )
}
export default Header
