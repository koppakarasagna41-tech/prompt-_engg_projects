import { useState } from "react";
import { FaFileUpload, FaBriefcase, FaSpinner } from "react-icons/fa";

function UploadSection({ onAnalysisComplete }) {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!resume || !jobDescription) {
      alert("Please upload both Resume and Job Description.");
      return;
    }

    setLoading(true);

    try {
      // Upload Resume
      const resumeForm = new FormData();
      resumeForm.append("file", resume);

      const resumeUpload = await fetch("https://prompt-engg-projects.onrender.com/upload-resume", {
        method: "POST",
        body: resumeForm,
      });

      if (!resumeUpload.ok) {
        throw new Error("Resume upload failed");
      }

      // Upload Job Description
      const jdForm = new FormData();
      jdForm.append("file", jobDescription);

      const jdUpload = await fetch("https://prompt-engg-projects.onrender.com/upload-job-description", {
        method: "POST",
        body: jdForm,
      });

      if (!jdUpload.ok) {
        throw new Error("Job Description upload failed");
      }

      // Analyze
      const analyzeResponse = await fetch("https://prompt-engg-projects.onrender.com/analyze", {
        method: "POST",
      });

      if (!analyzeResponse.ok) {
        throw new Error("Analysis failed");
      }

      const data = await analyzeResponse.json();


      onAnalysisComplete(data);
      alert("✅ Resume analyzed successfully!");

    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="features" className="upload-section">
      <div className="upload-grid">

        <div className="upload-card">
          <FaFileUpload className="upload-icon" />

          <h3>Upload Resume</h3>

          <p>Select your Resume (PDF)</p>

          <label className="custom-upload">
            Choose Resume
            <input
              type="file"
              accept=".pdf"
              hidden
              onChange={(e) => setResume(e.target.files[0])}
            />
          </label>

          {resume && <p className="selected-file">📄 {resume.name}</p>}
        </div>

        <div className="upload-card">
          <FaBriefcase className="upload-icon" />

          <h3>Upload Job Description</h3>

          <p>Select Job Description</p>

          <label className="custom-upload">
            Choose Job Description
            <input
              type="file"
              accept=".pdf,.txt"
              hidden
              onChange={(e) => setJobDescription(e.target.files[0])}
            />
          </label>

          {jobDescription && (
            <p className="selected-file">📄 {jobDescription.name}</p>
          )}
        </div>

      </div>

      <button
        className="analyze-btn"
        onClick={handleAnalyze}
        disabled={loading}
      >
        {loading ? (
          <>
            <FaSpinner className="spinner" />
            Analyzing...
          </>
        ) : (
          "Analyze Compatibility"
        )}
      </button>
    </section>
  );
}

export default UploadSection;