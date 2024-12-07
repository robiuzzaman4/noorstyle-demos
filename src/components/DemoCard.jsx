import { Link } from "react-router";
import Button from "./Button";
import { motion } from "motion/react";

const DemoCard = ({ item }) => {
  const handleVisitDemo = () => {
    window.open(item.path, "_blank");
    return false;
  };
  return (
    <motion.div
      onClick={handleVisitDemo}
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
      className="bg-zinc-100 p-1.5 rounded-2xl group hover:bg-orange-100 group-hover:transition hover:cursor-pointer shadow-lg hover:shadow-xl"
    >
      <div className="w-full h-full bg-white border-2 border-zinc-200 group-hover:border-orange-500 rounded-xl shadow hover:shadow-md flex flex-col items-start gap-6 p-6">
        <img
          src={item.imgSrc}
          alt={item.title}
          className="object-contain w-full"
        />
        <div className="w-full flex items-center justify-between">
          <p className="text-xl font-semibold text-zinc-800">{item.title}</p>
          <Button>
            <Link to={item.path} target="_blank">
              Demo
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default DemoCard;
