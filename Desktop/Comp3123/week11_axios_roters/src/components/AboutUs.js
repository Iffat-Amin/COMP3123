// src/components/AboutUs.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const AboutUs = () => {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  
  return (
    <div>
      <h1>About Us Component</h1>
      <p>College: {search.get("college")}</p>
    </div>
  );
};

export default AboutUs;
