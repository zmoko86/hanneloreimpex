import Layout from "../components/Layout";

export default function ServiciiPage() {
  return (
    <Layout title="Serviciile noastre">
      <section className="serv-block">
        <h2>Consultanță tehnică și optimizare proiect</h2>
        <p>
          Pornim de la proiectul clientului sau de la schița inițială. Analizăm
          împreună detaliile structurale pentru a optimiza consumul de material,
          tipul de îmbinări și tehnologia de producție, astfel încât lucrarea
          să fie eficientă ca preț și ușor de montat pe șantier.
        </p>
        <ul>
          <li>Adaptare proiect pe sistem framing sau panouri industrializate</li>
          <li>Reducerea costurilor — fără compromis la rezistență</li>
          <li>Optimizarea elementelor pentru producție CNC</li>
          <li>Analiza fazelor de montaj pe șantier</li>
        </ul>
      </section>

      <section className="serv-grid">
        <div className="serv-card">
          <h3>1. Structură la Roșu</h3>
          <p>
            Executăm pereți portanți framing, planșee și acoperiș
            industrializat. Elemente prefabricate CNC pentru montaj rapid și
            toleranțe reduse.
          </p>
          <ul>
            <li>Pereți și planșee gata de montaj</li>
            <li>Fermă/acoperiș industrializat</li>
            <li>Pregătire pentru instalații</li>
          </ul>
          <p className="note">
            Exemplu: o casă de ~100 m² poate ajunge la roșu în aprox. 30 zile
            (în funcție de locație și complexitate).
          </p>
        </div>

        <div className="serv-card">
          <h3>2. Structură la Gri</h3>
          <p>
            Pereți izolați, închideri exterioare și pregătiri pentru utilități.
            În mare parte, structura este gata pentru finisaje.
          </p>
          <ul>
            <li>Izolație pereți / planșee</li>
            <li>Sistem exterior adecvat</li>
            <li>Structuri suplimentare CNC</li>
          </ul>
        </div>

        <div className="serv-card">
          <h3>3. Structură Finisată</h3>
          <p>
            Pentru proiectele complete, oferim livrare finalizată, la cheie,
            conform cerințelor clientului și materialelor alese.
          </p>
          <ul>
            <li>Etape integrate — de la structură la finisaje</li>
            <li>Materiale conform specificației</li>
            <li>Termene realiste, comunicare directă</li>
          </ul>
        </div>
      </section>

      <section className="serv-block">
        <h2>Producție industrializată cu CNC</h2>
        <p>
          Elementele structurale sunt realizate în atelierul nostru din Câmpina,
          Str. În Luncă nr. 2, pe utilaje CNC. Obținem toleranțe mici, îmbinări
          precise și montaj mult mai rapid pe șantier.
        </p>
        <ul>
          <li>Componente la dimensiune exactă</li>
          <li>Minimizarea pierderilor de material</li>
          <li>Îmbinări curate, repetabile</li>
          <li>Montaj predictibil, fără surprize</li>
        </ul>
      </section>

      <section className="serv-block">
        <h2>Zona de lucru</h2>
        <p>
          Lucrăm în toată țara și extern. Pentru proiectele mari, locațiile cât
          mai apropiate de atelierul nostru sunt mai competitive datorită
          costurilor reduse de transport și logistică.
        </p>
      </section>

      <section className="serv-block">
        <h2>Garanții</h2>
        <ul>
          <li><strong>10 ani garanție la manoperă</strong></li>
          <li>Garanții materiale conform furnizorilor individuali</li>
          <li>
            Transparență totală — vă putem pune în contact cu clienții noștri
            anteriori
          </li>
        </ul>
      </section>
    </Layout>
  );
}
