import { FEATURES } from "../constants";
import Badge from "./Badge";
import Button from "./Button";
import Container from "./Container";
import { TextEffect } from "./TextEffect";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden bg-pattern">
      <Container className="py-40 relative grid lg:grid-cols-2 gap-12">
        <div className="w-full flex flex-col items-center lg:items-start gap-6 z-40">
          <Badge>Modern E-commerce Template</Badge>
          <TextEffect
            per="word"
            as="h3"
            preset="blur"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start"
          >
            NoorStyle – Next.js E-commerce Template
          </TextEffect>
          <p className="text-base text-zinc-500 text-center lg:text-start">
            Modern, responsive e-commerce template built with React.js, Next.js,
            TypeScript and Tailwind CSS.
          </p>

          <div className="flex items-center gap-3">
            {FEATURES.slice(0, 4).map((feature, i) => (
              <img
                key={i}
                src={feature.iconSrc}
                alt={feature.label}
                className="object-contain size-8"
              />
            ))}
          </div>

          <Button className="h-12 w-full sm:max-w-40">
            <a href="/#demo">Check Demos</a>
          </Button>
        </div>
        <div className="z-40">
          <img
            src="/thumbnail.png"
            alt="thumbnail"
            className="w-full object-cover"
          />
        </div>
        {/* gradients */}
        <div className="absolute -top-4 -right-4 h-80 w-56 lg:h-96  rotate-45 rounded-xl bg-gradient-to-tr from-yellow-500 to-orange-800 filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-4 -left-4 h-80 w-56 lg:h-96  rotate-45 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-800 filter blur-3xl opacity-20"></div>
      </Container>
    </section>
  );
};

export default Hero;
