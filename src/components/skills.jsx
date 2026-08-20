import { skills } from "../data";
import Section from "./section";

function Skills() {
  return (
    <Section id="stack" index="01" kicker="toolkit" title="What I actually reach for">
      <div className="skill-grid">
        {skills.map((group) => (
          <article key={group.id} className="skill-card">
            <h3 className="mono">{group.category}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
