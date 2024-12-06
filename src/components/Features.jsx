import Container from "./Container";

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
    <Container className="py-20 grid gap-12">
      <h1 className="text-3xl text-center font-semibold underline underline-offset-8 decoration-wavy decoration-orange-500">
        Core Features
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {FEATURES.map((feature, index) => (
          <div key={index} className="bg-gray-100 p-1.5 rounded-2xl">
            <div className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-md flex flex-col items-center gap-3 p-6">
              <img
                src={feature.iconSrc}
                alt={feature.label}
                className="object-contain size-16"
              />

              <p className="text-xl font-medium text-gray-800">
                {feature.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Features;
