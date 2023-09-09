export default function Clients() {
  return (
    <div className="container">
      <section className="clients">
        <div className="title">
          <h1 className="title__header">OUR AWESOME CLIENTS</h1>
          <p className="title__desc">Lorem ipsum dolor consectetur.</p>
        </div>
        <div className="reviews">
          <div className="review review--left">
            <div className="review__img"></div>
            <div className="review__text">
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                hic. Lorem, ipsum dolor."
              </p>
              <div>- Jamie Richardson, Founder of Cocoa Media</div>
            </div>
          </div>
          <div className="review review--right">
            <div className="review__text">
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                hic. Lorem, ipsum dolor."
              </p>
              <div>- Kim Thompson Founder of Raine</div>
            </div>
            <div className="review__img"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
