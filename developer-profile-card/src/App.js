import "./index.css";

function App() {
  return (
    <div className="card">
      <Picture />
      <Data />
    </div>
  );
}

function Picture() {
  return (
    <img
      className="profile-pic"
      src="images/profile_pic.jpeg"
      alt="profile-picture"
    />
  );
}

function Data() {
  return (
    <div className="data">
      <h2>Muhammad Hassnain Raza</h2>
      <p className="description">
        Full-Stack Developer and Engineering Student at MUET. When not coding I
        like to watch memes, Youtube videos.
      </p>
      <div className="skills">
        <Skills skill="HTML+CSS" color="#2257e6" />
        <Skills skill="JavaScript" color="#ead316" />
        <Skills skill="Django" color="#b9d7a3" />
        <Skills skill="Git & Github" color="#e7452b" />
        <Skills skill="React" color="#53d4f7" />
      </div>
    </div>
  );
}

function Skills({ skill, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p>{skill}</p>
    </div>
  );
}

export default App;
