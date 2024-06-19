// import React from 'react';
import "./shopinitial.css"; // Make sure to import the CSS file
import MainLayout from "../../components/MainLayout";
import image1Url from '../../files/image1bg.jpg';
import image2Url from '../../files/image2bg.jpg';
import { useNavigate } from "react-router-dom";

const UniqueComponent = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    console.log(`Navigation to: '${path}`)
    navigate(path);
  };
  return (
    <MainLayout>
      <div style={{height:'700px'}}>
      <div className="sp-image-container">
        <div className="sp-info-box1" style={{top:'10%'}}>Ryan Recommends</div>
        <img src={image1Url} alt="Image 1" className="sp-image1" onClick={() => navigateTo('/shop/')}/>
        <div className="sp-info-box2" style={{ right:'0',top:'15%' }}>Ryan Products</div>
        <img src={image2Url} alt="Image 2" className="sp-image2" onClick={() => navigateTo('/ryanproduct')}/>
      </div>
      </div>
    </MainLayout>
  );
};

export default UniqueComponent;
