import React, { useEffect, useState } from 'react';

function ProgressDashboard() {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/api/progress")
      .then(response => response.json())
      .then(data => setProgress(data))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h2>Progress Dashboard</h2>
      <p>Exercises Completed: {progress.exercisesCompleted}</p>
      <p>Accuracy: {progress.accuracy}%</p>
    </div>
  );
}

export default ProgressDashboard;
