import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import pyIcon from "../assets/Images/pyicon.png";
import { useTranslation } from "react-i18next";
import parseBoldText from "../components/ParseBoldText";

const Skills = () => {
  const { t } = useTranslation();
  const soft_SkillsList = t("skills.soft-skills-items", {
    returnObjects: true,
  });

  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="titles-style lg:mb-8">{t("skills.title")}</h1>
      </div>

      {/* Hard Skills Section */}
      <section className="flex flex-col gap-2 mb-5">
        <h2 className="text-xl text-center mb-5 lg:text-2xl">
          {t("skills.hard_skills-title")}
        </h2>

        <div className="grid grid-cols-3 items-center w-[340px] lg:grid-cols-6 lg:w-[600px] lg:gap-5">
          <article className="skill-icon-style">
            <SiJavascript className="text-6xl text-[#f9ee0a]" />
            <p>Javascript</p>
          </article>

          <article className="skill-icon-style">
            <SiTypescript className="text-6xl text-[#1b0af9]" />
            <p>Typescript</p>
          </article>

          <article className="skill-icon-style">
            <SiHtml5 className="text-6xl text-[#ff7811]" />
            <p>HTML</p>
          </article>

          <article className="skill-icon-style">
            <SiCss3 className="text-6xl text-[#4e48ff]" />
            <p>CSS</p>
          </article>

          <article className="skill-icon-style">
            <SiTailwindcss className="text-6xl text-[#0ab1f9]" />
            <p>Tailwind</p>
          </article>

          <article className="skill-icon-style">
            <SiSass className="text-6xl text-[#f233fc]" />
            <p>SASS</p>
          </article>

          <article className="skill-icon-style">
            <SiNodedotjs className="text-6xl text-[#177d17]" />
            <p>NodeJS</p>
          </article>

          <article className="skill-icon-style">
            <SiMongodb className="text-6xl text-[#20a320]" />
            <p>MongoDB</p>
          </article>

          <article className="skill-icon-style">
            <SiGit className="text-6xl text-[#e04c1f]" />
            <p>Git</p>
          </article>

          <article className="skill-icon-style">
            <SiReact className="text-6xl text-[#0ab1f9]" />
            <p>ReactJs</p>
          </article>

          <article className="skill-icon-style">
            <img src={pyIcon} alt="icone python" className="w-[65px]" />
            <p>Python</p>
          </article>

          <article className="skill-icon-style">
            <SiReact className="text-6xl text-[#2076cb]" />
            <p>React Native</p>
          </article>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section>
        <h2 className="text-xl text-center mb-5 lg:text-2xl">
          {t("skills.soft_skills-title")}
        </h2>

        <ul className="flex flex-col list-disc gap-3">
          {soft_SkillsList.map((service, index) => (
            <li key={index}>{parseBoldText(service)}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Skills;
