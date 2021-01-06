import React from "react";

import "./menu-item.styles.scss";

const menuItem = ({ title, imageUrl, LinkUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
    </div>
  </div>
);

export default menuItem;
