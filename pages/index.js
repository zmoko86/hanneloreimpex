import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Acoperișuri industrializate, elemente CNC</h1>
            <p>Producem structuri din lemn optimizate și prefabricate CNC.</p>
            <div className="hero-buttons">
              <a href="/calculator" className="btn btn-primary">Calculează un preț</a>
              <a href="/contact" className="btn btn-outline">Contactează-ne</a>
            </div>
          </div>
        </div>
      </section>
      {/* restul conținutului */}
    </Layout>
  );
}
