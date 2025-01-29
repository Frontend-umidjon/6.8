import React from 'react';
import './NotFound.scss';

const PageNotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__message">Oops! Page not found.</p>
        <p className="not-found__message">But no worries, let's go back to the main page and continue saving the planet!</p>
        <a href="/" className="not-found__button">Go to Home</a>
      </div>
     
    </div>
  );
};

export default PageNotFound;
