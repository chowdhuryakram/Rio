import React from "react";
import Slider from "react-infinite-logo-slider";
import fiverrimg from "../images/Fiverr-Logo-2009.png";
import sumsang from "../images/Samsung-Logo.png";
import ehayes from "../images/th.jfif";
import brownbint from "../images/browning9344.logowik.com.webp";

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
          <img src={fiverrimg} alt="fiverr" className="w-24" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={sumsang} alt="any" className="w-24" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={ehayes} alt="any" className="w-24" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={brownbint} alt="any" className="w-24" />
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default LogoSlider;
