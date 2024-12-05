import { cn } from "../utils/cn";

const Badge = ({ children, className }) => {
  return (
    <div
      className={cn(
        "px-3 py-1 rounded-full bg-white border border-orange-500 shadow text-sm font-medium",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
