import { motion } from "framer-motion";
import { funFacts, socials } from "../data";
import Section from "./section";

const MotionArticle = motion.article;
const linkedin = socials.find((social) => social.id === "linkedin");

function FunFacts() {
  return (
    <Section id="facts" index="04" kicker="offline" title="A few things that aren't on the resume">
      <p className="section-copy">
        The stack is only half the story. Here is the human on the other side of the terminal.
      </p>

      <div className="facts-grid">
        {funFacts.map((fact, index) => (
          <MotionArticle
            key={fact.id}
            className={`fact-card ${index === 0 ? "is-wide" : ""}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <p className="fact-kicker mono">{fact.kicker}</p>
            <p>{fact.text}</p>
          </MotionArticle>
        ))}
      </div>

      <div className="cta-panel">
        <div>
          <p className="mono">next</p>
          <h3>Want to build something together?</h3>
          <p>
            Internships, data, Docker, or a puzzle that got stuck in my head — I am in.
          </p>
        </div>
        <a className="btn btn-primary" href={linkedin?.href} target="_blank" rel="noreferrer">
          Ping me on LinkedIn
        </a>
      </div>
    </Section>
  );
}

export default FunFacts;
