import React, { useState } from 'react';
import axios from 'axios';
import './UserForm.css';

export default function UserForm({ onCreated }) {
  const [form, setForm] = useState({ name: '', age: '', interests: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const interestsArray = form.interests.split(',').map(i => i.trim());
    await axios.post('http://localhost:3001/users', {
      name: form.name,
      age: parseInt(form.age),
      interests: interestsArray,
    });
    onCreated(form.name);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h1>Create Your Profile 💘</h1>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="age" type="number" placeholder="Age" onChange={handleChange} required />
      <input
        name="interests"
        placeholder="Interests (comma-separated)"
        onChange={handleChange}
        required
      />
      <button type="submit">💌 Find Matches</button>
    </form>
  );
}
