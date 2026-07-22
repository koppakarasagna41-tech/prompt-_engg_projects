from match_engine.matcher import analyze_resume
from parsers.jd_parser import extract_jd_text
from parsers.resume_parser import extract_resume_text
from fastapi import FastAPI, UploadFile, File

app = FastAPI(
    title="AI Resume & Job Matching Platform",
    version="1.0"
)
resume_text = ""
jd_text = ""

@app.get("/")
def home():
    return {
        "message": "Welcome to AI Resume & Job Matching Platform"
    }

@app.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):
    global resume_text
    file_path = f"uploads/{file.filename}"

    with open(file_path, "wb") as f:
        f.write(await file.read())

   
    resume_text = extract_resume_text(file_path)

    return {
        "filename": file.filename,
        "resume_text": resume_text
    }

@app.post("/upload-job-description")
async def upload_job_description(file: UploadFile = File(...)):
    global jd_text

    file_path = f"uploads/{file.filename}"

    with open(file_path, "wb") as f:
        f.write(await file.read())

    jd_text = extract_jd_text(file_path)

    return {
        "filename": file.filename,
        "job_description": jd_text
    }


@app.post("/analyze")
async def analyze():

    if not resume_text or not jd_text:
        return {
            "message": "Please upload both Resume and Job Description first."
        }

    # Call Gemini
    result = analyze_resume(resume_text, jd_text)

    return result