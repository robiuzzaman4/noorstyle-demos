import Container from "./Container";
import FeatureCard from "./FeatureCard";

const FEATURES = [
  {
    label: "React.js",
    iconSrc: "/icons/react.svg",
  },
  {
    label: "Next.js",
    iconSrc: "/icons/next.svg",
  },
  {
    label: "TypeScript",
    iconSrc: "/icons/ts.svg",
  },
  {
    label: "Tailwind CSS",
    iconSrc: "/icons/tailwind.svg",
  },
  {
    label: "Shadcn UI",
    iconSrc: "/icons/shadcn.svg",
  },
  {
    label: "Lucid React Icon",
    iconSrc: "/icons/lucid.svg",
  },
  {
    label: "Contact Form",
    iconSrc: "/icons/form.svg",
  },
  {
    label: "Fully Responsive",
    iconSrc: "/icons/devices.svg",
  },
  {
    label: "Clean Code",
    iconSrc: "/icons/code.svg",
  },
  {
    label: "Well Documented",
    iconSrc: "/icons/doc.svg",
  },
  {
    label: "Google Fonts",
    iconSrc: "/icons/font.svg",
  },
  {
    label: "Google Map",
    iconSrc: "/icons/map.svg",
  },
];
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
