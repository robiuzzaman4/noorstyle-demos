import { cn } from "../utils/cn";

const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        "px-4 py-1.5 h-9 bg-zinc-950 text-white hover:opacity-80 text-sm font-medium rounded-full",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
