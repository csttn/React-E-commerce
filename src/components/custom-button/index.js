import React from "react";

import "./styles.scss";

function CustomButton({ children, isGoogleSignIn, inverted, ...props }) {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

export default CustomButton;
