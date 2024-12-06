import { cn } from "../utils/cn";

const Badge = ({ children, className }) => {
  return (
    <div className={cn("rounded-full bg-orange-50 p-1.5")}>
      <div
        className={cn(
          "px-3 py-1 w-full h-full bg-white shadow border border-orange-500 text-sm font-medium rounded-full",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Badge;
