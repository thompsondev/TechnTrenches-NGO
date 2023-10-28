import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  round: "rounded",
  circle: "rounded-[50%]",
};
const variants = {
  outline: {
    black_900: "border border-black-900 border-solid",
    gray_900_00_gray_900_00:
      "border-solid border-t gray_900_00_gray_900_00_border text-black-900",
    blue_A200: "border border-blue-A200 border-solid",
  },
  fill: {
    gray_50: "bg-gray-50",
    black_900: "bg-black-900 text-white-A700",
    blue_A200: "bg-blue-A200",
  },
};
const sizes = {
  xs: "p-[3px]",
  sm: "p-2.5",
  md: "p-[18px]",
  lg: "p-[35px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
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
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "black_900",
    "gray_900_00_gray_900_00",
    "blue_A200",
    "gray_50",
  ]),
};

export { Button };
