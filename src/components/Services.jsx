import React from 'react'
import frontendImg from "../assets/images/front-end.png"
import backendImg from "../assets/images/backend.png"
import uiImg from "../assets/images/design.png"
import appsImg from "../assets/images/apps.png"

const Services = () => {
  return (
    <section id="services">
        <div className="container lg:pt-5">
            <div data-aos="fade-up" data-aos-duration="1300" data-aos-delay="100" className="text-center">
                <h2 className='text-white font-[900] md:text-[48px] text-[30px] mb-5'>Let's See <span className='grediant__text'>What Services</span> I Offer You ? </h2>
                <p className='lg:max-w-[805px] lg:mx-auto text-[#a3b3bc]  font-[500] md:text-[18px] text-[14px] max-w-[400px] leading-7'>My name is Sarthak, I started coding two years ago and soon landed an internship — but I quickly hit a roadblock.  I had to learn to use React.js for a project and discovered that all of the courses available taught more theory than usable, practical experience. After enduring significant trial and error and constant frustration, I finally learn the following technolgies with creating multiple projects and practices.</p>
            </div>


          <div className="flex flex-col justify-center sm:py-12">
            <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                <div className="relative text-gray-700 antialiased text-sm font-semibold">
                   
                   {/* vertical line running through the middle */}
                   <div className="hidden absolute w-1 sm:block bg-[#2190ff] h-full left-1/2 transform -translate-x-1/2">

                   </div>

                   {/* left card */}
                   <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex items-center flex-col sm:flex-row">
                        <div className="flex justify-start w-full mx-auto items-center">
                            <div className="w-full sm:w-1/2 sm:pr-8">
                             <div data-aos="fade-right" data-aos-duration="1200" className="bg-[#161B22] p-4 rounded shadow group hover:bg-gray-900  cursor-pointer ease-in duration-150">
                                <h3 className='text-white font-[800] mb-3 group-hover:text-white group-hover:font-[800] text-2xl grediant__text'>Frontend Development</h3>

                                <p className='text-[15px] font-[400] text-gray-100 group-hover:text-white group-hover:font-[400] leading-7'>Building frontend projects like landing pages static sites with React.js,Next.js, & Angular.</p>
                             </div>
                            </div>

                        </div>

                        <div className="rounded-full bg-[#2190ff] border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                            <figure>
                                <img src={frontendImg} alt="" />
                            </figure>
                        </div>
                    </div>
                   </div>


                   {/* right card */}
                   <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex items-center flex-col sm:flex-row">
                        <div className="flex justify-end w-full mx-auto items-center">
                            <div className="w-full sm:w-1/2 sm:pl-8">
                             <div data-aos="fade-left" data-aos-duration="1500" className="bg-[#161B22] p-4 rounded shadow group hover:bg-gray-900 cursor-pointer ease-in duration-150">
                                <h3 className=' grediant__text font-[800] mb-3 group-hover:text-white group-hover:font-[800] text-2xl'>Backend Development</h3>

                                <p className='text-[15px] font-[400] text-gray-100 group-hover:text-white group-hover:font-[400] leading-7'>Building E-commerce sites with the help of MERN  Technologies with like Flipkart, Amazon. etc</p>
                             </div>
                            </div>

                        </div>

                        <div className="rounded-full bg-[#2190ff] border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                            <figure>
                                <img src={backendImg} alt="" />
                            </figure>
                        </div>
                    </div>
                   </div>
                   <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex items-center flex-col sm:flex-row">
                        <div className="flex justify-start w-full mx-auto items-center">
                            <div className="w-full sm:w-1/2 sm:pr-8">
                             <div data-aos="fade-right"
                             data-aos-delay="100" data-aos-duration="1400" className="bg-[#161B22] p-4 rounded shadow group hover:bg-gray-900  cursor-pointer ease-in duration-150">
                                <h3 className=' grediant__text font-[800] mb-3 group-hover:text-white group-hover:font-[800] text-2xl'>UI/UX Designer</h3>

                                <p className='text-[15px] font-[400] text-gray-100 group-hover:text-white group-hover:font-[400] leading-7'>Making landing pages with UI/UX design. Convert figma desgin into website.</p>
                             </div>
                            </div>

                        </div>

                        <div className="rounded-full bg-[#2190ff] border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                            <figure>
                                <img src={uiImg} alt="" />
                            </figure>
                        </div>
                    </div>
                   </div>


                   {/* right card */}
                   <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex items-center flex-col sm:flex-row">
                        <div className="flex justify-end w-full mx-auto items-center">
                            <div className="w-full sm:w-1/2 sm:pl-8">
                             <div data-aos="fade-left" 
                             data-aos-delay="50"data-aos-duration="1300" className="bg-[#161B22] p-4 rounded shadow group hover:bg-gray-900 cursor-pointer ease-in duration-150">
                                <h3 className=' grediant__text font-[800] mb-3 group-hover:text-white group-hover:font-[800] text-2xl'>App Development</h3>

                                <p className='text-[15px] text-gray-100 font-[400] group-hover:text-white group-hover:font-[400] leading-7'>Building Instgram clone zomato  clone using React Native App. with figma desgin.</p>
                             </div>
                            </div>

                        </div>

                        <div className="rounded-full bg-[#2190ff] border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                            <figure>
                                <img src={appsImg} alt="" />
                            </figure>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Services