import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaWhatsapp, FaTelegram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Logo from '../../assets/navbar/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img className='animate-pulse' src={Logo} alt="logo" style={{ width: '80px' }} />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="main" smooth={true} duration={500}>Главная</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>Обо мне</Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>Навыки</Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>Работы</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>Обратная связь</Link>
                </li>
            </ul>

            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <ul>
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick} to="main" smooth={true} duration={500}>Главная</Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick} to="about" smooth={true} duration={500}>Обо мне</Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Навыки</Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick} to="work" smooth={true} duration={500}>Работы</Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Обратная связь</Link>
                    </li>
                </ul>
            </div>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/entryxbad">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://t.me/Qzaur">
                            Telegram <FaTelegram size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://wa.me/79273397536">
                            WhatsApp <FaWhatsapp size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-500'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="mailto:radmir_96@mail.ru">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Navbar