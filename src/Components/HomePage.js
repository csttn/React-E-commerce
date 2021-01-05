import React from "react";

import "../styles/homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Boné</h1>
          <span className="subtitle">Compre Agora</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Tênis</h1>
          <span className="subtitle">Compre Agora</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Jaquetas</h1>
          <span className="subtitle">Compre Agora</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Mulheres</h1>
          <span className="subtitle">Compre Agora</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Homens</h1>
          <span className="subtitle">Compre Agora</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
