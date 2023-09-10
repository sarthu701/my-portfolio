import React from "react";
import CountUp from "react-countup";

const Home = () => {
  return (
    <section className="pt-0 " id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-white font-[900] text-[1.8rem]"
            >
              Hiii There 👋
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-white font-[900] md:text-[2.8rem] text-[3rem] leading-[55px] sm:leading-[56px] mt-5"
            >
              I'm Sarthak Naikwade <br />{" "}
              <span className="grediant__text font-[900]">
                Fullstack Web Developer
              </span>{" "}
              & Designer.
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              className="flex gap-2 text-[#a3b3bc] mt-10 font-[500] text-[20px] leading-7  sm:pr-10"
            >
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              I started coding two years ago. I had to learn to use React.js for
              a project and discovered that all of the courses available...
              scroll to know more.🖱️
            </p>

            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-[#2190ff] text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i className="ri-mail-line"></i>Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-white font-[600] text-[16px] border-b border-solid border-gray-300"
              >
                See portfolio
              </a>
            </div>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-white text-[15px] font-[600]">
                Follow me:
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-white text-[15px] font-[600]"
                >
                  <i className="ri-youtube-line"></i>
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://github.com/sarthu701?tab=repositories"
                  className="text-white text-[15px] font-[600]"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#facebook"
                  className="text-white text-[15px] font-[600]"
                >
                  <i className="ri-facebook-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="#instagram"
                  className="text-white text-[15px] font-[600]"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </div>

          {/* <div className="basis-1/3 mt-10 sm:mt-0">
                    <figure className='flex items-center justify-center'>
                        <img src={heroImg} alt="" />
                    </figure>
                </div> */}

          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-white font-[700] text-[32px]">
                <CountUp start={0} end={3} duration={2} suffix="+" />
              </h2>
              <h4 className="text-white font-[600] text-[18px]">
                Years of Experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-white font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-white font-[600] text-[18px]">
                Suucess Rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-white font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="+" />
              </h2>
              <h4 className="text-white font-[600] text-[18px]">
                Happy Clients
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-white font-[700] text-[32px]">
                <CountUp start={0} end={150} duration={2} suffix="+" />
              </h2>
              <h4 className="text-white font-[600] text-[18px]">
                Projects Completed{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
