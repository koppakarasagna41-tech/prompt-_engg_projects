# AI Customer Support Assistant

An AI-powered Customer Support Assistant designed to streamline customer interactions through an intuitive web interface. The application enables users to manage chats, support tickets, conversations, and dashboard functionalities efficiently.

The frontend is built with **React** and **Vite** and deployed on **Vercel**. The backend is developed using **FastAPI** and deployed on **Render**. The backend communicates with **Supabase** for data storage, while the frontend interacts with the backend through REST APIs.

---

## 🚀 Live Demo

### 🌐 Frontend
https://ai-customer-assistant-mh0n2i2oa-koppakarasagna41-techs-projects.vercel.app

### ⚙️ Backend API
https://ai-customer-assistant-backend.onrender.com

---

## 📂 GitHub Repositories

### Frontend Repository
https://github.com/koppakarasagna41-tech/ai-customer-assistant

### Backend Repository
https://github.com/koppakarasagna41-tech/ai-customer-assistant-backend

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- HTML5
- CSS3
- JavaScript

### Backend
- FastAPI
- Python

### Database
- Supabase

### Deployment
- Vercel
- Render

---

## ✨ Features

- Customer chat interface
- Ticket management
- Conversation history
- Dashboard for support activities
- REST API integration between frontend and backend
- Cloud deployment for frontend and backend
- Supabase database integration

---

## 📁 Project Architecture

```
Frontend (React + Vite)
        │
        ▼
REST API Requests
        │
        ▼
Backend (FastAPI)
        │
        ▼
Supabase Database
```

---

## ⚙️ Installation

### Clone the repositories

#### Frontend

```bash
git clone https://github.com/koppakarasagna41-tech/ai-customer-assistant.git
cd ai-customer-assistant
npm install
npm run dev
```

#### Backend

```bash
git clone https://github.com/koppakarasagna41-tech/ai-customer-assistant-backend.git
cd ai-customer-assistant-backend
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## 📌 Deployment

| Service | Platform |
|---------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | Supabase |

---

## ⚠️ Current Status

The application has been successfully deployed on both **Vercel** and **Render**.

The backend communicates with **Supabase** for data storage, and the frontend consumes REST APIs exposed by the backend for chat, tickets, conversations, and dashboard functionality.

**Known Issue:** A backend API integration/runtime issue is currently affecting some endpoints. This issue is under investigation and future updates will address it.

---

## 📄 License

This project was developed as part of an academic internship/capstone project and is intended for educational purposes.

---

## ⭐ Acknowledgements

- React
- Vite
- FastAPI
- Supabase
- Vercel
- Render
