import Container from "./Container";
import Button from "./Button";
import { Link } from "react-router";

const LINKS = [
  { label: "Home Pages", to: "/#home_pages" },
  { label: "Auth Pages", to: "/#auth_pages" },
  { label: "Other Pages", to: "/#other_pages" },
  { label: "Features", to: "/#features" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 h-16 w-full bg-white/50 backdrop-blur-2xl border-b border-b-gray-200 flex items-center z-50">
      <Container className="flex items-center justify-between gap-4">
        <Link to="/">
          <img
            src="/favicon.png"
            alt="logo"
            className="size-8 object-cover shrink-0"
          />
        </Link>
        <div className="flex items-center gap-6">
          {LINKS.map((link, index) => (
            <a key={index} href={link.to} className="text-sm font-medium text-gray-600">
              {link.label}
            </a>
          ))}
        </div>
        <Button>
          <Link href="/" target="_blank">
            Purchase Now
          </Link>
        </Button>
      </Container>
    </nav>
  );
};

export default Navbar;
