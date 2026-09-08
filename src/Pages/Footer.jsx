import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/LogoDark.png'
import { FaMapMarkerAlt, FaYoutubeSquare } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FiSearch, FiPlus, FiMail } from 'react-icons/fi'
import { FaHome, FaUser, FaSearch, FaPhoneAlt } from 'react-icons/fa'
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'

const Footer = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // wire to your /api/subscribe endpoint here
        console.log('Subscribing:', email)
    }  
  return (
    <>
      <footer className="bg-primary-600 mt-28 text-gray-500 py-8  md:paddingLeftRight pt-12">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6  md:text-xl sm:text-2xl  font-semibold text-left!">
                  {/* <!-- Footer Left: Logo and Description --> */}
                <div className="col-span-1 md:col-span-full text-left! lg:col-span-2">
                        {/* <!-- Logo --> */}
                    <div className="shrink-0 text-primary-50 font-bold text-2xl ">
                        <Link to="/">
                        <img src={image} alt="Logo" className="h-20 " />
                        </Link>
                    </div>
                      <p className="mt-2  text-2xl font-semibold text-left pb-4 w-4/5">
                          Empowering communities and Children through education, healthcare, and sustainable development worldwide.
                      </p>
                    {/* <div className="mt-4 space-y-5 text-left">
                        <a href="tel:+2341234567890" className="hover:text-gray-300 transition ">
                            <FaPhoneAlt className="inline mr-3" />
                                (234) 123-456-7890
                        </a><br /><br />
                        <a href="mailto:info@hirehub.com" className="hover:text-gray-300 transition ">
                            <FaEnvelope className="inline mr-3" />
                            info@hirehub.com
                        </a> <br /><br />
                        <a href="https://www.google.com/maps/place/HireHub" className="hover:text-gray-300 transition ">
                            <FaMapMarkerAlt className="inline mr-3" />
                            123 Job Street, Career City
                        </a>
                    </div> */}
  
                    <div>
                        
                        <div className="mt-8 flex flex-wrap md:flex-nowrap gap-6 pt-2.5 mb-14">
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="rounded-xl bg-[#1f2937]   p-2 hover:text-primary-400 transition text-gray-500 hover:scale-110 transform duration-200">
                                <FaInstagram size={35} />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="rounded-xl bg-[#1f2937]  p-2 hover:text-primary-400 transition text-gray-500 hover:scale-110 transform duration-200">
                                <FaFacebook size={35} />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="rounded-xl bg-[#1f2937]  p-2 hover:text-primary-400 transition text-gray-500 hover:scale-110 transform duration-200">
                                <FaTwitter size={35} />
                            </a>
                            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="rounded-xl bg-[#1f2937]  p-2 hover:text-primary-400 transition text-gray-500 hover:scale-110 transform duration-200">
                                <FaYoutubeSquare size={35} />
                            </a>
                            {/* <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-xl bg-[#1f2937]  p-2 hover:text-primary-400 transition text-gray-500 hover:scale-110 transform duration-200">
                                <FaLinkedin size={35} />
                            </a> */}
                        </div>
                        {/* <p className="mt-4 text-sm">Email: support@LemonDay.com</p> */}
                    </div>
                </div>

                <div className="md:col-span-full lg:col-span-2 text-left! grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3  justify-center   md:gap-4 gap-2 text-nowrap ">
                  <div className="md:p-5  ">
                      <h3 className="text-lg md:text-base font-bold text-primary-400 uppercase">For Job Seekers</h3>
                      <ul className="mt-4 space-y-2">
                          <li><Link to="/#hero" className=" hover:text-gray-300 transition">Browse Jobs</Link></li>
                          <li><Link to="/About#about" className=" hover:text-gray-300 transition">Companies</Link></li>
                          <li><Link to="/About#shop" className=" hover:text-gray-300 transition">Career Tips</Link></li>
                          <li><Link to="/Menu" className=" hover:text-gray-300 transition">Salary Guide</Link></li>
                          
                      </ul>
                  </div>
                  <div className="md:p-5">
                      <h3 className="text-lg md:text-base font-bold text-primary-400 uppercase">For Employers</h3>
                      <ul className="mt-4 space-y-2">
                          <li><Link to="/#hero" className=" hover:text-gray-300 transition">Post a Job</Link></li>
                          <li><Link to="/About#about" className=" hover:text-gray-300 transition">Pricing</Link></li>
                          <li><Link to="/About#shop" className=" hover:text-gray-300 transition">For Employers</Link></li>
                          <li><Link to="/Menu" className=" hover:text-gray-300 transition">High Resources</Link></li>
                         
                      </ul>
                  </div>
                  <div className="md:p-5">
                      <h3 className="text-lg md:text-base font-bold text-primary-400 uppercase">Resources</h3>
                      <ul className="mt-4 space-y-2">
                          <li><Link to="/#hero" className=" hover:text-gray-300 transition">Blog</Link></li>
                          <li><Link to="/About#about" className=" hover:text-gray-300 transition">About Us</Link></li>
                          <li><Link to="/About#shop" className=" hover:text-gray-300 transition">Features</Link></li>
                          <li><Link to="/Menu" className=" hover:text-gray-300 transition">Style Guide</Link></li>

                      </ul>
                  </div>


                </div>  {/* <!-- Footer Center: Useful Links --> */}
                <form
                    onSubmit={handleSubmit}
                    className="lg:col-span-2 md:col-span-full flex flex-col justify-start items-center md:p-5  gap-3  mx-auto mb-5 md:gap-6   "
                    >
                    <h3 className="text-lg md:text-base font-bold text-primary-400 uppercase">Stay Updated</h3>
                    <p className=" hover:text-gray-300 transition">Get updates on our programs and the communities we serve.</p>       
                    <div className=" flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-3">
                        <FiMail className="text-gray-500 shrink-0" size={30} />
                        <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent outline-none text-xl text-gray-200 placeholder:text-gray-500"
                        />
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-6 py-3 bg-primary-50 text-white font-semibold rounded-full hover:opacity-90 transition-all whitespace-nowrap text-xl"
                        >
                            Subscribe
                        </button>                        
                    </div>


                </form>



                
            </div>

              {/* <!-- Footer Bottom: Copyright --> */}
              <div className="mt-8 border-t border-gray-700 pt-4 text-center  text-xl font-semibold text-gray-500 flex justify-between flex-wrap-reverse items-center  gap-4 mb-8">
                  <p>© 2026 VicRuro React Project.</p>
                  <div>
                    <ul className="mt-4 space-y-2 flex flex-wrap justify-center gap-6 text-xl font-semibold text-gray-500">
                          <li><Link to="/#hero" className=" hover:text-gray-300 transition">Privacy Policy</Link></li>
                          <li><Link to="/About#about" className=" hover:text-gray-300 transition">Terms of Service</Link></li>
                          <li><Link to="/About#shop" className=" hover:text-gray-300 transition">Style Guide</Link></li>


                    </ul>
                  </div>
              </div>
          </div>
      </footer>
    </>
  )
}

export default Footer