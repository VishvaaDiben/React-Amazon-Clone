import "./Home.css";

import Product from "../Product/Product";
import React from "react";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://www.mobiledekho.com/wp-content/uploads/2018/01/800x500-7-1.jpg"
        // src="https://media.cdn.gradconnection.com/Amazon_Banner_X9WSrOa.png"
        alt=""
      />

      {/* Product id, title, price, rating, image  */}
      <div className="home_row">
        <Product
          id="123"
          title="Wireless Bluetooth Speaker"
          price={10.34}
          rating={3}
          
          image="https://images-na.ssl-images-amazon.com/images/I/61WSWwdwP8L._AC_SL1400_.jpg"
        />
        <Product
          id="124"
          title="Samsung Gear S3 Frontier Smartwatch"
          price={299.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61GcJ2DDvIL._AC_SL1000_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="125"
          title="Blendtec Tota Classic"
          price={11.78}
          rating={5}
          
          image="https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SL1500_.jpg"
        />
        <Product
          id="126"
          title="Gaming Headset"
          price={18.39}
          rating={6}
          
          image="https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_SL1301_.jpg"
        />
        <Product
          id="127"
          title="Pokemon Toys"
          price={21.43}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/51z8aAu1M0L._AC_SL1000_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="321"
          title="Dust Mask"
          price={10.3}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71eHlNNMyfL._AC_SL1200_.jpg"
        />
      </div>
      {/* Product  */}
    </div>
  );
}

export default Home;
