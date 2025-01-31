import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    color: "#2257e6",
    emoji: "💪",
  },
  {
    skill: "JavaScript",
    color: "#ead316",
    emoji: "💪",
  },
  {
    skill: "Django",
    color: "#b9d7a3",
    emoji: "👍",
  },
  {
    skill: "Git and Github",
    color: "#e7452b",
    emoji: "👍",
  },
  {
    skill: "React",
    color: "#53d4f7",
    emoji: "💪",
  },
];

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
        {skills.map((skill) => (
          <Skills data={skill} />
        ))}
      </div>
    </div>
  );
}

function Skills({ data }) {
  return (
    <div className="skill" style={{ backgroundColor: data.color }}>
      <p>{`${data.skill} ${data.emoji}`}</p>
    </div>
  );
}

export default App;
