import React from "react";
import Image from "next/image";
import Marketing from "../../utils/images/marketing.jpg";
import "./Divider.module.css"; 
const Divider = () => {
  return (
    <div className="divider-container">
    <Image
      className="divider-image"
      src={Marketing}
      alt="marketing"
      title="marketing"
    />
    <section className="divider-text">
      <h2 className="divider-heading">Få hjälp av proffsen!</h2>
      <p className="divider-paragraph">
        Vårt team är välutbildat och erfaret, och vi arbetar snabbt och
        effektivt för att underlätta för våra kunder under en tuff tid.
      </p>
    </section>
  </div>
  
  );
};

export default Divider;
