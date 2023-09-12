import { useState, useEffect } from "react";

export default function Header() {
  const handleChange = () => {
    let navbar = document.querySelector(".header__navbar");
    if (navbar.style.display === "none") {
      navbar.style.display = "flex";
    } else {
      navbar.style.display = "none";
    }
  };

  useEffect(() => {
    if (window.outerWidth > 950) {
      window.addEventListener("scroll", () => {
        let header = document.querySelector(".header");
        let home = document.querySelector(".home");
        if (window.scrollY > 100) {
          header.style.padding = "10px 0";
          home.style.margin = "50px 0 0 0";
        } else {
          header.style.padding = "50px 0";
          home.style.margin = "130px 0 0 0";
        }
      });
    }
  }, []);

  return (
    <div className="container container--header">
      <header className="header">
        <div className="header__logo">
          <img src="images/logo.webp" />
        </div>
        <span
          class="material-symbols-rounded mobile-menu"
          onClick={handleChange}
        >
          menu
        </span>
        <div className="header__navbar">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#blog">BLOG</a>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="#contact">CONTACT</a>
        </div>
      </header>
    </div>
  );
}
