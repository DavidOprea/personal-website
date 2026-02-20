import mePic from "../../src/assets/hot2.jpg";
import "./global.css";

function Home() {
  return (
    <>
      <div id = "home-block">
        <div id = "home-text-block">
          <h1 class = "home-text">Hello, my name is</h1>
          <h1 id = 'name-text'>David Oprea</h1>
          <h1 class = "home-text">and I am a developer.</h1>
        </div>
        <div id = "home-img-block">
          <img id="me-img" src={mePic} width = {400} height = {300}/>
        </div>
      </div>
      <div id = "home-about-me">
        <h2 id = "who-text">Who am I?</h2>
        <h3 id = "who-answer-text">I'm a computer science student with a passion for full stack development, data science, and machine learning. I also love problem-solving and taking on challenging projects to learn and find satisfaction through building and deploying them. I'm actively exploring the diverse landscape of computer science, eager to discover where my skills in coding, logic, and design can make the most impact.</h3>
      </div>
    </>
  );
}

export default Home;