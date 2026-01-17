import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import { auth, provider } from "./firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const [resume, setResume] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Keep user logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Google Login
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch {
      alert("Google Sign-in failed");
    }
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setResult(null);
  };

  // Submit resume
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume || !jobDesc) {
      alert("Please upload resume and enter job description");
      return;
    }

    const formData = new FormData();
    formData.append("file", resume);
    formData.append("job_description", jobDesc);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://ai-resume-analyzer-jp5n.onrender.com/analyze/",
        formData
      );
      setResult(response.data);
    } catch {
      alert("Backend connection failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>AI Resume Analyzer & Job Match</h1>

      {!user ? (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <button onClick={login}>Sign in with Google</button>
        </div>
      ) : (
        <div style={{ textAlign: "right", marginBottom: "10px" }}>
          <span style={{ marginRight: "10px" }}>
            Welcome, {user.displayName}
          </span>
          <button onClick={logout}>Logout</button>
        </div>
      )}

      {user && (
        <>
          <form onSubmit={handleSubmit}>
            <label>Upload Resume (PDF)</label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setResume(e.target.files[0])}
            />

            <label>Paste Job Description</label>
            <textarea
              rows="5"
              value={jobDesc}
              onChange={(e) => setJobDesc(e.target.value)}
            />

            <button type="submit">
              {loading ? "Analyzing..." : "Analyze Resume"}
            </button>
          </form>

          {result && (
            <div className="result-box">
              <h2 style={{ textAlign: "center" }}>Match Result</h2>

              <div className="score">
                {result.match_percentage}%
              </div>

              <div className="skill-grid">
                <div className="skill-card">
                  <h3>Matched Skills</h3>
                  <p>{result.matched_skills.join(", ") || "None"}</p>
                </div>

                <div className="skill-card">
                  <h3>Missing Skills</h3>
                  <p>{result.missing_skills.join(", ") || "None"}</p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
