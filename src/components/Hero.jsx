import Container from "./Container";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden">
      <Container className="py-40 relative">
        <h1 className="w-full max-w-3xl mx-auto text-3xl md:text-4xl text-center font-semibold transition-transform">
          NoorStyle – Islamic Fashion E-commerce Template
        </h1>

        <div className="absolute -top-4 -right-4 h-80 w-56 lg:h-96  rotate-45 rounded-xl bg-gradient-to-tr from-yellow-500 to-orange-800 filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-4 -left-4 h-80 w-56 lg:h-96  rotate-45 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-800 filter blur-3xl opacity-20"></div>
      </Container>
    </section>
  );
};

export default Hero;
