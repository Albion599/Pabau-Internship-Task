import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import './Home.scss';
import Logo from '../../Assets/logo-albion.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Home = () => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];

  return (
    <div className="home-container">
      <Header currentStep="1/2" />
      <h2>Select an option:</h2>
      <ul className="options-list">
        {options.map((option, index) => (
          <li key={index} className="option-item">
            <Link to={`/option/${option}`} className="option-link">
              <img src={Logo} alt="Albion Logo" className="option-image" />
              <span className="option-name">{option}</span>
              <ChevronRightIcon className="icon" />
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Home;
