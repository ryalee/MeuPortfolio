import { useTranslation } from "react-i18next";
import StepByStep from "../components/myWorkProcess";
import parseBoldText from "../components/ParseBoldText";

const About = () => {
  const { t } = useTranslation();
  const serviceList = t("about.list-items", { returnObjects: true });
  const diferencial = t("about.list-items2", { returnObjects: true });

  return (
    <div className="flex flex-col items-center gap-8 mt-[500px] lg:-mt-[50px] lg:flex-row text-justify lg:content-evenly">
      <div className="flex flex-col gap-10 lg:gap-20 h-[900px] -mt-[420px]">
        {/* QUEM SOU */}
        <section className="-mt-[50px] lg:-mt-[95px]">
          <h1 className="titles-style">{t("about.section-title")}</h1>

          <p className="lg:text-[16pt] lg:w-[500px]">
            {t("about.description")}
          </p>
        </section>

        {/* O QUE OFEREÇO */}
        <section className="mt-4 lg:w-[500px]">
          <h1 className="titles-style">{t("about.list-title")}</h1>

          <ul className="flex flex-col list-disc gap-3">
            {serviceList.map((service, index) => (
              <li key={index}>{parseBoldText(service)}</li>
            ))}
          </ul>
        </section>
      </div>

      <div>
        <StepByStep />

        <div className="lg:absolute lg:-ml-[500px] lg:-mt-[700px] lg:w-[500px]">
          <h3 className="titles-style mt-8">{t("about.section-title2")}</h3>

          <ul className="flex flex-col list-disc gap-3">
            {diferencial.map((service, index) => (
              <li key={index}>{parseBoldText(service)}</li>
            ))}
          </ul>

          <div className="lg:flex flex-col items-center">
            <h1 className="mt-5 mb-10 text-center lg:mb-2">
              {t("about.subtitle")}
            </h1>

            <a
              href="https://wa.me/5574999944759"
              target="_blank"
              className="button-style ml-[75px] lg:ml-[10px] md:ml-[265px]"
            >
              {t("about.CTA")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
