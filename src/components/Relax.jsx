export default function Relax() {
  return (
    <div className="container container--relax">
      <section className="relax">
        <div className="gear">
          <img src="/images/gear.webp" alt="" />
        </div>
        <div className="content">
          <h1 className="relax__title">
            JUST RELAX <span>&</span>
            <br />
            LET US DO THE HEAVY LIFTING
          </h1>
          <p className="relax__desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis rem
            accusantium modi fuga numquam quam.
          </p>
          <ul className="relax__list">
            <li className="relax__list__item">Inital Setup & Customizations</li>
            <li className="relax__list__item">Regular Updates</li>
            <li className="relax__list__item">Round the Clock Support</li>
          </ul>
          <button className="relax__btn">LEARN MORE</button>
        </div>
      </section>
    </div>
  );
}
