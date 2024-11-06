import React, { useEffect, useState } from 'react';

function Recommendations() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/recommendations")
      .then(response => response.json())
      .then(data => setRecommendations(data))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h2>Personalized Recommendations</h2>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;
