export default function Hero() {
  return (
    <section className="hero">
      <div className="hero_container">
        {/*text*/}
        <div className="text">
          <div className="new_trend">
            <div className="trend"></div>New Trend
          </div>
          <h1 className="h1">
            AUTUMN SALE STYLISH
            <br />
            <span className="womens">WOMEN'S & MEN'S</span>
          </h1>
          <p className="discover">Discover More</p>
        </div>
        {/*image*/}
        <div className="hero_img">
          <img src="E_commerce_photos/woman_3.png" alt="image" />
        </div>
      </div>
    </section>
  );
}
