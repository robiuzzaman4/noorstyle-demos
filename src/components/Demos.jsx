import { DEMO } from "../constants";
import Container from "./Container";
import DemoCard from "./DemoCard";

const Demos = () => {
  return (
    <Container className="py-20 grid gap-12">
      <div className="grid gap-12 scroll-mt-20" id="home_pages">
        <h1 className="text-3xl text-center font-semibold underline underline-offset-8 decoration-wavy decoration-orange-500">
          Home Pages
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEMO.home_pages.map((item, index) => (
            <DemoCard key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="grid gap-12 scroll-mt-20" id="auth_pages">
        <h1 className="text-3xl text-center font-semibold underline underline-offset-8 decoration-wavy decoration-orange-500">
          Auth Pages
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEMO.auth_pages.map((item, index) => (
            <DemoCard key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="grid gap-12 scroll-mt-20" id="other_pages">
        <h1 className="text-3xl text-center font-semibold underline underline-offset-8 decoration-wavy decoration-orange-500">
          Other Pages
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEMO.other_pages.map((item, index) => (
            <DemoCard key={index} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Demos;
