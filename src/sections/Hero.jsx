import HeroText from "../components/HeroText";
import HeroImage from "../assets/Images/HeroImg.png";
import { useTranslation } from "react-i18next";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col gap-6 items-center">
      <div className="flex">
        <HeroText />
        <img
          src={HeroImage}
          className="hidden lg:block mt-5 w-[400px] lg:-mt-5"
        />
      </div>

      <p className="text-md lg:text-[16pt] lg:mt-10 lg:w-[700px] text-justify">
        {t("hero.main-text")}
      </p>

      <p>{t("hero.subtitle")}</p>

      <div className="flex gap-4 lg:w-[30%] flex-col ">
        <a
          href="https://wa.me/5574999944759"
          target="_blank"
          className="button-style lg:w-[45%] lg:ml-[100px]"
        >
          {t("hero.cta")}
        </a>

        <a
          href="../../public/curriculo.pdf"
          download='curriculo-ryan-alecrim-sodre.pdf'
          className="button-style flex items-center gap-2 self-center lg:w-[45%]"
        >
          {t("about.cv-text")}
          <FaDownload/>
        </a>
      </div>
    </main>
  );
};

export default Hero;
