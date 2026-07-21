const analyzeBtn = document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", async () => {

    const resumeFile = document.getElementById("resumeFile").files[0];
    const jdFile = document.getElementById("jdFile").files[0];

    if (!resumeFile || !jdFile) {
        alert("Please upload both Resume and Job Description.");
        return;
    }

    try {

        // Upload Resume
        let formData = new FormData();
        formData.append("file", resumeFile);

        await fetch("http://127.0.0.1:8000/upload-resume", {
            method: "POST",
            body: formData
        });

        // Upload Job Description
        formData = new FormData();
        formData.append("file", jdFile);

        await fetch("http://127.0.0.1:8000/upload-job-description", {
            method: "POST",
            body: formData
        });

        // Analyze
        const response = await fetch("http://127.0.0.1:8000/analyze", {
            method: "POST"
        });

        const data = await response.json();

        document.getElementById("score").textContent = data.match_score;

        const matched = document.getElementById("matchedSkills");
        matched.innerHTML = "";
        data.matched_skills.forEach(skill => {
            matched.innerHTML += `<li>${skill}</li>`;
        });

        const missing = document.getElementById("missingSkills");
        missing.innerHTML = "";
        data.missing_skills.forEach(skill => {
            missing.innerHTML += `<li>${skill}</li>`;
        });

        const suggestions = document.getElementById("suggestions");
        suggestions.innerHTML = "";
        data.suggestions.forEach(item => {
            suggestions.innerHTML += `<li>${item}</li>`;
        });

    } catch (error) {
        console.error(error);
        alert("Something went wrong. Make sure the FastAPI backend is running.");
    }

});