import React from "react";

import "./styles.scss";

function CustomButtom({ children, isGoogleSignIn, ...props }) {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...props}
    >
      {children}
    </button>
  );
}

export default CustomButtom;
