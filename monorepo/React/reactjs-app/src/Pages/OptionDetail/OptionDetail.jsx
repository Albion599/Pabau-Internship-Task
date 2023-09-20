import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useParams, useNavigate } from 'react-router-dom';
import './OptionDetail.scss'; // Import the OptionDetail SCSS

const OptionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="option-detail-container">
      <Header currentStep="2/2" className="header" />
      <div className="content">
        <h2>Option Detail</h2>
        <p>Selected Option: {id}</p>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default OptionDetail;
