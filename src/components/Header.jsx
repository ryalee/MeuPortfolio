import { FaGithub, FaLinkedin } from "react-icons/fa";
import LanguageSwitcher from "./LanguageChange";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-6xl font-BreeSerif text-blue-100 text-shadow cursor-default">
          RA
        </h1>
      </div>

      <div className="m-8 flex flex-col-reverse items-center justify-center gap-4 text-2xl">
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/ryan-alecrim/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.github.com/ryalee/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <LanguageSwitcher/>
    </header>
  );
};

export default Navbar;