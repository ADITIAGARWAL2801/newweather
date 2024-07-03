import React from 'react'

const Forecast = () => {
  return (
    <>
<div className="forecast-container">
{["TUE", "WED", "THU", "FRI", "SAT"].map((day, index) => (
            <div className="forecast-day" key={index}>
              <span>{day}</span>
              <img src="cloud-icon.png" alt="Cloudy" />
              <span>29°C</span>
              </div>
))}
</div>
</>
  )
}

export default Forecast
