import { motion } from "motion/react";
const FeatureCard = ({ feature }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="bg-zinc-100 p-1.5 rounded-2xl group hover:bg-orange-100 hover:shadow-xl hover:cursor-pointer"
    >
      <div className="bg-white border-2 border-zinc-200 group-hover:border-orange-500 rounded-xl shadow hover:shadow-md flex items-center gap-3 p-6">
        <img
          src={feature.iconSrc}
          alt={feature.label}
          className="object-contain size-6"
        />

        <p className="text-xl font-medium text-zinc-800">{feature.label}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
