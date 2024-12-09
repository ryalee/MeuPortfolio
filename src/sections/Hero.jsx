import HeroText from "../components/HeroText";
import HeroImage from "../assets/Images/HeroImg.png";

const Hero = () => {
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
        Como desenvolvedor web e mobile fullstack, transformo ideias em
        experiências digitais envolventes. Combinando criatividade e tecnologia,
        crio soluções que conectam pessoas ao futuro digital, sempre com foco em
        inovação e excelência. Seja para aplicativos, sites ou plataformas
        completas, estou aqui para levar seu projeto ao próximo nível.
      </p>

      <a
        href="https://wa.me/5574999944759"
        target="_blank"
        className="button-style"
      >
        Vamos conversar!
      </a>
    </main>
  );
};

export default Hero;
