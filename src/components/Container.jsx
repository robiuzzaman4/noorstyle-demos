import React from "react";
import { cn } from "../utils/cn";

const Container = ({ children, className }) => {
  return (
    <div className={cn("w-full max-w-screen-lg mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
