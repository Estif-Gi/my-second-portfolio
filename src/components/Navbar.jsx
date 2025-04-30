import { useState } from "react";
import {Link} from "react-scroll"
const Navbar = () => {

    const [menu , setMenu] = useState(false);
    // console.log(menu)
  return (
    <>
        <nav className="p-2">
        <div className="m-3 sm:m-5 h-16 flex justify-between items-center p-5 dark:bg-navbg rounded-xl shadow bg-lime-700 ">

            <h1 className="  rounded-xl pt-2 pb-2 pl-5 pr-5 dark:bg-logobg sm:text-lg md:text-2xl font-bold text-gray-900 dark:text- bg-lime-200">Est.G</h1>
            <div className="translate-x-24 hidden text-white bg-lime-700 dark:bg-navbg text-sm sm:flex md:text-xl sm:text-lg justify-between gap-3 sm:w-[50%]">
                <a  className=" dark:bg-navbg bg-lime-700 hover:text-white text-logobg transform duration-75"
                    href="#">
                    About me
                </a>
            <Link 
                className="hover:cursor-pointer dark:bg-navbg bg-lime-700 hover:text-white text-logobg transform duration-75"
                activeClass="active" 
                to="Projects" 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500} 
                spyThrottle={500}
            >
                Projects
            </Link>
                
                <a  className="bg dark:bg-navbg bg-lime-700 hover:text-white text-logobg transform duration-75"
                    href="#">
                Contact
                </a>
                <a  className="dark:bg-navbg bg-lime-700 pb-2 hover:text-white text-logobg transform duration-75"
                    href="#">
                    Blog
                </a>
            </div>
            <div>
                <button onClick={()=>{setMenu((e)=>(!e))}} className=" sm:hidden flex">
                    {!menu ? <img className=" dark:bg-navbg bg-lime-700" src="..\..\images\Hamburger.png" alt="nop" /> : <img className=" dark:bg-navbg bg-lime-700"  src="..\..\images\Chevron-up.png" alt="nop" /> }</button>
            </div>
        </div>
       
        {menu && (
          <div 
          className={` ${menu && "motion-preset-expand" || !menu && "motion-opacity-out-0"}  left-48 bg-opacity- w-32 text-center justify-self-end flex flex-col gap-2 overflow-hidden transition-all duration-500 ease-in-out p-4 m-3 mt-0.5 rounded-xl bg-lime-700 dark:bg-navbg text-white sm:hidden `}>
            <a className="dark:bg-navbg bg-lime-700" href="#">About me</a>
            <Link 
                activeClass="active" 
                className="dark:bg-navbg bg-lime-700"
                to="Projects" 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={-160}
                onClick={()=>setMenu((e)=>(!e))}

            >
                Projects
            </Link>
            <a className="dark:bg-navbg bg-lime-700" href="#">Contact</a>
            <a className="dark:bg-navbg bg-lime-700" href="#">Blog</a>
          </div>
        )}
            
        
        </nav>
    </>
  );
};

export default Navbar;
