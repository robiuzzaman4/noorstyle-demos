import React from "react";
import Container from "./Container";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 h-14 w-full border-b border-b-gray-200 flex items-center">
      <Container className="w-full max-w-screen-lg mx-auto px-4 flex items-center justify-between gap-4">
        <img
          src="/favicon.png"
          alt="logo"
          className="size-8 object-cover shrink-0"
        />
        <Button>
          <a href="/" target="_blank">Purchase Now</a>
        </Button>
      </Container>
    </nav>
  );
};

export default Navbar;
