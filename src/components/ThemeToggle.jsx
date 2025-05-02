import { useEffect, useMemo, useState } from "react";

const Theme = () => {
  const [isDark, setIsDark] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme === "dark";
  });
  const [img, setImage] = useState("");
  
  useMemo(()=>{
    if (isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setImage("dark");

    } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setImage("light");

    }
    
    
  } , [isDark])
   
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
     <>
      <div>
        <div className="hidden  md:flex justify-center">

        <img src="../../images/down icon.png" 
              className="w-28 -translate-y-12 motion-preset-oscillate motion-duration-1500" 
              alt="down" />
        </div>
        <img
          className="w-full bg-yellow-50 translate-y-12"
          src={`/images/${img}.png`}
          alt="Zigzag"
        />
        {/* <img
          className="w-full bg-yellow-50"
          src={`/images/Group 6 (6).png`}
          alt="Zigzag"
        /> */}
      </div>
      


      <button
        onClick={toggleTheme}
        className="motion-preset-oscillate motion-duration-2000 fixed motion-preset-pop top-24 left-7 mt-2 md:text-2xl md:w-12 text-md w-10  dark:bg-yellow-50 bg-allbg text-white p-2 rounded-full font-bold dark:text-black flex justify-center "
      >
        {isDark ? "✹" : "☽" }
      </button>
      </>
    
  );
};

export default Theme;
