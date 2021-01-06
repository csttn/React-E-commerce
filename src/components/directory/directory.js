import React from "react";

import sections from "./directory.data";

import MenuItem from "../menu-item/menu-item";

import "./directory.styles.scss";

const Directory = () => {
  return (
    <div className="directory-menu">
      {sections.map((e) => (
        <MenuItem
          title={e.title}
          key={e.id}
          imageUrl={e.imageUrl}
          linkUrl={e.linkUrl}
          size={e.size}
        />
      ))}
    </div>
  );
};

export default Directory;
