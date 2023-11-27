import React from 'react'
import { logo } from '../../assets'
import {FaFacebookF,FaDribbble,FaLinkedinIn,FaInstagram,FaBehance} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-black py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0'>
            
            <div className='col-span-2'>
                <img src={logo} className="h-[25px]" />
                <h3 className='text-2xl font-bold mt-10'>Contact Us</h3>
                <h3 className='py-2 text-[#a6abaf]'>Call : +123 400 123</h3>
                <h3 className='py-2 text-[#d7d9dc]'>Praesent nulla massa, hendrerit <br></br> vestibulum gravida in, feugiat auctor felis.</h3>
                <h3 className='py-2 text-[#d7d9dc]'>Email: example@mail.com</h3>
                <div className='flex gap-4 py-4'>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaFacebookF size={25} style={{color:'#4DC39E'}} /></div>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaDribbble size={25} style={{color:'#4DC39E'}} /></div>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaLinkedinIn size={25} style={{color:'#4DC39E'}} /></div>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaInstagram size={25} style={{color:'#4DC39E'}} /></div>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaBehance size={25} style={{color:'#4DC39E'}} /></div>

                </div>

            </div>

            <div>
                <h3 className='text-2xl font-bold'>Explore</h3>
                <ul className='py-6 text-[#aaabac]'>
                    <li className='py-2 hover:text-[#4DC39E] cursor-pointer'>Home</li>
                    <li className='py-2 hover:text-[#4DC39E] cursor-pointer'>About</li>
                    <li className='py-2 hover:text-[#4DC39E] cursor-pointer'>Course</li>
                    <li className='py-2 hover:text-[#4DC39E] cursor-pointer'>Blog</li>
                    <li className='py-2 hover:text-[#4DC39E] cursor-pointer'>Contact</li>

                </ul>
            </div>

            <div>
                <h3 className='text-2xl font-bold'>Category</h3>
                <ul className='py-6 text-[#aaabac]'>
                    <li className='py-2 hover:text-[#4DC39E] cursor-pointer'>Design</li>
                    <li className='py-2 hover:text-[#4DC39E] cursor-pointer'>Development</li>
                    <li className='py-2 hover:text-[#4DC39E] cursor-pointer'>Marketing</li>
                    <li className='py-2 hover:text-[#4DC39E] cursor-pointer'>Business</li>
                    <li className='py-2 hover:text-[#4DC39E] cursor-pointer'>Lifestyle</li>
                    <li className='py-2 hover:text-[#4DC39E] cursor-pointer'>Photography</li>
                    <li className='py-2 hover:text-[#4DC39E] cursor-pointer'>Music</li>

                </ul>
            </div>

            <div className='max-[780px]:col-span-2'>
                <h3 className='text-2xl font-bold'>Subscribe</h3>
                <h3 className='py-2 text-[#c1c3c5]'>Praesent nulla massa, hendrerit <br></br> vestibulum gravida in, feugiat auctor felis.</h3>
                <form className='py-4'>
                    <input 
                        className='bg-gray p-4 w-full rounded' 
                        placeholder='Email here' 
                    />
                    <button className='max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#20B486] text-white font-medium'>Subscribe Now</button>

                </form>


            </div>
        
        </div>
    </div>
  )
}

export default Footer