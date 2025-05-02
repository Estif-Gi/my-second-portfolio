import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
const Contact = () => {
    return ( 
        <>
        <div>
            <h1 id="contact" className="text-center  p-14 text-3xl sm:text-5xl font-bold text-allbg dark:text-logobg">Contacts</h1>
            <div className="pl-10 md:pl-28">
                <div className="flex items-center gap-3 p-3 ">
                    <TfiEmail size={50} color="gray"  className=''/> <a href="mailto:estifanosgirma4@gmail.com" className="dark:text-white hover:underline">: estifanosgirma4@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 p-3">
                    <IoCall size={50} color="gray"  className=''/> <a href="tel:+251931386887" className="dark:text-white hover:underline">: +251 931 386 887</a>
                </div>
                <div className="flex items-center gap-3 p-3">
                    <FaLinkedin size={50} color="gray"  className=''/><a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="dark:text-white hover:underline">: linkedin.com/in/Estifanos Girma</a>
                </div>
                <div className="flex items-center gap-3 p-3">
                    <FaTelegramPlane size={50} color="gray"  className=''/> <a href="https://t.me/E3s58f" target="_blank" rel="noopener noreferrer"  className="dark:text-white hover:underline">: https://t.me/E3s58f</a>
                </div>

            </div>

        </div>
        </>
     );
}
 
export default Contact;