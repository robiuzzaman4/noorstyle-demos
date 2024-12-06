import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

const App = () => {
  return (
    <main>
      <Navbar />
      <div className="min-h-[calc(100vh-56px)] mt-14">
        <Hero />
        <Features />
      </div>
    </main>
  );
};

export default App;
