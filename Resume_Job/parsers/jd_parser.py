import fitz
import os

def extract_jd_text(file_path):
    extension = os.path.splitext(file_path)[1].lower()

    # PDF
    if extension == ".pdf":
        text = ""
        pdf = fitz.open(file_path)

        for page in pdf:
            text += page.get_text()

        pdf.close()
        return text

    # TXT
    elif extension == ".txt":
        with open(file_path, "r", encoding="utf-8") as f:
            return f.read()

    else:
        raise ValueError(f"Unsupported file type: {extension}")