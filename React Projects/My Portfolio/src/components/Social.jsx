import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <>
      <div className="h-8 w-8 overflow-hidden flex items-center justify-center">
        <a
          href="https://github.com/TechSumit01"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform duration-300"
        >
          <FaGithub />
        </a>
      </div>

      <div className="h-8 w-8 overflow-hidden flex items-center justify-center">
        <a
          href="https://www.linkedin.com/in/sumit-chauhan-7a722432b"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform duration-300"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className="h-8 w-8 overflow-hidden flex items-center justify-center">
        <a
          href="https://wa.me/6392301170?text=Hello"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform duration-300"
        >
          <FaWhatsapp />
        </a>
      </div>
    </>
  );
};

export default Social;
