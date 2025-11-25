import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ title, children }) {
  const router = useRouter();
  const nav = [
    { href: "/", label: "Acasă" },
    { href: "/despre", label: "Despre noi" },
    { href: "/servicii", label: "Servicii" },
    { href: "/galerie", label: "Galerie" },
    { href: "/calculator", label: "Calculator preț" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <div className="root">
      <header className="hdr">
        <div className="hdr-inner">
          <div className="logo-mark">HI</div>
          <div className="logo-text">
            <div className="logo-title">Hannelore Impex</div>
            <div className="logo-subtitle">Acoperișuri industrializate • elemente CNC</div>
          </div>
          <nav className="nav">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={router.pathname === item.href ? "nav-link active" : "nav-link"}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="main">
        {title && <h1 className="page-title">{title}</h1>}
        {children}
      </main>

      <footer className="ftr">
        © {new Date().getFullYear()} Hannelore Impex • Tel: 0729007593 • Email: hanneloreimpex@gmail.com
      </footer>
    </div>
  );
}
