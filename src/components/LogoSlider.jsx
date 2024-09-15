import React from "react";
import Slider from "react-infinite-logo-slider";

const LogoSlider = () => {
  return (
    <div className="container">
      <h2 className="text-1xl text-center text-[#57575a] py-5 font-bold">
        Trusted by 40+ worldwide clients
      </h2>
      <Slider
        width="250px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}
      >
        <Slider.Slide>
          <img
            src="/src/assets/images/Fiverr-Logo-2009.png"
            alt="any"
            className="w-24"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="/src/assets/images/samsung_logo_PNG9.png.crdownload"
            alt="any"
            className="w-24"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img src="/src/assets/images/th.jfif" alt="any" className="w-24" />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="/src/assets/images/browning9344.logowik.com.webp"
            alt="any"
            className="w-24"
          />
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default LogoSlider;
