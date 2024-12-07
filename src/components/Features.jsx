import { FEATURES } from "../constants";
import Container from "./Container";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="py-20 scroll-mt-16" id="features">
      <Container className="grid gap-12">
        <h1 className="text-3xl md:text-4xl text-center font-semibold underline underline-offset-8 decoration-wavy decoration-orange-500">
          Core Features
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Features;
