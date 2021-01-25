import React from "react";

import "./styles.scss";

function CustomButtom({ children, ...props }) {
  return (
    <button className="custom-button" {...props}>
      {children}
    </button>
  );
}

export default CustomButtom;
