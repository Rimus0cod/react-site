import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import logo from "../components/logo.webp";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <Link to="/">
            <span className="site-title">Wabi & Sabi</span>
          </Link>
          <Link to="/catalog">Каталог</Link>
          <Link to="/search">
            <i className="bx bx-search"></i> Поиск
          </Link>
        </div>
      </nav>
      <nav className="navbar">
        <Link to="/tops">Топы</Link>
        <Link to="/bookmarks">Закладки</Link>
        <Link to="/register">User</Link>
      </nav>
    </header>
  );
};

export default Header;
