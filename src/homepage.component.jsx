import React from 'react';
import './homepage.styles.scss'

const HomePage = () => (
  <div className="home-page">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">HATS</h1>
          <span className="subtitle">SHOW NOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">JACKETS</h1>
          <span className="subtitle">SHOW NOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">SNEAKERS</h1>
          <span className="subtitle">SHOW NOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">WOMAN</h1>
          <span className="subtitle">SHOW NOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">MAN</h1>
          <span className="subtitle">SHOW NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage