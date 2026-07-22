import re

# Master list of common technical skills
SKILLS = [

    # Programming Languages
    "Python","Java","C","C++","C#","JavaScript","TypeScript","PHP","R",

    # Web Technologies
    "HTML","CSS","Bootstrap","React","Angular","Vue","Node.js","Express",

    # Backend
    "FastAPI","Flask","Django","Spring Boot",

    # Databases
    "SQL","MySQL","PostgreSQL","MongoDB","SQLite","Oracle",

    # Data Science
    "Machine Learning","Deep Learning","Data Science",
    "Pandas","NumPy","Scikit-learn","TensorFlow","PyTorch",
    "Matplotlib","Seaborn",

    # Analytics
    "Power BI","Tableau","Excel",

    # Cloud
    "AWS","Azure","Google Cloud",

    # DevOps
    "Docker","Kubernetes","Git","GitHub","Linux",

    # APIs
    "REST API","JSON","XML",

    # Soft Skills
    "Communication","Leadership","Problem Solving",
    "Critical Thinking","Teamwork","Time Management"
]


def extract_skills(text):
    found_skills = []

    text = text.lower()

    for skill in SKILLS:
        pattern = r"\b" + re.escape(skill.lower()) + r"\b"

        if re.search(pattern, text):
            found_skills.append(skill)

    return sorted(list(set(found_skills)))
def extract_experience(text):
    match = re.search(r'(\d+)\+?\s*years?', text, re.IGNORECASE)

    if match:
        return int(match.group(1))

    return 0
def analyze_resume(resume_text, jd_text):

    # Extract skills
    resume_skills = sorted(extract_skills(resume_text))
    jd_skills = sorted(extract_skills(jd_text))

    # Extract experience
    candidate_exp = extract_experience(resume_text)
    required_exp = extract_experience(jd_text)

    # Experience analysis
    if candidate_exp >= required_exp:
        experience_status = "Meets Requirement"
    else:
        experience_status = "Below Requirement"

    # Skill comparison
    matched_skills = sorted(list(set(resume_skills) & set(jd_skills)))
    missing_skills = sorted(list(set(jd_skills) - set(resume_skills)))

    # Match score
    if len(jd_skills) == 0:
        match_score = 0
    else:
        match_score = round((len(matched_skills) / len(jd_skills)) * 100)

    # Resume strength
    if match_score >= 85:
        resume_strength = "★★★★★ Excellent"
    elif match_score >= 70:
        resume_strength = "★★★★☆ Good"
    elif match_score >= 50:
        resume_strength = "★★★☆☆ Average"
    elif match_score >= 30:
        resume_strength = "★★☆☆☆ Needs Improvement"
    else:
        resume_strength = "★☆☆☆☆ Poor"

    # Confidence Level
    if match_score >= 80:
        confidence = "High"
    elif match_score >= 50:
        confidence = "Medium"
    else:
        confidence = "Low"

    # Suggestions
    suggestions = []

    if missing_skills:
        suggestions.append(
            "Improve the following skills: " +
            ", ".join(missing_skills)
        )

    if match_score < 40:
        suggestions.append(
            "Your resume needs significant improvement for this role."
        )
    elif match_score < 70:
        suggestions.append(
            "Add more relevant projects, internships and certifications."
        )
    else:
        suggestions.append(
            "Your resume is a good match for this job."
        )

    suggestions.append(
        "Keep your resume updated with your latest achievements."
    )

    suggestions.append(
        "Highlight technical skills in a dedicated Skills section."
    )

    # Job Recommendation
    recommended_jobs = recommend_jobs(matched_skills)

    # Resume Summary
    strengths = []
    weaknesses = []

    if matched_skills:
        strengths.append(
            "Relevant skills found: " +
            ", ".join(matched_skills)
        )

    if candidate_exp >= required_exp:
        strengths.append(
            "Experience meets the job requirement."
        )

    if missing_skills:
        weaknesses.append(
            "Missing skills: " +
            ", ".join(missing_skills)
        )

    if candidate_exp < required_exp:
        weaknesses.append(
            "Experience is below the required level."
        )

    if match_score >= 70:
        overall_feedback = (
            "Your resume is well aligned with this job role."
        )
    elif match_score >= 40:
        overall_feedback = (
            "Your resume partially matches the job. Improving the missing skills can increase your chances."
        )
    else:
        overall_feedback = (
            "Your resume requires significant improvement to match this job description."
        )

    # Final Result
    return {
        "match_score": match_score,
        "confidence_level": confidence,
        "resume_strength": resume_strength,

        "matched_skills": matched_skills,
        "missing_skills": missing_skills,

        "recommended_jobs": recommended_jobs,

        "experience_analysis": {
            "candidate_experience": candidate_exp,
            "required_experience": required_exp,
            "status": experience_status
        },

        "resume_summary": {
            "strengths": strengths,
            "weaknesses": weaknesses,
            "overall_feedback": overall_feedback
        },

        "suggestions": suggestions
    }
def recommend_jobs(skills):

    jobs = []

    if "Python" in skills and "SQL" in skills and "Power BI" in skills:
        jobs.append("Data Analyst")

    if "Python" in skills and ("FastAPI" in skills or "Flask" in skills or "Django" in skills):
        jobs.append("Backend Developer")

    if "HTML" in skills and "CSS" in skills and "JavaScript" in skills:
        jobs.append("Frontend Developer")

    if "Python" in skills and ("Machine Learning" in skills or "TensorFlow" in skills or "PyTorch" in skills):
        jobs.append("Machine Learning Engineer")

    if "Power BI" in skills or "Tableau" in skills:
        jobs.append("Business Intelligence Analyst")

    if "AWS" in skills or "Azure" in skills or "Google Cloud" in skills:
        jobs.append("Cloud Engineer")

    if "React" in skills and "Node.js" in skills:
        jobs.append("Full Stack Developer")

    if "Docker" in skills and "Kubernetes" in skills:
        jobs.append("DevOps Engineer")

    if not jobs:
        jobs.append("Software Engineer")

    return sorted(list(set(jobs)))