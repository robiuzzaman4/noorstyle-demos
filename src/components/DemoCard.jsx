import { Link } from "react-router";
import Button from "./Button";

const DemoCard = ({ item }) => {
  return (
    <div className="bg-gray-100 p-1.5 rounded-2xl group hover:bg-orange-100 group-hover:transition hover:cursor-pointer hover:shadow-xl">
      <div className="w-full h-full bg-white border border-gray-200 group-hover:border-orange-500 rounded-xl shadow hover:shadow-md flex flex-col items-start gap-6 p-6">
        <img
          src={item.imgSrc}
          alt={item.title}
          className="object-contain w-full"
        />
        <div className="w-full flex items-center justify-between">
          <p className="text-xl font-semibold text-gray-800">{item.title}</p>
          <Button>
            <Link to={item.path}>Demo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
