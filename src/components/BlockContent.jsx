import React from "react";
import blogContentImg from "../images/RIu7ujIfc3SKq931mOnyFqKaEaY.avif";
import blogContentImg1 from "../images/undraw_dropdown_menu_re_jqqs.svg";
import blogContentImg2 from "../images/undraw_personalization_re_grty.svg";
import blogContentImg3 from "../images/G3MEsoXQjALKfj8Ya1mIWgFMuc.avif";
import blogContentImg4 from "../images/cbIdsCeoBI32SK33j3fHyQ7Fb4.avif";

const BlockContent = () => {
  return (
    <>
      <div className="container pt-16 pb-12 flex justify-between gap-3">
        <div className=" ">
          <h2 className=" text-2xl p-1 rounded bg-white inline w-[100] text-[#1a5eff] font-medium">
            Content block
          </h2>
          <h3 className="text-[55px] leading-[62px] py-8 font-bold">
            Workflows with our AI automation{" "}
            <span className="text-[#1a5eff]">expertise</span>
          </h3>
          <p className="text-[#414244]  text-[18px] leading-[27px] font-medium">
            Revolutionize tasks, reduce errors, and boost efficiency with
            intelligent technology, streamlining operations for unparalleled
            productivity.
          </p>
          <ul className="">
            <div className="flex items-center gap-2 my-5">
              <i class="fa-solid border border-gray-500 p-1 rounded-full mr-2 fa-check"></i>
              <li className="text-[#414244] text-[18px] leading-[27px] font-medium">
                Functional sections
              </li>
            </div>
            <div className="flex items-center gap-2">
              <i class="fa-solid border border-gray-500 p-1 rounded-full mr-2 fa-check"></i>
              <li className="text-[#414244] text-[18px] leading-[27px] font-medium">
                Easy to customizes
              </li>
            </div>
          </ul>
          <button className="text-white mt-6 bg-[#00e] py-3 px-4 rounded capitalize">
            Book your free audit call
          </button>
        </div>
        <div className="">
          <img src={blogContentImg} alt="" />
        </div>
      </div>

      <div className="second-section container pt-16 pb-12 flex flex-row-reverse justify-between gap-5">
        <div className=" ml-10">
          <h2 className=" text-2xl p-1 rounded bg-white inline w-[100] text-[#1a5eff] font-medium">
            Content block
          </h2>
          <h3 className="text-[55px] leading-[62px] py-8 font-bold">
            Harnessing AI for business success
          </h3>
          <div className="">
            <a
              className="border hover:bg-[#1a5eff] hover:text-white hover:rounded p-4 flex items-center justify-between gap-2 my-5 "
              href="#"
            >
              <img className="w-16 object-cover" src={blogContentImg1} alt="" />
              <h2>Boost efficiency and cut costs with AI-powered automation</h2>
              <i class="fa-solid bg-white text-black border border-gray-500 p-2 rounded-full mr-2 fa-check"></i>
            </a>
            <a
              className="border hover:bg-[#1a5eff] hover:text-white hover:rounded p-4 flex items-center justify-between gap-2 my-5 "
              href="#"
            >
              <img className="w-16 object-cover" src={blogContentImg2} alt="" />
              <h2>Boost efficiency and cut costs with AI-powered automation</h2>
              <i class="fa-solid bg-white text-black border border-gray-500 p-2 rounded-full mr-2 fa-check"></i>
            </a>
          </div>
          <p className="text-[#414244]  text-[18px] leading-[27px] font-medium">
            “Couldn’t be happier with the work the guys from XYZ Agency did for
            us. Made sales 10x more efficient.”
          </p>
          <div className="flex items-center gap-2">
            <li className="text-[#414244] text-[18px] leading-[27px] font-medium">
              Easy to customizes
            </li>
          </div>

          <div className="client flex items-center gap-2 mt-10">
            <img
              className="w-16 h-16 rounded-full object-cover"
              src={blogContentImg3}
              alt=""
            />
            <div className="clien-content ">
              <h3 className="text-[#414244] text-[18px] leading-[27px] font-medium">
                William James
              </h3>
              <h4 className="text-[#414144] text-[16px] font-medium">
                CEO, XYZ
              </h4>
            </div>
          </div>
        </div>
        <div className="">
          <img src={blogContentImg4} alt="" />
        </div>
      </div>
    </>
  );
};

export default BlockContent;
