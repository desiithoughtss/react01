import "./App.css";

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

function Skill(props) {
  // console.log(props);
  return (
    <p className="skill" style={{backgroundColor: props.color}}>
      {props.name} {props.emoji}
    </p>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML + CSS" emoji="😁" color="blue" />
      <Skill name="Javascript" emoji="😁" color="yellow" />
      <Skill name="Python" emoji="😁" color="green" />
      <Skill name="ReactJS" emoji="😁" color="red" />
      <Skill name="Django" emoji="😁" color="violet" />
      <Skill name="Web Design" emoji="😁" color="orange" />
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
