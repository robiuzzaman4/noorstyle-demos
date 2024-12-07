import { DEMO_PAGES } from "../constants";
import Container from "./Container";
import DemoCard from "./DemoCard";

const Demos = () => {
  return (
    <section className="bg-white">
      <Container className="py-20">
        <div className="grid gap-12 scroll-mt-36" id="demo">
          <h1 className="text-white text-3xl text-center font-semibold">
            Demo
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEMO_PAGES.map((item, index) => (
              <DemoCard key={index} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Demos;
