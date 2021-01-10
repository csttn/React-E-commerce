import React from "react";

import { Link } from "react-router-dom";

import "./menu-item.styles.scss";

const menuItem = ({ title, imageUrl, linkUrl, size }) => (
  <Link to={linkUrl} className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
    </div>
  </Link>
);

export default menuItem;
