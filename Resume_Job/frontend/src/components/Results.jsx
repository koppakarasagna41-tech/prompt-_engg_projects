function Results() {
  const downloadReport = () => {
    const report = `
AI Resume & Job Matching Report

Candidate Fit Score: 85%

Skills Found:
- Python
- SQL
- React

Missing Skills:
- Docker
- FastAPI
- AWS

Resume Suggestions:
- Add more projects
- Highlight achievements
- Include certifications

Recommended Jobs:
- Python Developer
- Backend Developer
- Software Engineer
`;

    const blob = new Blob([report], { type: "text/plain" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "Resume_Report.txt";

    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <section className="results">

      <div className="card score-card">
        <h2>Candidate Fit Score</h2>
        <h1>85%</h1>
        <p>Excellent Match</p>
      </div>

      <div className="card">
        <h2>Skills Found</h2>
        <ul>
          <li>✔ Python</li>
          <li>✔ SQL</li>
          <li>✔ React</li>
        </ul>
      </div>

      <div className="card">
        <h2>Missing Skills</h2>
        <ul>
          <li>❌ Docker</li>
          <li>❌ FastAPI</li>
          <li>❌ AWS</li>
        </ul>
      </div>

      <div className="card">
        <h2>Resume Suggestions</h2>
        <ul>
          <li>💡 Add more projects</li>
          <li>💡 Highlight achievements</li>
          <li>💡 Include certifications</li>
        </ul>
      </div>

      <div className="card">
        <h2>Recommended Jobs</h2>
        <ul>
          <li>💼 Python Developer</li>
          <li>💼 Backend Developer</li>
          <li>💼 Software Engineer</li>
        </ul>
      </div>

      <button
        className="download-btn"
        onClick={downloadReport}
      >
        Download Report
      </button>

    </section>
  );
}

export default Results;