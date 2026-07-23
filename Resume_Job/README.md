# AI Resume & Job Matching Platform

## 📌 Project Overview

The AI Resume & Job Matching Platform is a web application developed to compare a candidate's resume with a job description. The system analyzes the uploaded resume, identifies matching and missing skills, calculates a candidate fit score, provides resume improvement suggestions, recommends suitable job roles, and generates a downloadable PDF report.

---

## ✨ Features

- Resume Upload
- Job Description Upload
- Resume Parsing
- Skill Extraction
- Candidate Fit Score
- Skill Gap Analysis
- Resume Improvement Suggestions
- Job Recommendations
- PDF Report Generation

---

## 🛠️ Technology Stack

### Frontend
- React.js
- HTML
- CSS
- JavaScript
- Vite

### Backend
- FastAPI
- Python

### Resume Parsing
- PyMuPDF
- TXT File Parsing

### Report Generation
- ReportLab

### Version Control
- Git & GitHub

---

## 📂 Project Structure

```text
Resume_Job/
│
├── backend/
├── frontend/
├── parsers/
├── match_engine/
├── prompts/
├── reports/
├── schemas/
├── tests/
├── uploads/
├── requirements.txt
└── README.md
```

---

## 🚀 Installation

### Clone the Repository

```bash
git clone <repository-url>
```

### Backend

```bash
pip install -r requirements.txt
uvicorn backend.main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📋 Workflow

1. Upload Resume
2. Upload Job Description
3. Extract Resume Content
4. Extract Job Description Content
5. Compare Resume with Job Description
6. Calculate Candidate Fit Score
7. Generate Resume Suggestions
8. Recommend Suitable Job Roles
9. Download PDF Report

---

## 🎯 Expected Outcome

The system compares a resume with a job description and provides:
- Candidate Fit Score
- Matching Skills
- Missing Skills
- Resume Improvement Suggestions
- Recommended Job Roles
- Downloadable PDF Report

---

## 👥 Team Members

- Reshma Shaik
- (Add your teammate's name)

---

## 📄 License

This project was developed as part of the Master Capstone Project for academic purposes.
