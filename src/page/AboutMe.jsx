import { useViewport } from "../components/ViewPortIndictor";


const AboutMe = () => {

  const { scrollY } = useViewport();
  console.log(scrollY)
  return (
    <>
      <div className="h-[100vh] flex flex-col justify-center relative z-auto" id="About me">
        <h1 className=" absolute flex justify-self-center self-center top-14 text-center md:p-20 md:pb-10 pt-28 text-3xl sm:text-5xl font-bold text-allbg dark:text-logobg">
          About Me
        </h1>
        <div className={`transition-all duration-700 border-gray-400 dark:border-gray-200 border rounded-3xl m-5 shadow-gray-500 shadow-md p-10 flex self-center justify-self-center lg:w-[80%] ${scrollY >= 617.5999755859375 ? "motion-translate-x-in-[0%] motion-translate-y-in-[-57%] motion-opacity-in-[65%] motion-blur-in-[15px] motion-duration-[0.16s]/opacity motion-delay-[0.84s]/opacity motion-duration-[0.72s]/blur motion-delay-[0.03s]/blur": "hidden"}`}>
          <p className="dark:text-logobg text-center lg:text-lg">
            <span className="font-semibold ">
              Hello! I'm Estifanos Girma, a Front-End Web Developer passionate
              about building clean, responsive, and user-friendly applications.
            </span>
            I graduated from ALX Ethiopia in Front-End Web Development (May
            2025), gaining strong skills in HTML, CSS, Tailwind CSS, JavaScript,
            TypeScript, React.js, and React Native, completing the program with
            a final project score of 93.25%. I also hold a B.Sc. in Mechanical
            Engineering from Wolkite University (July 2024).I'm continuously
            learning and exploring new technologies to grow as a developer and
            create impactful digital experiences.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
