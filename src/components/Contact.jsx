import React from 'react'

const Contact = () => {
  return (
    <section id='contact'>
        <div  data-aos="fade-up" data-aos-duration="1400"  className="container">
            <h2  className='text-white font-[800] text-center md:text-[3rem] text-[2rem] mb-8'>Want to know <span className='grediant__text'>More About Me</span>  Let's Contact😉</h2>
            <div className="md:flex justify-between items-center">
                <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60572.3760456093!2d76.5319480217618!3d18.403156744111655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83bd7132cd29%3A0x83629bac5848da3e!2sLatur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680527894492!5m2!1sen!2sin" className='border-0 w-full h-full' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
                 <form className="w-full" action='https://formspree.io/f/xayzpkqr' method='POST'>
                    <div className="mb-5">
                        <input name='Name' type="text" placeholder='Enter your name' className='w-full p-3 focus:outline-none rounded-[5px]' />
                    </div>
                    <div className="mb-5">
                        <input name='Email' type="email" placeholder='Enter your Email' className='w-full p-3 focus:outline-none rounded-[5px]' />
                    </div>
                    <div className="mb-5">
                        <input name='Subject' type="text" placeholder='Subject' className='w-full p-3 focus:outline-none rounded-[5px]' />
                    </div>
                    <div className="mb-5">
                        <textarea name='Message' type="text" 
                        rows={3}
                        placeholder='write your message' className='w-full p-3 focus:outline-none rounded-[5px]' />
                    </div>

                    <button className='w-full p-3  focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150'>Send Message</button>
                 </form>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Contact