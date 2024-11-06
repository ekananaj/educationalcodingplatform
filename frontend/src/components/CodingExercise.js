import React, { useState } from 'react';

function CodingExercise() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    fetch("http://localhost:8000/api/coding_exercises/evaluate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code })
    })
    .then(response => response.json())
    .then(data => setResult(data.result))
    .catch(error => console.error("Error:", error));
  };

  return (
    <div>
      <h2>Python Coding Exercise</h2>
      <textarea value={code} onChange={(e) => setCode(e.target.value)} />
      <button onClick={handleSubmit}>Run Code</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default CodingExercise;
