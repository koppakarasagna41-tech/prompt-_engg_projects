import { useState } from "react";
import { FaFileUpload, FaBriefcase, FaSpinner } from "react-icons/fa";

function UploadSection({ onAnalysisComplete }) {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    if (!resume || !jobDescription) {
      alert("Please upload both Resume and Job Description.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onAnalysisComplete();
    }, 3000);
  };

  return (
    <section className="upload-section">
      <div className="upload-grid">

        <div className="upload-card">
          <FaFileUpload className="upload-icon" />

          <h3>Upload Resume</h3>

          <p>Select your Resume (PDF or DOCX)</p>

          <label className="custom-upload">
            Choose Resume
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setResume(e.target.files[0])}
              hidden
            />
          </label>

          {resume && (
            <p className="selected-file">
              📄 {resume.name}
            </p>
          )}
        </div>

        <div className="upload-card">
          <FaBriefcase className="upload-icon" />

          <h3>Upload Job Description</h3>

          <p>Select the Job Description</p>

          <label className="custom-upload">
            Choose Job Description
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setJobDescription(e.target.files[0])}
              hidden
            />
          </label>

          {jobDescription && (
            <p className="selected-file">
              📄 {jobDescription.name}
            </p>
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
    "Analyze Resume"
  )}
</button>
    </section>
  );
}

export default UploadSection;