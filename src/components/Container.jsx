import { cn } from "../utils/cn";

const Container = ({ children, className }) => {
  return (
    <div className={cn("w-full max-w-screen-xl mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
