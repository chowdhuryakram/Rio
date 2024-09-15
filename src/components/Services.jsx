import React from "react";
import servicImg1 from "../images/undraw_typing_re_d4sq.svg";
import servicImg2 from "../images/undraw_web_devices_re_m8sc.svg/";
import servicImg3 from "../images/undraw_dropdown_menu_re_jqqs.svg";
import servicImg4 from "../images/undraw_teamwork_hpdk.svg";

const Services = () => {
  return (
    <div className="py-10">
      <div className="text-center pt-16 pb-12 ">
        <h2 className="text-center text-2xl p-1 rounded bg-white inline w-[100] text-[#1a5eff] font-medium">
          Services
        </h2>
        <h3 className="text-[55px] leading-[62px] w-[700px] mx-auto py-8 font-bold text-center">
          <span className="text-[#1a5eff]">AI-powered</span> automation services
        </h3>
      </div>
      <div className="grid grid-cols-2  justify-between items-center gap-5 container">
        <div className="flex rounded p-5 bg-indigo-100 shadow-lg shadow-indigo-100/50 hover:-rotate-1 transition-all duration-75 flex-col items-start gap-4 ">
          <img className="w-16" src={servicImg1} alt="" />
          <h3 className="text-[25px] leading-7 text-[#202b38] font-medium">
            Customer Support Chatbots
          </h3>
          <p className="text-[#414244] w-[90%]">
            Streamline operations and enhance productivity with AI-driven
            automation.
          </p>
          <a className="font-medium text-[#00e]" href="#">
            Learn More <i class="fa-solid ml-2 fa-arrow-right"></i>
          </a>
        </div>
        <div className="flex rounded p-5 bg-indigo-100 shadow-lg shadow-indigo-100/50 hover:-rotate-1 transition-all duration-75 flex-col items-start gap-4 ">
          <img className="w-16" src={servicImg2} alt="" />
          <h3 className="text-[25px] leading-7 text-[#202b38] font-medium">
            Workflow Automations
          </h3>
          <p className="text-[#414244] w-[90%]">
            Cut down on manual labor costs through efficient and precise
            automated processes.
          </p>
          <a className="font-medium text-[#00e]" href="#">
            Learn More <i class="fa-solid ml-2 fa-arrow-right"></i>
          </a>
        </div>
        <div className="flex rounded p-5 bg-indigo-100 shadow-lg shadow-indigo-100/50 hover:-rotate-1 transition-all duration-75 flex-col items-start gap-4 ">
          <img className="w-16" src={servicImg3} alt="" />
          <h3 className="text-[25px] leading-7 text-[#202b38] font-medium">
            Chatbots for Internal Use
          </h3>
          <p className="text-[#414244] w-[90%]">
            Automate tasks to ensure your business operates seamlessly around
            the clock.
          </p>
          <a className="font-medium text-[#00e]" href="#">
            Learn More <i class="fa-solid ml-2 fa-arrow-right"></i>
          </a>
        </div>
        <div className="flex rounded p-5 bg-indigo-100 shadow-lg shadow-indigo-100/50 hover:-rotate-1 transition-all duration-75 flex-col items-start gap-4 ">
          <img className="w-16" src={servicImg4} alt="" />
          <h3 className="text-[25px] leading-7 text-[#202b38] font-medium">
            Custom GPTs
          </h3>
          <p className="text-[#414244] w-[90%]">
            Harness the power of AI for in-depth analytics and informed
            decision-making.
          </p>
          <a className="font-medium text-[#00e]" href="#">
            Learn More <i class="fa-solid ml-2 fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
