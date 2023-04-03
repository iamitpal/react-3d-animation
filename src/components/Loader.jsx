import React from "react";
import AnimatedLogo from "../assets/images/logo-animated.gif";

export const Loader = () => {
  return (
    <div className="loader">
      <img src={AnimatedLogo} className="logo" alt="logo" />
    </div>
  );
};
