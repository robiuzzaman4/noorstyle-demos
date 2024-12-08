import { Link } from "react-router";
import Container from "./Container";

const Cta = () => {
  return (
    <section className="py-20 px-4">
      <Container className="bg-zinc-900 py-20 rounded-xl px-6">
        <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <span className="flex flex-col gap-6">
            <p className="text-lg font-bold text-center md:text-start text-zinc-300 uppercase">
              Get Started with{" "}
              <span className="text-orange-500">NoorStyle</span>
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center md:text-start font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-violet-500">
              Run Your Business Immediately.
            </h1>
            <button className="group relative inline-flex transform items-center justify-center whitespace-nowrap text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50 h-12 rounded-full bg-orange-500 text-white shadow hover:ring-2 hover:ring-orange-500 ring-offset-zinc-950 hover:ring-offset-2 focus:ring-offset-2 overflow-hidden">
              <Link
                to="https://themeforest.net/user/wenextcoder"
                target="_blank"
                className="h-full w-full flex items-center justify-center px-8 gap-1"
              >
                <p>Try for free</p>
                <ArrowRight
                  size={16}
                  className="group-hover:transform group-hover:translate-x-1 transition-all duration-300"
                />
              </Link>
              <div className="ease-in-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white/50 opacity-25 transition-all duration-500 group-hover:left-[120%]"></div>
            </button>
          </span>
        </div>
      </Container>
    </section>
  );
};

export default Cta;

const ArrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-right"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
};
