import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()



genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.0-flash")

def analyze_resume(resume_text, jd_text):

    prompt = f"""
You are an AI Resume Analyzer.

Compare the following Resume with the Job Description.

Resume:
{resume_text}

Job Description:
{jd_text}

Generate:

1. Candidate Fit Score (0-100)
2. Matching Percentage
3. Skills Found
4. Missing Skills
5. Experience Analysis
6. Resume Improvement Suggestions
7. Job Recommendations

Return the answer in a clear format.
"""

    response = model.generate_content(prompt)

    return response.text