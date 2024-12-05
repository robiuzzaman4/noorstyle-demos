import Badge from "./Badge";
import Button from "./Button";
import Container from "./Container";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden">
      <Container className="py-40 relative">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-6">
          <Badge>Modern E-commerce Template</Badge>
          <h1 className="text-3xl md:text-4xl text-center font-bold transition-transform">
            NoorStyle – Islamic Fashion E-commerce Template
          </h1>
          <p className="text-base text-gray-500">Modern, responsive e-commerce template built with React.js, Next.js, TypeScript and Tailwind CSS.</p>

          <Button>Check Demos</Button>
        </div>
        {/* gradients */}
        <div className="-z-10 absolute -top-4 -right-4 h-80 w-56 lg:h-96  rotate-45 rounded-xl bg-gradient-to-tr from-yellow-500 to-orange-800 filter blur-3xl opacity-20"></div>
        <div className="-z-10 absolute -bottom-4 -left-4 h-80 w-56 lg:h-96  rotate-45 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-800 filter blur-3xl opacity-20"></div>
      </Container>
    </section>
  );
};

export default Hero;
