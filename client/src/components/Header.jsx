import { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaLinkedin,
  FaAngleDown
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logoimage from "../components/images/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMenuClick = (e) => {
    if (!e.target.closest('.social-media-desktop')) {
      e.preventDefault();
      setShowMediaIcons(!showMediaIcons);
    }
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

        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"  }>
          <ul className="only-to-hover">
            <li style={{fontSize:"20px"}}><Link to={'/'}>Home</Link></li>
            <li style={{fontSize:"20px"}}><Link to={'/shop/'}>Shop</Link></li>
            <li style={{fontSize:"20px"}}
              className="dropdown"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              Services <span><FaAngleDown/></span>
              <div
                className={
                  showDropdown ? "dropdown-content show" : "dropdown-content"
                }
              >
                <Link to={'/service/sports'} style={{fontSize:"20px"}}>Sports Nutrition</Link>
                <Link to={'/service/kids'} style={{fontSize:"20px"}}>Kids Nutrition</Link>
                <Link to={'/service/medical'} style={{fontSize:"20px"}}>Medical Nutrition</Link>
                <Link to={'/service/international'} style={{fontSize:"20px"}}>International Client</Link>
                <Link to={'/service/fitness'} style={{fontSize:"20px"}}>Fitness Nutrition</Link>
                <Link to={'/service/fitness'} style={{fontSize:"20px"}}>Nutrition for health</Link>
              </div>
            </li>
            <li style={{fontSize:"20px"}}><Link to={'/about'}>About</Link></li>
            <li style={{fontSize:"20px"}}><Link to={'/blog'}>Blog</Link></li>
            <li style={{fontSize:"20px"}}><Link to={'/podcast'}>Podcast</Link></li>
            {showMediaIcons && (
              <li>
                <div className="social-media-mobile">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/ryanfernando" target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare className="facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="/" target="/">
                        <FaInstagramSquare className="instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@celebritynutritionistryan" target="_blank" rel="noopener noreferrer">
                        <FaYoutubeSquare className="youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/ryanfernando/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            )}
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://www.facebook.com/ryanfernando"  target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="/" target="/">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@celebritynutritionistryan" target="_blank" rel="noopener noreferrer">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ryanfernando/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="linkedin" />
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
