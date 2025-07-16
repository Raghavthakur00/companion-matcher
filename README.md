<h1 align="center">💘 Companion Matcher</h1>

<p align="center">
  A fun and simple dating-style web app to help people find their perfect match based on shared interests!
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React.js-61DAFB?logo=react&style=for-the-badge">
  <img src="https://img.shields.io/badge/Backend-Node.js-green?logo=node.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge">
</p>


<p align="center">
  A full-stack web project that matches users based on shared interests — like a mini dating app!
</p>

---

## 📁 Project Repository Overview

Your examiner can easily find all files here:

companion-matcher/
├── frontend/ ← React frontend code
│ ├── src/
│ │ ├── App.js ← Main React file
│ │ └── components/
│ │ ├── UserForm.js ← Profile form
│ │ └── MatchList.js ← Match cards with Connect/Remove
│ └── public/
│ └── index.html
│ └── package.json ← React config
│
├── backend/ ← Node.js + Express backend
│ ├── server.js ← Main server file
│ └── package.json
│
└── README.md ← Project instructions


---

## 💡 Project Description

**Companion Matcher** is a matching platform where users:
- Create a profile with name, age, and interests
- Automatically match with others who share **2 or more** common interests
- Can choose to **💘 Connect** or **❌ Remove** each match
- All data is stored in memory (reset on restart)

---

## 🧰 Tech Stack

| Layer    | Technology      |
|----------|------------------|
| Frontend | React.js         |
| Backend  | Node.js + Express |
| Storage  | In-Memory Array  |

---

## 📸 Screenshots

- **User Profile Form**
  <img width="1885" height="965" alt="Screenshot 2025-07-16 220127" src="https://github.com/user-attachments/assets/e6ef86d7-65c1-4bc8-9dfe-5bf5e73f5b72" />


- **Match Cards with Connect/Remove**
  <img width="1875" height="922" alt="Screenshot 2025-07-16 223530" src="https://github.com/user-attachments/assets/94848dfd-9169-465a-baec-4b2ad88b57bf" />

- **Connection build**
  <img width="1891" height="961" alt="Screenshot 2025-07-16 223842" src="https://github.com/user-attachments/assets/d376bad8-494a-4502-a8fd-41ea9ff56339" />

---

## 🚀 Setup Instructions

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

