"use client"
import React, { useEffect, useState } from 'react';
import '../styles/homepage.scss'; // Import your custom styles if needed
import { Card } from 'react-bootstrap';

const HomePage = () => {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    // Set showCards to true after a short delay to trigger the animation
    const timeout = setTimeout(() => {
      setShowCards(true);
    }, 500);

    // Clean up function to clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  const renderCards = () => {
    if (!showCards) {
      return null;
    }

    // Data for the cards
    const cardData = [
      { title: 'Career' },
      { title: 'Hobbies' },
      { title: 'Events' },
    ];

    return cardData.map((card, index) => (
      <div key={index} className="col-md-4 mb-3">
        <Card className="slide-up card">
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    ));
  };

  return (
    <div className="container">
      <h1 className="mt-5 text-center">Welcome to Our Website</h1>
      <div className="row mt-5">
        {renderCards()}
      </div>
    </div>
  );
};

export default HomePage;
