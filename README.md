<h1 align="center">💘 Companion Matcher</h1>

<p align="center">
  A fun and simple dating-style web app to help people find their perfect match based on shared interests!
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React.js-61DAFB?logo=react&style=for-the-badge">
  <img src="https://img.shields.io/badge/Backend-Node.js-green?logo=node.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge">
</p>

---

## 💡 Overview

**Companion Matcher** is a full-stack dating-inspired app that lets users:
- Create a profile with name, age, and interests
- Match with others who share 2+ interests
- Choose to 💘 Connect or ❌ Remove matches
- Built using React + Node.js with a clean, responsive design

---

## 🖼️ Screenshots

> _(Add your own screenshots here or drag/drop them on GitHub)_

<div align="center">
  <img src="https://via.placeholder.com/600x350.png?text=User+Form+Screen" width="70%" />
  <br><br>
  <img src="https://via.placeholder.com/600x350.png?text=Match+Cards+Screen" width="70%" />
</div>

---

## 🛠️ Tech Stack

| Layer     | Tech                 |
|-----------|----------------------|
| Frontend  | React.js (CSS Modules) |
| Backend   | Node.js + Express    |
| Storage   | In-Memory (Array)    |

---

## 🧪 Features

- 📝 Create Profile: Name, Age, Interests
- 🔍 Match Logic: 2 or more shared interests
- 💘 Connect Button: Marks user as matched
- ❌ Remove Button: Deletes match from the list
- ✨ Clean UI: Modern, responsive and easy to use

---

## 🧰 Project Structure


---

## 🔧 Setup Instructions

### ▶ Backend Setup

cd backend
npm install
node server.js

### 💻 Frontend Setup

cd frontend
npm install
npm start

### 🔌 API Summary

{
  "name": "Raghav",
  "age": 21,
  "interests": ["reading", "travel", "fitness"]
}

### 🔍 GET /matches/:name
Get users who share 2+ interests with :name

### ❌ DELETE /users/:name
Remove a user by name

