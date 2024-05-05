import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[20px]",
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    teal_400: "bg-teal-400 text-white-A700",
  },
};
const sizes = {
  md: "h-[71px] pl-[25px] pr-[35px] text-xl",
  sm: "h-[30px] px-[26px] text-xs",
  xs: "h-[24px] px-1",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "teal_400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square", "circle"]),
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["teal_400"]),
};

export { Button };
