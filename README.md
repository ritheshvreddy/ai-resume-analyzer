
# AI Resume Analyzer

A full-stack web application that analyzes a user's resume against a given job description and provides a job–resume match percentage along with matched and missing skills.
The system also includes Google Authentication for secure user access.


## Features

* Google Authentication (Firebase)

* Upload Resume in PDF format

* Paste Job Description

* AI-based Resume Parsing & Skill Extraction

* Match Percentage Calculation

* Displays Matched & Missing Skills

* Fully Deployed Full-Stack Application
## Tech Stack

**Frontend:** 
* React + Vite

* Firebase Authentication

* Axios

* Tailwind CSS

**Backend:**
* FastAPI (Python)

* SpaCy NLP

* Scikit-learn

* PyPDF2

* Uvicorn

**Deployment:**

* Render (Frontend & Backend)

## How It Works
1. User signs in using Google Authentication.

2. User uploads a resume (PDF) and pastes a job description.

3. Backend extracts text from PDF.

4. NLP pipeline extracts relevant skills.

5. System compares resume skills with job description skills.

6. Match percentage and skill differences are returned to frontend.
## Run Locally

Clone the project

```bash
  git clone https://github.com/ritheshvreddy/ai-resume-analyzer
```

Go to the project directory

```bash
  cd ai-resume-analyzer
```

Backend Setup

```bash
cd backend 
python -m venv venv source 
venv\Scripts\activate 
pip install -r requirements.txt 
uvicorn app.main:app
```

Frontend Setup

```bash
cd frontend 
npm install 
npm run dev
```

## Live URL

Frontend URL: https://ai-resume-frontend-zh38.onrender.com
Backend API URL: https://ai-resume-analyzer-jp5n.onrender.com

**Note:** Free Render instances may take a few seconds to wake up on first request.
