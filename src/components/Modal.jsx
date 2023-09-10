import React,{useEffect,useState} from "react";
// import portfolios from "../assets/data/portfolioData";

import { urlFor, client } from '../client';

const Modal = ({ activeID, setShowModal }) => {
  const [portfolios, setPortfolios] = useState([])


  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);



  useEffect(()=>{
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
        console.log(data);
        setPortfolios(data);
    })
  })
  return (
    <div className="w-full h-full fixed top-0 left-0 z-[100] bg-headingColor bg-opacity-40">
      <div className="w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-20 bg-[#161B22] rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          <figure>
            <img className="rounded-[8px]" src={urlFor(portfolios.image)} alt="" />
          </figure>
        </div>

        <div>
          <h2 className="text-2xl text-white font-[700] my-5">
            {portfolios.title}
          </h2>

          <p className="text-[15px] leading-7 text-[#a3b3bc]">
            {portfolios.description}
          </p>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-white text-[18px] text-[700]">
              Technologies:
            </h4>
            {portfolios.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0"
              >
                {item}
              </span>
            ))}
          </div>
          <a href={portfolios.siteUrl}>
            <button className="bg-[#2190ff] text-white py-2 px-4 mt-4 rounded-[8px] font-[500]  ease-in duration-300">
              Live Site
            </button>
          </a>
        </div>

        <button onClick={()=>setShowModal(false)} className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px]">&times;</button>
      </div>
    </div>
  );
};

export default Modal;
