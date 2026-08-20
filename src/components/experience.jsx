import { motion } from "framer-motion";
import { experience, profile } from "../data";
import Section from "./section";
import { IconDownload } from "./icons";

const MotionLi = motion.li;

function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      kicker="experience"
      title="Places I have shipped real systems"
    >
      <div className="section-lead">
        <p>
          Internships, research, and student orgs — data pipelines, product work,
          and the occasional model that has to make a decision on a Monday morning.
        </p>
        <a className="btn btn-ghost" href={profile.resumeUrl} download={profile.resumeFilename}>
          <IconDownload className="icon" />
          download full resume
        </a>
      </div>

      <ol className="timeline">
        {experience.map((role, index) => (
          <MotionLi
            key={role.id}
            className="timeline-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <div className="timeline-index mono">{String(index + 1).padStart(2, "0")}</div>
            <article className="experience-card">
              <header>
                <div>
                  <p className="experience-org">{role.org}</p>
                  <h3>{role.role}</h3>
                </div>
                {role.location || role.period ? (
                  <p className="experience-loc">
                    {[role.location, role.period].filter(Boolean).join(" · ")}
                  </p>
                ) : null}
              </header>
              <p className="experience-summary">{role.summary}</p>
              <ul className="experience-highlights">
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <ul className="tag-row">
                {role.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          </MotionLi>
        ))}
      </ol>
    </Section>
  );
}

export default Experience;
