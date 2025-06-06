import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import './styles/styles.css';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use a CORS proxy to bypass the CORS issue
      fetch("https://course-api.com/react-tours-project")
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch tours"); // Handle error
        setLoading(false);
      });
  }, []);

  const handleRemoveTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <div className="App">
      <h1>Tour Comparison App</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Gallery tours={tours} onRemove={handleRemoveTour} />
    </div>
  );
}

export default App;
