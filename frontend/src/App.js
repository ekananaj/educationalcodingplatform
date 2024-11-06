import React from 'react';
import CodingExercise from './components/CodingExercise';
import LearningPath from './components/LearningPath';
import ProgressDashboard from './components/ProgressDashboard';
import Recommendations from './components/Recommendations';

function App() {
  return (
    <div>
      <h1>Welcome to the Coding Platform for Kids</h1>
      <LearningPath />
      <CodingExercise />
      <ProgressDashboard />
      <Recommendations />
    </div>
  );
}

export default App;
