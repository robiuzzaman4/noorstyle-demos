import Badge from "./Badge";
import Button from "./Button";
import Container from "./Container";
import { TextEffect } from "./TextEffect";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden">
      <Container className="py-40 relative grid lg:grid-cols-2 gap-12">
        <div className="w-full flex flex-col items-center lg:items-start gap-6">
          <Badge>Modern E-commerce Template</Badge>
          <TextEffect
            per="word"
            as="h3"
            preset="blur"
            className="text-3xl md:text-4xl font-bold text-center lg:text-start"
          >
            NoorStyle – Next.js E-commerce Template
          </TextEffect>
          <p className="text-base text-gray-500 text-center lg:text-start">
            Modern, responsive e-commerce template built with React.js, Next.js,
            TypeScript and Tailwind CSS.
          </p>

          <Button className="h-12 w-full sm:max-w-40">
            <a href="/#home_pages">Check Demos</a>
          </Button>
        </div>
        <div>

          <img src="/thumbnail.png" alt="thumbnail" className="w-full object-cover" />
        </div>
        {/* gradients */}
        <div className="-z-10 absolute -top-4 -right-4 h-80 w-56 lg:h-96  rotate-45 rounded-xl bg-gradient-to-tr from-yellow-500 to-orange-800 filter blur-3xl opacity-20"></div>
        <div className="-z-10 absolute -bottom-4 -left-4 h-80 w-56 lg:h-96  rotate-45 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-800 filter blur-3xl opacity-20"></div>
      </Container>
    </section>
  );
};

export default Hero;
