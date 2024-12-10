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
import pyIcon from '../assets/Images/pyicon.png'

const Skills = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="titles-style lg:mb-8">Minhas Habilidades:</h1>
      </div>

      {/* Hard Skills Section */}
      <section className="flex flex-col gap-2 mb-5">
        <h2 className="text-xl text-center mb-5 lg:text-2xl">Hard Skills</h2>

        <div className="grid grid-cols-3 items-center w-[340px] lg:grid-cols-6 lg:w-[600px] lg:gap-5">
          <article className="skill-icon-style">
            <SiJavascript className="text-6xl text-[#f9ee0a]"/>
            <p>Javascript</p>
          </article>

          <article className="skill-icon-style">
            <SiTypescript className="text-6xl text-[#1b0af9]" />
            <p>Typescript</p>
          </article>

          <article className="skill-icon-style">
            <SiHtml5 className="text-6xl text-[#ff7811]"/>
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
        <h2 className="text-xl text-center mb-5 lg:text-2xl">Soft Skills</h2>

        <ul className="flex flex-col list-disc gap-3">
          <li>
            <strong>Comunicação:</strong> Explicar ideias técnicas para colegas
            ou argumentar e opinar nas escolhas de design/estrutura do projeto.
          </li>

          <li>
            <strong>Resolução de problemas:</strong> Encontrar soluções
            criativas e eficientes para bugs e quaisquer desafios encontrados
            durante o desenvolvimento.
          </li>

          <li>
            <strong>Trabalho em equipe:</strong> Colaborar com designers,
            gerentes de produtos e outros desenvolvedores para atingir objetivos
            em comum.
          </li>

          <li>
            <strong>Gestão de tempo:</strong> Priorizar tarefas para entregar
            projetos dentro do prazo.
          </li>

          <li>
            <strong>Adaptabilidade:</strong> Aprender rapidamente uma nova
            tecnologia ou se ajustar a mudanças de requisitos em um projeto.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Skills;
