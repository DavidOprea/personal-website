import { motion } from "framer-motion";
import { projects } from "../data";
import Section from "./section";
import { IconGithub, IconExternal } from "./icons";

const MotionArticle = motion.article;

function Projects() {
  return (
    <Section id="projects" index="03" kicker="projects" title="Things I have built (and shipped)">
      <p className="section-copy">
        From on-device vision in the weight room to multiplayer markets and seismic waveforms —
        I like projects that have a real constraint, a real user, and a reason to exist.
      </p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <MotionArticle
            key={project.id}
            className={`project-card ${project.featured ? "is-featured" : ""}`}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            {project.image ? (
              <div className="project-media">
                <img src={project.image} alt="" />
              </div>
            ) : (
              <div className="project-media is-code" aria-hidden="true">
                <span className="mono">{project.tags[0]}</span>
                <span className="project-glyph">{project.name.slice(0, 2).toUpperCase()}</span>
              </div>
            )}

            <div className="project-body">
              <div className="project-topline">
                <h3>{project.name}</h3>
                {project.featured ? <span className="badge">featured</span> : null}
              </div>
              <p className="project-tagline">{project.tagline}</p>
              <p className="project-desc">{project.description}</p>
              <ul className="tag-row">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <IconGithub className="icon" />
                    source
                  </a>
                ) : null}
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <IconExternal className="icon" />
                    live
                  </a>
                ) : null}
              </div>
            </div>
          </MotionArticle>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
