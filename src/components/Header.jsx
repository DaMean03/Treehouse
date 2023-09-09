export default function Header() {
  return (
    <div className="container">
      <header className="header">
        <div className="header__logo">
          <img src="images/logo.webp" />
        </div>
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
