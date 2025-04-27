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
        setImage("zigzag 1");

    } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      setImage("zigzag 3");

    }
    
    
  } , [isDark])
   
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
     <>
      <div>
        <img
          className="w-full bg-yellow-50"
          src={`/images/${img}.png`}
          alt="Zigzag"
        />
        <img
          className="w-full bg-yellow-50"
          src={`/images/zigzag 2.png`}
          alt="Zigzag"
        />
      </div>

      <button
        onClick={toggleTheme}
        className="absolute top-24 left-7 mt-2 dark:bg-yellow-50 bg-gray-900 text-white p-2 rounded-full font-bold dark:text-black flex justify-self-end "
      >
        {isDark ? "🌙" : "🌞" }
      </button>
      </>
    
  );
};

export default Theme;
