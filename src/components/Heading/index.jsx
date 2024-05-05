import React from "react";

const sizes = {
  s: "text-xl font-bold",
  md: "text-[55px] font-bold md:text-[47px] sm:text-[41px]",
  xs: "text-lg font-bold",
  lg: "text-[70px] font-bold md:text-5xl",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
