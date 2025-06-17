

const Home = () => {


    return ( 
        <>
        <div className="sm:flex justify-self-center md:gap-24 lg:gap-72 p-4">
            <img className=" motion-preset-slide-right motion-duration-2000 w-52 rounded-full sm:w-96 ml-4 flex justify-self-center" src="\images\profile-2.jpg" alt="profile"/>
            <p className="pb-5 motion-preset-slide-left motion-duration-2000 text-lime-400  dark:text-tx text-3xl mt-4 sm:text-5xl font-bold text-center flex self-end flex-col ">
                Hi i’m <br/>
                <span className=" text-gray-500 dark:text-white p-2">ESTIFANOS GIRMA</span>
                i’m a UI/UX designer  
            </p>
        </div>
        </>
      );
}
 
export default Home;