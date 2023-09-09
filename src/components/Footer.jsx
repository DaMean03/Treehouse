export default function Footer() {
  return (
    <>
      <div className="container container--stack">
        <section className="stack">
          <img src="images/envato.webp" alt="" />
          <img src="images/wordpress.webp" alt="" />
          <img src="images/tuts.webp" alt="" />
          <img src="images/lancer.webp" alt="" />
        </section>
      </div>
      <div className="container container--footer">
        <section className="footer">
          <div className="contact_us"></div>
          <div className="latest_posts"></div>
          <div className="latest_tweets"></div>
        </section>
      </div>
      <div className="container container--copyright">
        <section className="copyright">
          <p>&copy; Copyright 2014 FreebiesXpress.com</p>
          <div className="social tweeter">
            <img src="images/tweeter.webp" alt="" />
          </div>
          <div className="social facebook">
            <img src="images/facebook.webp" alt="" />
          </div>
          <div className="social pinterest">
            <img src="images/pinterest.webp" alt="" />
          </div>
          <div className="social google">
            <img src="images/google.webp" alt="" />
          </div>
        </section>
      </div>
    </>
  );
}
