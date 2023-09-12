export default function Project() {
  return (
    <div className="container container--project">
      <section className="project">
        <div className="title">
          <h1 className="title__header">LATEST PROJECT</h1>
          <p className="title__desc">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="content">
          <h3 className="content__title">DEVELOPING A FRAMEWORK</h3>
          <p className="content__desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            voluptatum deserunt eos nulla, non voluptates iusto velit
            consequatur voluptate ratione!
          </p>
          <ul className="content__list">
            <li className="item">
              <img className="item__img" src="images/casket.webp" alt="" />
              <div className="item__text">
                <h4>E-Commerce Ready</h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </li>
            <li className="item">
              <img className="item__img" src="images/laptop.webp" alt="" />
              <div className="item__text">
                <h4>Powerful SEO Features</h4>
                <p>Lorem ipsum dolor sit amet conse.</p>
              </div>
            </li>
            <li className="item">
              <img className="item__img" src="images/lock.webp" alt="" />
              <div className="item__text">
                <h4>Secure Encryption</h4>
                <p>Lorem ipsum dolor sit amet consectet.</p>
              </div>
            </li>
          </ul>
          <p className="content__summary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quibusdam reprehenderit a!
          </p>
          <div className="content__details" href="#latest">
            <p href="#details">View Details</p>
            <span class="material-symbols-rounded">arrow_right_alt</span>
          </div>
        </div>
      </section>
    </div>
  );
}
