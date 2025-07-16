import React, { useState } from 'react';
import UserForm from './components/UserForm';
import MatchList from './components/MatchList';

function App() {
  const [username, setUsername] = useState('');

  return (
    <div>
      <UserForm onCreated={setUsername} />
      {username && <MatchList username={username} />}
    </div>
  );
}

export default App;
