import { useState } from "react";
const Navbar = () => {

    const [menu , setMenu] = useState(false);
    // console.log(menu)
  return (
    <>
        <nav className="p-2">
        <div className="m-3 sm:m-5 h-16 flex justify-between items-center p-4 dark:bg-navbg rounded-xl shadow bg-lime-700 ">

            <h1 className=" border-2 p-1 rounded-xl pl-3 pr-3 dark:bg-logobg sm:text-lg md:text-2xl font-bold text-gray-900 dark:text- bg-lime-200">Est.G</h1>
            <div className=" hidden text-white bg-lime-700 dark:bg-navbg text-sm sm:flex md:text-xl sm:text-lg justify-between gap-3 sm:w-[50%]">
                <a  className="bg-opacity-0 dark:bg-navbg  "
                    href="#">
                    About me
                </a>
                <a  className="bg-opacity-0 dark:bg-navbg "
                    href="#">
                    Projects
                </a>
                <a  className="bg-opacity-0 dark:bg-navbg "
                    href="#">
                Contact
                </a>
                <a  className="bg-opacity-0 dark:bg-navbg "
                    href="#">
                    Blog
                </a>
            </div>
            <div>
                <button onClick={()=>{setMenu((e)=>(!e))}} className=" sm:hidden flex">{!menu ? <img className=" dark:bg-navbg hover:scale-105 active:scale-95" src="..\..\images\Hamburger.png" alt="nop" /> : <img className=" dark:bg-navbg hover:scale-105 active:scale-90"  src="..\..\images\Chevron-up.png" alt="nop" /> }</button>
            </div>
        </div>
       
        {menu && (
          <div 
          className={`  w-32 text-center justify-self-end flex flex-col gap-2 overflow-hidden transition-all duration-500 ease-in-out p-4 m-3 mt-0.5 rounded-xl bg-lime-700 dark:bg-navbg text-white sm:hidden `}>
            <a className="dark:bg-navbg rounded-xl hover:border-b-4" href="#">About me</a>
            <a className="dark:bg-navbg rounded-xl hover:border-b-4" href="#">Projects</a>
            <a className="dark:bg-navbg   rounded-xl hover:border-b-4" href="#">Contact</a>
            <a className="dark:bg-navbg rounded-b-xl hover:border-b-4" href="#">Blog</a>
          </div>
        )}
            
        
        </nav>
    </>
  );
};

export default Navbar;
