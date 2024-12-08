import { Link } from "react-router";
import Button from "./Button";
import Container from "./Container";

const Cta = () => {
  return (
    <section className="py-20 px-4">
      <Container className="bg-zinc-900 py-20 rounded-xl px-6 grid gap-12">
        <span className="flex flex-col gap-3">
          <p className="text-lg font-bold text-center text-zinc-300 uppercase">
            Get Started with <span className="text-orange-500">NoorStyle</span>
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-violet-500">
            Run Your Business Immediately.
          </h1>
          <Button className="hidden md:block w-full sm:max-w-60 mx-auto h-12">
            <Link to="https://themeforest.net/user/wenextcoder" target="_blank">
              Purchase Now
            </Link>
          </Button>
        </span>
      </Container>
    </section>
  );
};

export default Cta;
