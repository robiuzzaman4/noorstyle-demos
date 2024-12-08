import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Demos from "./components/Demos";
import Features from "./components/Features";
import Performance from "./components/Performance";
import Cta from "./components/Cta";
import Foooter from "./components/Foooter";

const App = () => {
  return (
    <main>
      <Navbar />
      <div className="min-h-[calc(100vh-56px)] mt-14">
        <Hero />
        <Demos />
        <Performance />
        <Features />
        <Cta />
      </div>
      <Foooter/>
    </main>
  );
};

export default App;
