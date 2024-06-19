import MainLayout from "../../components/MainLayout";
import './ryanproduct.css';

import image1 from '../../files/image1bg.jpg';
import image3 from '../../files/image2bg.jpg';
import { useNavigate } from "react-router-dom";

function RyanProducts() {
    const navigate = useNavigate();

    const navigateTo = (path) => {
      console.log(`Navigation to: '${path}`);
      navigate(path);
    };

    return (
        <MainLayout>
            <section className="ryan-prdct-layout">
                <h1>Ryan Recommends</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, autem.</span>
            </section>
            <section className="ryan-prdct-container-layout">
                <div className="ryan-prdct-container" onClick={() => navigateTo('/ryanproductdesc')}>
                    <img src={image1} alt="" />
                    <div className="ryan-overlay">
                        <p>Product 1 Description</p>
                    </div>
                </div>
                <div className="ryan-prdct-container" onClick={() => navigateTo('/ryanproductdesc/ryanchampionbook')}>
                    <img src={image3} alt="" />
                    <div className="ryan-overlay">
                        <p>Product 2 Description</p>
                    </div>
                </div>
                <div className="ryan-prdct-container" onClick={() => navigateTo('/ryanproductdesccollagen')}>
                    <img src={image3} alt="" />
                    <div className="ryan-overlay">
                        <p>Product 3 Description</p>
                    </div>
                </div>
                <div className="ryan-prdct-container" onClick={() => navigateTo('/ryanproductdesc/ryandiary')}>
                    <img src={image1} alt="" />
                    <div className="ryan-overlay">
                        <p>Product 4 Description</p>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

export default RyanProducts;
