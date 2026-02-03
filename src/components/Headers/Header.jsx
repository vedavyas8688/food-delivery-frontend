import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>
          Order your <br /> favourite food here
        </h2>
        <p>
          Choose from a wide variety of delicious meals crafted with the
          freshest ingredients <br /> and delivered straight to your door.<br />
           Fresh flavors, quality ingredients, and fast delivery <br /> to satisfy your
          cravings anytime, anywhere.
        </p>
        <button className="header-btn">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
