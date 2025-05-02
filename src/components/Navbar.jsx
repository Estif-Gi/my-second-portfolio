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
            <Link 
                className="hover:cursor-pointer dark:bg-navbg bg-lime-700 hover:text-white text-logobg transform duration-75"
                activeClass="active" 
                to="About me" 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500} 
                spyThrottle={500}
            >
                About Me
            </Link>
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
                
            <Link 
                className="hover:cursor-pointer dark:bg-navbg bg-lime-700 hover:text-white text-logobg transform duration-75"
                activeClass="active" 
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500} 
                spyThrottle={500}
            >
                Contact
            </Link>
            <Link 
                className="hover:cursor-pointer dark:bg-navbg bg-lime-700 hover:text-white text-logobg transform duration-75"
                activeClass="active" 
                to="blog" 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500} 
                spyThrottle={500}
            >
                Blog
            </Link>
            </div>
            <div>
                <button onClick={()=>{setMenu((e)=>(!e))}} className=" sm:hidden flex">
                    {!menu ? <img className=" dark:bg-navbg bg-lime-700" src="..\..\images\Hamburger.png" alt="nop" /> : <img className=" dark:bg-navbg bg-lime-700"  src="..\..\images\Chevron-up.png" alt="nop" /> }</button>
            </div>
        </div>
       
        {menu && (
          <div 
          className={`motion-preset-expand  absolute right-5 top-[90px] z-50 w-32 text-center flex flex-col gap-2 overflow-hidden transition-all duration-300 ease-in-out p-4 rounded-xl bg-lime-700 dark:bg-navbg text-white sm:hidden`}>
            <Link 
                activeClass="active" 
                className="dark:bg-navbg bg-lime-700"
                to="About me" 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={90}
                onClick={()=>setMenu((e)=>(!e))}

            >
                About Me
            </Link>
            <Link 
                activeClass="active" 
                className="dark:bg-navbg bg-lime-700"
                to="Projects" 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={90}
                onClick={()=>setMenu((e)=>(!e))}

            >
                Projects
            </Link>
            <Link 
                activeClass="active" 
                className="dark:bg-navbg bg-lime-700"
                to="contact" 
                spy={true} 
                smooth={true} 
                duration={800} 
                offset={30}
                onClick={()=>setMenu((e)=>(!e))}

            >
                Contact
            </Link>
            <Link 
                activeClass="active" 
                className="dark:bg-navbg bg-lime-700"
                to="blog" 
                spy={true} 
                smooth={true} 
                duration={800} 
                offset={0}
                onClick={()=>setMenu((e)=>(!e))}

            >
                Blog
            </Link>
          </div>
        )}
            
        
        </nav>
    </>
  );
};

export default Navbar;8