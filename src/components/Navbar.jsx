import Container from "./Container";
import Button from "./Button";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed top-0 h-14 w-full bg-white border-b border-b-gray-200 flex items-center z-50">
      <Container className="w-full max-w-screen-lg mx-auto px-4 flex items-center justify-between gap-4">
        <Link to="/">
          <img
            src="/favicon.png"
            alt="logo"
            className="size-8 object-cover shrink-0"
          />
        </Link>
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
