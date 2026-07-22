import re

# Master list of common technical skills
SKILLS = [
    "Python", "Java", "C", "C++", "JavaScript", "HTML", "CSS",
    "SQL", "MySQL", "MongoDB", "PostgreSQL",
    "FastAPI", "Flask", "Django",
    "Machine Learning", "Deep Learning", "Data Science",
    "Pandas", "NumPy", "TensorFlow", "PyTorch",
    "Power BI", "Excel",
    "Git", "GitHub",
    "AWS", "Docker", "Kubernetes",
    "Linux"
]

def extract_skills(text):
    """
    Extract skills from resume or job description.
    """

    found_skills = []

    text = text.lower()

    for skill in SKILLS:
        if skill.lower() in text:
            found_skills.append(skill)

    return sorted(list(set(found_skills)))

def analyze_resume(resume_text, jd_text):

    resume_skills = extract_skills(resume_text)
    jd_skills = extract_skills(jd_text)

    matched_skills = list(set(resume_skills) & set(jd_skills))
    missing_skills = list(set(jd_skills) - set(resume_skills))

    if len(jd_skills) == 0:
        match_score = 0
    else:
        match_score = round((len(matched_skills) / len(jd_skills)) * 100)

    suggestions = []

    if missing_skills:
        suggestions.append(
            "Consider learning: " + ", ".join(missing_skills)
        )

    if match_score < 70:
        suggestions.append(
            "Add more relevant projects and certifications."
        )

    if match_score >= 70:
        suggestions.append(
            "Your resume matches the job requirements well."
        )

    return {
        "match_score": match_score,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills,
        "suggestions": suggestions
    }