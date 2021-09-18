import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home--container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="Lenovo IdeaPad Gaming 3"
            price={699.99}
            image="https://m.media-amazon.com/images/I/71qblSCB-rL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            title="Acer Predator Helios 300"
            price={1299.99}
            image="https://m.media-amazon.com/images/I/719Hcr4vHPS._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            title="Acer Predator Helios 300"
            price={888.99}
            image="https://m.media-amazon.com/images/I/81cAVFZEj4L._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Alienware m15 R4"
            price={(3, 279.99)}
            image="https://m.media-amazon.com/images/I/71Hx1SjCFIL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            title="ASUS TUF Dash 15"
            price={949.99}
            image="https://m.media-amazon.com/images/I/81f-JgUXsoS._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            title="Acer Aspire 5"
            price={362.07}
            image="https://m.media-amazon.com/images/I/71AmKW4yuMS._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            title="Lenovo Legion 5"
            price={1049.99}
            image="https://m.media-amazon.com/images/I/71fzx0pGY5L._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Anteam 1080p Webcam"
            price={25.99}
            image="https://m.media-amazon.com/images/I/71Gb-6nihAL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
