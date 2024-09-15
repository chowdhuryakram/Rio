import heroClient1 from "../images/client 1.jpg";
import heroClient2 from "../images/clients 2.jpg";
import heroClient3 from "../images/clients 3.jpg";
const Hero = () => {
  return (
    <div className="min-h-screen">
      <div className="hero bg-base-200 flex flex-row justify-center pt-16">
        <div className="hero-content text-center">
          <div className="max-w-[1020px]">
            <h1 className="text-[36px] leading-[48px] md:text-[80px] md:leading-[88px] font-bold text-[#202b38]">
              Save time & <span className="text-[#1a5eff]">work smarter</span>{" "}
              with AI Automation
            </h1>
            <p className="py-6 max-w-[600px] mx-auto text-[#414244] text-[18px] leading-[28px] font-normal">
              We help you automate your workflows, automate repetitive tasks,
              and elevate your business.
            </p>
            <button className="text-white bg-[#00e] py-3 px-4 rounded capitalize">
              Book your free audit call
            </button>
          </div>
        </div>
      </div>
      <div className="clients mt-8 justify-center flex items-center gap-5">
        <div>
          <a className="clients-img justify-center flex items-center" href="#">
            <img
              className="w-12 mr-[-20px] border border-5 border-[#00e] h-12 object-cover rounded-full"
              src={heroClient1}
              alt=""
            />
            <img
              className="w-12 border border-5 border-[#00e] mr-[-20px] h-12 object-cover rounded-full"
              src={heroClient2}
              alt=""
            />
            <img
              className="w-12 border border-5 border-[#00e] h-12 object-cover rounded-full"
              src={heroClient3}
              alt=""
            />
          </a>
        </div>
        <div className="clients-btn flex flex-col">
          <button>200+ Happy Clients</button>
          <button className="">
            Join Them Now <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <iframe
        className="w-full h-[300px] md:h-screen container rounded-3xl mt-16"
        src="https://www.youtube.com/embed/U2gWu08GwDo"
        title="Surah Al-Mulk سورة الملك | Soulful voice will touch your heart إن شاء الله | ZikarAllah TV"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Hero;
