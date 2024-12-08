import AnimatedCounter from "./AnimatedCounter";
import Container from "./Container";

const PERFORMANCE = [
  {
    label: "Performance",
    value: "90",
  },
  {
    label: "Page SEO",
    value: "91",
  },
  {
    label: "Best Practices",
    value: "96",
  },
  {
    label: "Accessibility",
    value: "81",
  },
];

const Performance = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="bg-zinc-900 py-20 rounded-xl px-6 grid gap-12">
          <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-4xl mx-auto">
            <img
              src="/speed.png"
              alt="speed"
              className="object-contain size-60 mx-auto"
            />

            <span className="grid gap-3 w-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-center md:text-start font-semibold text-white">
                Wonderful Performance
              </h1>
              <p className="text-lg text-center md:text-start font-medium text-zinc-400">
                Website speed makes a great first impression. It makes a big
                difference! It impacts user experience, search rankings, and
                even sales and conversions.
              </p>
            </span>
          </div>
          <div className="w-full max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERFORMANCE.map((item, i) => (
              <div
                key={i}
                className="bg-zinc-800 p-6 rounded-lg shadow flex flex-col gap-3"
              >
                <AnimatedCounter from={0} to={Number(item.value)} />
                <h2 className="text-center text-2xl font-semibold text-zinc-300">
                  {item.label}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Performance;
