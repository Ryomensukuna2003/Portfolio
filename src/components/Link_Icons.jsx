import { FaGithub,FaInstagram,FaLinkedin } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";

const Link_Icons = () => {
    return (
        <div className='flex justify-center gap-5 px-5 pt-5'>
            <a className="" href="https://www.linkedin.com/in/shivanshu-/">
                <FaLinkedin size={30} style={{ color: 'black' }} />
            </a>
            <a href="https://github.com/Ryomensukuna2003">
                <FaGithub size={30} style={{ color: 'black' }} />
            </a>
            <a href="https://www.instagram.com/mshivanshu1264/">
                <FaInstagram size={30} style={{ color: 'black' }} />
            </a>
            <a href="https://www.codechef.com/users/mshivanshu1264">
                <SiCodechef size={30} style={{ color: 'black' }} />
            </a>
        </div>
    )
}

export default Link_Icons