
import './eatwell.css';
import heroImage from '../../components/images/back.jpg';
import sideImage from '../../components/images/image3.jpg';
import MainLayout from "../../components/MainLayout";
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {

    const cards = [
        { id: 1, title: 'Card 1', description: 'Description for card 1' },
        { id: 2, title: 'Card 2', description: 'Description for card 2' },
        { id: 3, title: 'Card 3', description: 'Description for card 3' },
        { id: 4, title: 'Card 4', description: 'Description for card 4' },
        { id: 5, title: 'Card 5', description: 'Description for card 5' },
        { id: 6, title: 'Card 6', description: 'Description for card 6' },
      ];

    return (

        <MainLayout>
        
      <div className="hero-container">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to Our Website</h1>
            <h2>Your Gateway to Innovation</h2>
            <p>Your journey to excellence starts here. Discover more, achieve more, and be inspired.</p>
            <button className="hero-button">Get Started</button>
          </div>
          <div className="hero-side-image">
            <img src={sideImage} alt="Side" />
          </div>
        </div>
      </div>

      <div className="cards-container">
      {cards.map((card, index) => (
        <div className="card" key={card.id}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          {index < cards.length - 1 && <FaArrowRight className="arrow" />}
        </div>
      ))}
    </div>
      </MainLayout>
    );
  }
  
  export default HeroSection;