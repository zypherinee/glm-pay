import React from "react";

const sizes = {
  xs: "text-xs font-light",
  lg: "text-xl font-normal",
  s: "text-sm font-normal",
  md: "text-base font-normal",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
