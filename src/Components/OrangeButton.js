// OrangeButton.js

import React from 'react';
import './OrangeButton.css'; // Import CSS for styling

function OrangeButton() {
  return (
    <div className="orange-button weather-intro">
      <h1>Real Time and Historical <br/> World Weather and Data API</h1>
      <p>Retrieve instant, accurate weather information for <br/> any location in the world in lightweight json format </p>
      <button className="rectangular-button">Get API</button>
    </div>
  );
}

export default OrangeButton;
