import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="flex flex-col items-center border-t-2">
      <div className="flex justify-between w-[100%]">
        <div className="flex flex-shrink-0 items-center gap-2">
          <h1 className="text-5xl font-BreeSerif text-blue-100 text-shadow cursor-default">
            RA
          </h1>

          <p className="text-sm">{t("footer.title")}</p>
        </div>

        <div className="m-8 flex flex-col-reverse items-center justify-center gap-4 text-2xl">
          <div className="flex flex-col -ml-[25px] gap-2 lg:flex-row lg:text-2xl">
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
      </div>

      <p className="text-[8pt] pb-3 lg:text-[10pt]">{t("footer.copyright")}</p>
    </footer>
  );
};

export default Footer;
