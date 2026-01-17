import spacy
from app.skills_list import SKILLS

# Load spaCy English model
nlp = spacy.load("en_core_web_sm")

def extract_skills(text: str):
    """
    Extract skills from given text using simple keyword matching.
    """
    text = text.lower()
    found_skills = []

    for skill in SKILLS:
        if skill.lower() in text:
            found_skills.append(skill)

    # Remove duplicates
    return list(set(found_skills))


def match_skills(resume_skills, jd_skills):
    """
    Compare resume skills and job description skills.
    Returns match percentage, missing skills, and matched skills.
    """
    resume_set = set(resume_skills)
    jd_set = set(jd_skills)

    matched = resume_set.intersection(jd_set)
    missing = jd_set - resume_set

    if len(jd_set) == 0:
        match_percentage = 0
    else:
        match_percentage = round((len(matched) / len(jd_set)) * 100, 2)

    return match_percentage, list(missing), list(matched)
