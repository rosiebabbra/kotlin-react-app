
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/greeting')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{message || "Loading..."}</h1>
    </div>
  );
}

export default App;
