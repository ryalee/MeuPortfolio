import HeroText from "../components/HeroText";
import HeroImage from "../assets/Images/HeroImg.png";

const Hero = () => {
  return (
    <main className="flex flex-col gap-6 items-center">
      <HeroText />

      <p className="text-md">
        Como desenvolvedor web e mobile fullstack, transformo ideias em
        experiências digitais envolventes. Combinando criatividade e tecnologia,
        crio soluções que conectam pessoas ao futuro digital, sempre com foco em
        inovação e excelência. Seja para aplicativos, sites ou plataformas
        completas, estou aqui para levar seu projeto ao próximo nível.
      </p>

      <a href="" target="_blank" className="button-style">
        Vamos conversar!
      </a>

      <img src={HeroImage} className="hidden lg:block mt-5" />
    </main>
  );
};

export default Hero;
