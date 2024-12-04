import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main>
      <Navbar />
      <div className="min-h-[calc(100vh-56px)] mt-14">
        <Hero />
      </div>
    </main>
  );
};

export default App;
