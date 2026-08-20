export default function Section({ id, index, title, kicker, children }) {
  return (
    <section id={id} className="section">
      <header className="section-heading">
        <p className="section-kicker">
          <span className="mono">{index}</span>
          <span className="section-rule" />
          <span>{kicker}</span>
        </p>
        <h2>{title}</h2>
      </header>
      {children}
    </section>
  );
}
