import React,{useRef,useEffect} from "react";
import {useNavigate} from "react-router-dom"
import resume from "../assets/images/Resume.pdf"

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const navigate = useNavigate();

  const stickyHeaderFunc = ()=>{
    window.addEventListener("scroll",()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add("sticky__header")
      }else{
        headerRef.current.classList.remove("sticky__header")
      }
    })
  }

  useEffect(()=>{
     stickyHeaderFunc()

     return window.removeEventListener("scroll",stickyHeaderFunc)
  })

  const handleClick = e=>{
    e.preventDefault()

    const targetAttr = e.target.getAttribute("href")
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      top:location - 80,
      left:0
    })
    
   
  }

  const toggleMenu = ()=> menuRef.current.classList.toggle("show__menu")

  return (
    <header ref={headerRef} className="w-full leading-[80px] h-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center ">
              S
            </span>

            <div className="leading-[20px] cursor-pointer"  onClick={()=>navigate("/")}>
                <h2 className="text-xl text-white font-[700] ">Sarthak</h2>
                <p className="text-white text-[18px] font-[500]">
                    personal
                </p>
            </div>
          </div>

           <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
                <li><a onClick={handleClick} className="text-white font-[600]" href="#about">About</a></li>
                <li><a onClick={handleClick} className="text-white font-[600]" href="#services">Services</a></li>
                <li><a onClick={handleClick} className="text-white font-[600]" href="#portfolio">Portfolio</a></li>
                <li><a onClick={handleClick} className="text-white font-[600]" href="#contact">Contact</a></li>
            </ul>
           </div>
           
           <div className="flex items-center gap-4">
            <a href={resume} download="Resume" className="flex items-center gap-2 text-white font-[600] border border-solid border-white py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-[#2190ff] hover:text-white hover:font-[500] ease-in duration-300">
            <i class="ri-download-line"></i>Resume
            </a>

            <span onClick={toggleMenu} className="text-2xl text-white cursor-pointer md:hidden">
                <i className="ri-menu-line"></i>
            </span>
           </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
