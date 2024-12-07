import Container from "./Container";
import Button from "./Button";
import { Link } from "react-router";
import { useState } from "react";

const LINKS = [
  { label: "Demo", to: "/#demo" },
  { label: "Features", to: "/#features" },
  { label: "Support", to: "/#support" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 py-4 w-full bg-white border-b border-b-gray-200 flex items-center z-50">
      <Container className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <Link to="/">
          <img
            src="/favicon.png"
            alt="logo"
            className="size-8 object-cover shrink-0"
          />
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.to}
              className="text-sm font-medium text-gray-600"
            >
              {link.label}
            </a>
          ))}
        </div>
        <Button className="hidden md:block">
          <Link href="/" target="_blank">
            Purchase Now
          </Link>
        </Button>
        {/* toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden absolute right-4 top-5"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-align-justify"
            >
              <path d="M3 12h18" />
              <path d="M3 18h18" />
              <path d="M3 6h18" />
            </svg>
          )}
        </button>
        {/* mobile navlinks */}
        {open && (
          <div className="flex flex-col items-start gap-3 mt-6">
            {LINKS.map((link, index) => (
              <a
                key={index}
                href={link.to}
                className="text-sm font-medium text-gray-600"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
