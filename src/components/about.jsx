import "./global.css";

function About() {
    const facts = [
        "I'm currently a computer science student at Purdue University, West Lafayette!",
        "My favorite food is fried chicken.",
        "I have two cats: Belle and Tiger.",
        "I can bench about 135 pounds for 8 reps (but I will improve).",
        "I hate getting sand all over me when I am at the beach, especially in my shoes!"
    ]

    const skills = [
        ["Languages:", " Python, C++, Java, HTML, CSS, JavaScript"],
        ["Full Stack Development:", " React.js, Node.js, Flask, SQL, REST APIs"],
        ["Machine Learning:", " PyTorch, Pandas, Numpy, Reinforcement Learning"],
        ["Competitive Programming:", " Data Structures, Algorithms, Optimization"],
        ["Miscellaneous:", " Jitter Clicking, Pickleball, Clash Royale"]
    ]

    return (
        <div id = "about-me-container">
            <h2 class = "header-text">About Me</h2>
            <h3 class = "header-text shadow" >Facts</h3>
            <ul>
                {facts.map((fact, index) => (
                <li class = "fact" key={index}>{fact}</li>
                ))}
            </ul>
            <h3 class = "header-text shadow" >Skills</h3>
            <ul id = "skills">
                {skills.map((skill, index) => (
                    <li className="skill" key={index}>
                        <span className="red italic underline">{skill[0]}</span>
                        <span>{skill[1]}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default About;