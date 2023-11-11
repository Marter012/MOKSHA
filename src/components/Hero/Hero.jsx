import React from "react";
import { HeroContainerStyles } from "./HeroStyles";

const Hero = () => {
  return (
    <HeroContainerStyles>
      <div>
        <h2>
          Hay un dicho que dice: <br /><br /> Recordate, que el que
          pisa nuestro suelo, no se va si toma mate.
        </h2>
      </div>
      <img
        src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1696964926/Moksha/doi2tqdt6s9nz69kg6c5.jpg"
        alt=""
      />
    </HeroContainerStyles>
  );
};

export default Hero;
