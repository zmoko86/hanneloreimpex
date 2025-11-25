import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Acoperișuri industrializate, elemente CNC</h1>
            <p>
              Producem structuri din lemn, acoperișuri și pereți tip framing, pregătite pentru montaj rapid și precis.
            </p>
            <div className="hero-buttons">
              <a href="/calculator" className="btn btn-primary">
                Calculează un preț
              </a>
              <a href="/contact" className="btn btn-outline">
                Contactează-ne
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <h2>Ce oferim</h2>
        <div className="cards">
          <div className="card">
            <h3>Acoperișuri industrializate</h3>
            <p>Panouri și ferme prefabricate, tăiate la CNC, gata de montaj pe șantier.</p>
          </div>
          <div className="card">
            <h3>Pereți tip framing</h3>
            <p>Pereți la roșu sau izolați, cu pregătire pentru instalații, produși industrial.</p>
          </div>
          <div className="card">
            <h3>Elemente CNC</h3>
            <p>Elemente și îmbinări din lemn prelucrate CNC pentru toleranțe reduse și montaj ușor.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
