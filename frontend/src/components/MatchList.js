import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MatchList.css';

export default function MatchList({ username }) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (username) {
      fetchMatches();
    }
  }, [username]);

  const fetchMatches = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/matches/${username}`);
      setMatches(res.data);
    } catch (err) {
      console.error('Error fetching matches:', err);
    }
  };

  const handleConnect = (name) => {
    alert(`You connected with ${name}! 💖`);
    // You could also POST to a shortlist endpoint if needed
  };

  const handleRemove = async (name) => {
    try {
      await axios.delete(`http://localhost:3001/users/${name}`);
      fetchMatches(); // refresh after removal
    } catch (err) {
      console.error('Error removing user:', err);
    }
  };

  return (
    <div className="match-list">
      <h2>💖 Suggessions for {username}</h2>
      <div className="card-wrapper">
        {matches.length === 0 ? (
          <p>No matches found.</p>
        ) : (
          matches.map((match, index) => (
            <div key={index} className="match-card">
              <h3>{match.name}</h3>
              <p>Interests: {match.interests.join(', ')}</p>
              <div className="button-group">
                <button className="connect-btn" onClick={() => handleConnect(match.name)}>
                  💘 Connect
                </button>
                <button className="remove-btn" onClick={() => handleRemove(match.name)}>
                  ❌ Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
