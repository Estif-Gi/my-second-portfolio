import { useMemo, useState } from "react";

const Theme = () => {
  const [isDark, setIsDark] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme === "dark";
  });

  useMemo(()=>{
    if (isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
    
  } , [isDark])
   
      
    
    
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
     <>
        <button
          onClick={toggleTheme}
          className="dark:bg-yellow-50 bg-gray-900 text-white p-2 rounded-full font-bold dark:text-black flex justify-self-end "
        >
          {isDark ? "🌙 Dark Mode" : "🌞 Light Mode" }
        </button>
      </>
    
  );
};

export default Theme;
