import React from 'react';
import { useParams } from 'react-router-dom';

export default function Contact() {
  const param = useParams();
  
  return (
    <div>
      <h3>Contact</h3>
      <h4>{param.name}</h4>
    </div>
  );
}

