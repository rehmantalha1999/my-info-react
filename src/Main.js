import react from "react";
export default function Main() {
  return (
    <div className="main">
      <h1 className="name">Talha Rehman</h1>
      <h2 className="pos">Frontend Developer</h2>
      <h3 className="website">rehman.abid@ug.bilkent.edu.tr</h3>
      <div className="links">
        <button className="email">
          <img src="./images/email.png" alt="" />
          <span className="email-text">Email</span>
        </button>
        <a href="https://www.linkedin.com/in/talha-rehman-abid-b46900214/">
          <img className="linkedin" src="./images/linkedin.png"/>
        </a>
      </div>
      <div>
        <h1 className="about">About</h1>
        <p>As an Information Systems and Technology student at Bilkent University, I am seeking an opportunity to apply my front-end development skills with a company that I can be proud to be a part of. With a particular interest in making things simple and automated, I try to keep up with security and best practices and am always looking for new things to learn.</p>
        <h1 className="interests">Interests</h1>
        <p>Workout Fanatic. Passionate for music and music making. Philosophy and longs walks. Math Geek. Vigor for learning and teaching.</p>
      </div>
    </div>
  );
}
