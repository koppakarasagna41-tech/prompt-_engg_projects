function Results({ result }) {

  const downloadReport = () => {

    const report = `
AI Resume & Job Matching Report

Candidate Fit Score: ${result.match_score}%

Resume Strength: ${result.resume_strength}

Confidence Level: ${result.confidence_level}

Skills Found:
${result.matched_skills.map(skill => "- " + skill).join("\n")}

Missing Skills:
${result.missing_skills.map(skill => "- " + skill).join("\n")}

Resume Suggestions:
${result.suggestions.map(item => "- " + item).join("\n")}

Recommended Jobs:
${result.recommended_jobs.map(job => "- " + job).join("\n")}
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
        <h2>🎯 Candidate Fit Score</h2>
        <h1
          style={{
            color:
              result.match_score >= 80
                ? "green"
                : result.match_score >= 50
                ? "orange"
                : "red",
  }}
>
  {result.match_score}%
</h1>
        <p>{result.resume_strength}</p>
      </div>

      <div className="card">
        <h2>✅ Skills Found</h2>
        <ul>
          {result.matched_skills.map((skill, index) => (
            <li key={index}>✔ {skill}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2>⚠ Missing Skills</h2>
        <ul>
          {result.missing_skills.map((skill, index) => (
            <li key={index}>❌ {skill}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2>💡 Resume Suggestions</h2>
        <ul>
          {result.suggestions.map((item, index) => (
            <li key={index}>💡 {item}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2>💼 Recommended Jobs</h2>
        <ul>
          {result.recommended_jobs.map((job, index) => (
            <li key={index}>💼 {job}</li>
          ))}
        </ul>
      </div>

      <button
        className="download-btn"
        onClick={downloadReport}
      >
        📄 Download Report
      </button>

    </section>
  );
}

export default Results;