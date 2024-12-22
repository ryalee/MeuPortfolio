import HeroText from "../components/HeroText";
import HeroImage from "../assets/Images/HeroImg.png";
import { useTranslation } from "react-i18next";

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

      <a
        href="https://wa.me/5574999944759"
        target="_blank"
        className="button-style"
      >
        {t("hero.cta")}
      </a>
    </main>
  );
};

export default Hero;
