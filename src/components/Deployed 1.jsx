import { MdChevronLeft , MdChevronRight } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";

const Deployed = () => {
    const slidLeft = () => {
         let slider = document.getElementById('slider');
         slider.scrollLeft = slider.scrollLeft - 300;
    }
    const slidRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 300;
   }

    return ( 
        <>
               
                <h1 id="Projects" className=" text-center  md:p-20 md:pb-10 pt-28 text-3xl sm:text-5xl font-bold text-allbg dark:text-logobg">Projects</h1>
            <div className="border-gray-400 dark:border-gray-200 pl-5 sm:pl-10 border rounded-3xl m-5 shadow-gray-500 shadow-md flex flex-col sm:grid grid-cols-2 p-10  pt-5 ">
                <div className="flex p-5 pl-0 w-72 md:w-[80%] justify-center ">
                    <a href="https://fe-capstone-project-fitness-tracker-w2v9.vercel.app/"
                        target="_brake"
                    >
                            <img 
                            className=" hover:scale-95 ease-in-out transition duration-200 rounded-3xl min-w-72"
                            src="..\..\images\deployed 1.png" alt="" />
                    </a>
                </div>
                <div className="flex items-center m-2 flex-col pl-3 justify-center dark:text-logobg text text-allbg ">
                    <h2 className="text-center font-bold text-2xl underline p-3">Fitness tracking app</h2>
                    <p className="text-center "><span className="font-semibold">Get Fit!</span> is a fitness tracking web application that empowers users to log their personal workouts and discover a wide variety
                         of exercises using the Ninja API. Users can track their daily progress, monitor their fitness journey over time, and stay motivated with
                         real-time updates and a clean, user-friendly interface.</p>
                </div>
            </div>
            <div className="pl-3 sm:pl-10 border-gray-400 dark:border-gray-200 border rounded-3xl m-5 shadow-gray-500 shadow-md flex flex-col-reverse sm:grid grid-cols-2 p-10 ">
                 <div className="flex items-center justify-center m-2 flex-col dark:text-logobg pl-5 text text-allbg ">
                    <h2 className="font-bold text-2xl text-center p-3 underline">Recipe shearing platform</h2>
                    <p className="text-center ">Recipe Sharing Platform is a web application designed to showcase my skills in Tailwind CSS and React. It allows users to add and share their own recipes, including ingredients and detailed descriptions. The platform focuses on clean UI, responsive design, and smooth user interactions.


                    </p>
                </div>
                <div className="flex p-5 w-72 md:w-[80%] justify-center ">
                    <a href="https://recipe-sharing-platform-ruddy.vercel.app/" 
                        target="_brake"
                        >
                            <img 
                            className=" hover:scale-95 transition duration-200 rounded-3xl min-w-72"
                            src="\images\deployed 2.png" alt="" />
                    </a>
                </div>
            </div>
            <div className=" flex flex-col-reverse md:flex-row justify-between p-2 rounded-3xl">
               <div className="flex items-center justify-center flex-col border-gray-400 dark:border-gray-200 border rounded-3xl p-3 m-5 shadow-gray-500 shadow-md md:w-[40%] lg:w-[50%] dark:text-logobg"> 
                    <p className="text-center ">I developed multiple React applications, including a To-Do App, Weather App, GitHub User Search, and Fitness Tracker, emphasizing user 
                        interaction, responsiveness, and real-time data handling. I used libraries like Axios for API requests, Tailwind CSS for styling, Recharts for data
                         visualization, and integrated third-party APIs such as OpenWeather, GitHub, and WGER for dynamic content. You will find those and more in my Git hub repo link below.
                    </p>
                    <a href="https://github.com/Estif-Gi" target="_blank" rel="noopener noreferrer">

                    <IoLogoGithub className="text-black dark:text-gray-300 mt-10" size={50} />
                    </a>
                </div>
                <div className="flex p-2 gap-3">
                <MdChevronLeft onClick={slidLeft} className=" md:flex self-center scale-150 bg-gray-400 dark:bg-gray-200 bg-opacity-20 dark:bg-opacity-50 h-32 rounded-full hover:bg-opacity-50 dark:hover:bg-opacity-70 duration-150"/>
                <div id="slider" className=" mt-4 mb-4 relative w-full  lg:w-[650px] overflow-x-scroll scroll-smooth snap-x snap-mandatory flex justify-self-start gap-6 scrollbar-default">
                    <div className="flex w-52 md:w-80 sm:w-[250px]  p-5 h-full gap-4">
                        <img
                        src="/images/weather 2.png"
                        className=" object-cover w-[450px]  rounded-xl snap-start shrink-0 hover:opacity-85 transition duration-200 ease-in-out"
                        alt=""
                        />
                        <img
                        src="/images/form handling.png"
                        className="object-cover w-[450px] h-auto rounded-xl snap-start shrink-0 hover:opacity-85 transition duration-200 ease-in-out"
                        alt=""
                        />
                        <img
                        src="/images/to do.png"
                        className="hover:opacity-85 object-cover w-[450px] h-auto rounded-xl snap-start shrink-0  transition duration-200 ease-in-out"
                        alt=""
                        />
                        <img
                        src="/images/zustand 2.png"
                        className="hover:opacity-85 object-cover w-[450px] h-auto rounded-xl snap-start shrink-0  transition duration-200 ease-in-out"
                        alt=""
                        />
                    </div>
                 </div>
                <MdChevronRight onClick={slidRight} className=" md:flex self-center scale-150 bg-gray-400 dark:bg-gray-200 bg-opacity-20 dark:bg-opacity-50 h-32 rounded-full hover:bg-opacity-50 dark:hover:bg-opacity-70 duration-150"/>
                </div>
                

            </div>

        </>
     );
}
 
export default Deployed;