const Deployed = () => {
    return ( 
        <>
               
                <h1 id="Projects" className=" text-center md:p-20 md:pb-10 pt-5 text-3xl sm:text-5xl font-bold text-allbg dark:text-logobg">Projects</h1>
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
                <div className="flex items-center m-2 flex-col justify-center dark:text-logobg text text-allbg ">
                    <h2 className=" font-bold text-2xl underline p-3">Fitness tracking app</h2>
                    <p className="text-center ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis excepturi ipsam exercitationem quis ullam rem. Doloribus quis, distinctio facilis commodi repudiandae nostrum praesentium esse omnis, eveniet ab eaque expedita debitis.
                    Quod neque eligendi, eveniet recusandae labore culpa consequatur minus perspiciatis, facere assumenda architecto eaque deserunt molestias vitae. Vel magni quo consectetur voluptate consequatur laboriosam impedit vitae voluptates asperiores, ex autem.
                    </p>
                </div>
            </div>
            <div className="pl-3 sm:pl-10 border-gray-400 dark:border-gray-200 border rounded-3xl m-5 shadow-gray-500 shadow-md flex flex-col-reverse sm:grid grid-cols-2 p-10 ">
                 <div className="flex items-center justify-center m-2 flex-col dark:text-logobg text text-allbg ">
                    <h2 className="font-bold text-3xl p-3 underline">Recipe shearing platform</h2>
                    <p className="text-center ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis excepturi ipsam exercitationem quis ullam rem. Doloribus quis, distinctio facilis commodi repudiandae nostrum praesentium esse omnis, eveniet ab eaque expedita debitis.
                    Quod neque eligendi, eveniet recusandae labore culpa consequatur minus perspiciatis, facere assumenda architecto eaque deserunt molestias vitae. Vel magni quo consectetur voluptate consequatur laboriosam impedit vitae voluptates asperiores, ex autem.
                    </p>
                </div>
                <div className="flex p-5 w-72 md:w-[80%] justify-center ">
                    <a href="https://recipe-sharing-platform-ruddy.vercel.app/" 
                        target="_brake"
                        >
                            <img 
                            className=" hover:scale-95 transition duration-200 rounded-3xl min-w-72"
                            src="..\..\images\deployed 2.png" alt="" />
                    </a>
                </div>
            </div>
            <div>
                
            </div>
        </>
     );
}
 
export default Deployed;