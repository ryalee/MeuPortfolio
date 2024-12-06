import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" className="flex flex-col">
          <h1 className="text-6xl font-BreeSerif text-blue-100 text-shadow">
            RA
          </h1>
        </a>
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

        <div>
          <button className="px-3 py-1 text-sm w-50 rounded-xl flex gap-4 items-center border-2 border-solid border-blue-600 hover:bg-blue-600 duration-300 font-semibold">
            Meu Currículo <FaDownload />{" "}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
