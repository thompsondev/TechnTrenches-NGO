import React from "react";

const sizeClasses = {
  txtClashDisplayMedium20: "font-clashdisplay font-medium",
  txtClashDisplaySemibold1176WhiteA700: "font-clashdisplay font-semibold",
  txtClashDisplayMedium32: "font-clashdisplay font-medium",
  txtGRIFTERBold40: "font-bold font-grifter",
  txtClashDisplayMedium16: "font-clashdisplay font-medium",
  txtNeueHaasDisplayMediu12: "font-neuehaasgroteskdisplaypro font-semibold",
  txtNeueHaasDisplayRoman16: "font-medium font-neuehaasgroteskdisplaypro",
  txtClashDisplayMedium1046: "font-clashdisplay font-medium",
  txtClashDisplayBold64: "font-bold font-clashdisplay",
  txtClashDisplayBold20: "font-bold font-clashdisplay",
  txtNeueHaasDisplayRoman14: "font-medium font-neuehaasgroteskdisplaypro",
  txtClashDisplayMedium1176: "font-clashdisplay font-medium",
  txtClashDisplayMedium18Black90087: "font-clashdisplay font-medium",
  txtClashDisplayBold48: "font-bold font-clashdisplay",
  txtClashDisplayMedium16Bluegray400: "font-clashdisplay font-medium",
  txtClashDisplaySemibold1176: "font-clashdisplay font-semibold",
  txtPlusJakartaSansRomanRegular10: "font-normal font-plusjakartasans",
  txtNeueHaasDisplayRoman12: "font-medium font-neuehaasgroteskdisplaypro",
  txtClashDisplayMedium18WhiteA700: "font-clashdisplay font-medium",
  txtClashDisplayMedium18BlueA200: "font-clashdisplay font-medium",
  txtClashDisplayMedium18: "font-clashdisplay font-medium",
  txtClashDisplaySemibold28WhiteA700: "font-clashdisplay font-semibold",
  txtClashDisplaySemibold18: "font-clashdisplay font-semibold",
  txtClashDisplaySemibold28: "font-clashdisplay font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
