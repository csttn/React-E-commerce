import React from "react";

import MenuItem from "../menu-item/menu-item";

import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

import "./directory.styles.scss";

const Directory = ({ sections }) => {
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

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
