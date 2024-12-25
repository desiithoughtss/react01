import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    emoji: "😁",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    emoji: "😁",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    emoji: "😁",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    emoji: "😁",
    color: "#E84F33",
  },
  {
    skill: "React",
    emoji: "😁",
    color: "#60DAFB",
  },
  {
    skill: "Python",
    emoji: "😁",
    color: "#FF3B00",
  },
];

function Avatar() {
  return (
    <>
      <img
        className="avatar"
        src="https://png.pngtree.com/thumb_back/fw800/background/20231231/pngtree-elegant-wallpapers-vibrant-abstract-vector-texture-of-random-forms-image_13891371.png"
      />
    </>
  );
}

function Intro() {
  return (
    <div>
      <h1>Lorem anything</h1>
      <p>
        Lorem thi is the nam eof the thing i can add to anything just a random
        text because the lorem is not working in the react i dont know why this
        is not working, i will find the fix of it.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {/* <Skill name="HTML + CSS" emoji="😁" color="blue" />
      <Skill name="Javascript" emoji="😁" color="yellow" />
      <Skill name="Python" emoji="😁" color="green" />
      <Skill name="ReactJS" emoji="😁" color="red" />
      <Skill name="Django" emoji="😁" color="violet" />
      <Skill name="Web Design" emoji="😁" color="orange" /> */}
      {skills.map((skill, index) => (
        <Skill
          key={index}
          name={skill.skill}
          color={skill.color}
          emoji={skill.emoji}
        />
      ))}
    </div>
  );
}

function Skill({ name, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p>
        {name} {emoji}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
