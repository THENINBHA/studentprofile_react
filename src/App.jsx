import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import StudentProfile from "./components/StudentProfile";

function App() {

  const [practiceCount, setPracticeCount] = useState(0);

  const [showProfile, setShowProfile] = useState(true);

  return (
    <div className="app">

      <Header />

      <main>

        <h2>Student Practice Tracker</h2>

        <button onClick={() => setShowProfile(!showProfile)}>
          {showProfile ? "Hide Profile" : "Show Profile"}
        </button>

        {showProfile && (
          <StudentProfile
            name="Anu"
            department="CSE"
            year="3rd Year"
            practiceCount={practiceCount}
          />
        )}

        <div className="buttons">

          <button onClick={() => setPracticeCount(practiceCount + 1)}>
            Complete Practice
          </button>

          <button onClick={() => setPracticeCount(0)}>
            Reset
          </button>

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default App;