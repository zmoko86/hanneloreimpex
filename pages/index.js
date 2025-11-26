import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Hannelore Impex — Acoperișuri industrializate și elemente CNC">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Acoperișuri industrializate & elemente CNC</h1>
            <p>Structuri din lemn, framing și panouri prefabricate. Precizie, viteză și durabilitate.</p>
            <div className="hero-buttons">
              <a href="/servicii" className="btn-primary">Serviciile noastre</a>
              <a href="/contact" className="btn-outline">Contactează-ne</a>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <h2>De ce Hannelore Impex?</h2>
        <p>
          Suntem o firmă cu peste 20 de ani de experiență. Inițial activă în domeniul marmurei,
          Hannelore Impex și-a modificat profilul în timp, iar astăzi produce elemente structurale din lemn,
          acoperișuri industrializate și componente CNC cu toleranțe reduse.
        </p>
        <p>
          Lucrăm pe proiectele clienților, optimizate împreună pentru costuri reduse, montaj rapid și
          calitate structurală ridicată.
        </p>
      </section>

      <section className="home-grid">
        <div className="home-card">
          <h3>Producție CNC</h3>
          <p>
            Elemente din lemn prefabricate pe utilaje CNC. Îmbinări precise, pierderi reduse și montaj predictibil.
          </p>
        </div>

        <div className="home-card">
          <h3>Acoperișuri industrializate</h3>
          <p>
            Proiectăm și executăm sisteme de acoperiș tip fermă industrializată — greutate redusă, rigiditate excelentă.
          </p>
        </div>

        <div className="home-card">
          <h3>Structuri la roșu / gri / finisate</h3>
          <p>
            Poți alege nivelul de execuție — doar structură, pregătire pentru instalații sau livrare finalizată.
          </p>
        </div>
      </section>

      <section className="home-section">
        <h2>Lucrăm în toată țara</h2>
        <p>
          Echipele noastre sunt mobile și putem oferi proiecte în orice regiune, inclusiv extern.
          Pentru competitivitate maximă și costuri reduse de logistică, zona preferată este Câmpina și împrejurimi.
        </p>
      </section>
    </Layout>
  );
}
