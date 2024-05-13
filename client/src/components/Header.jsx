import { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logoimage from "../components/images/logo.png";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMenuClick = (e) => {
    e.preventDefault(); 
    setShowMediaIcons(!showMediaIcons);
  };
  


  const handleDropdownMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <nav className="main-nav" onClick={handleMenuClick}>
        <div className="logo">
          <h2>
            <img src={Logoimage} alt="Logo" />
          </h2>
        </div>

        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li style={{fontSize:"20px"}}><Link to={'/'}>Home</Link></li> {/* Link to Home */}
            <li style={{fontSize:"20px"}}>About</li>
            <li style={{fontSize:"20px"}}
              className="dropdown"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              Services
              <div
                className={
                  showDropdown ? "dropdown-content show" : "dropdown-content"
                }
              >
                <li style={{fontSize:"20px"}}>Sports Nutrition</li>
                <li style={{fontSize:"20px"}}>Kids Nutrition</li>
                <li style={{fontSize:"20px"}}>Sports Nutrition</li>
                <li style={{fontSize:"20px"}}>International Client Nutrition</li>
                <li style={{fontSize:"20px"}}>Client Nutrition</li>
                <li style={{fontSize:"20px"}}>Sports Nutrition</li>
              </div>
            </li>
            <li style={{fontSize:"20px"}}><Link to={'/about'}>About</Link></li>
            <li style={{fontSize:"20px"}}><Link to={'/blog'}>Blog</Link></li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="/" target="/">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="/" target="/">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=X6UMOcq8sDY"
                target=""
              >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          <div className="hamburger-menu">
            <a href="#" onClick={handleMenuClick}>
              {showMediaIcons ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
