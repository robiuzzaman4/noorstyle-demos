import { Link } from "react-router";
import Container from "./Container";

const Cta = () => {
  return (
    <section className="pt-10 pb-20">
      <Container>
        <div className="w-full bg-zinc-900 py-20 px-6 rounded-xl relative overflow-hidden">
          <span className="flex flex-col gap-6">
            <p className="text-lg font-bold text-center text-zinc-300 uppercase z-40">
              Get Started with{" "}
              <span className="text-orange-500">NoorStyle</span>
            </p>
            <h1 className="text-4xl lg:text-5xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-violet-500 z-40">
              Run Your Business Immediately.
            </h1>
            <button className="w-full sm:max-w-60 mx-auto group relative inline-flex transform items-center justify-center whitespace-nowrap text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50 h-12 rounded-full bg-orange-500 text-white shadow hover:ring-2 hover:ring-orange-500 ring-offset-zinc-900 hover:ring-offset-2 focus:ring-offset-2 overflow-hidden z-40">
              <Link
                to="https://themeforest.net/user/wenextcoder"
                target="_blank"
                className="h-full w-full flex items-center justify-center px-8 gap-1"
              >
                <p>Purchase Now</p>
                <ArrowRight
                  size={16}
                  className="group-hover:transform group-hover:translate-x-1 transition-all duration-300"
                />
              </Link>
              <div className="ease-in-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-25 transition-all duration-500 group-hover:left-[120%]"></div>
            </button>
          </span>

          <div className="absolute -top-4 -right-4 h-80 w-56 lg:h-96  rotate-45 rounded-xl bg-gradient-to-tr from-yellow-500 to-rose-500 filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-4 -left-4 h-80 w-56 lg:h-96  rotate-45 rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 filter blur-3xl opacity-20"></div>
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
