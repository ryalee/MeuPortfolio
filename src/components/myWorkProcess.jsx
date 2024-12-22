
import { useTranslation } from "react-i18next";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function StepByStep() {
  const { t } = useTranslation();

  const steps = t("WorkTimeline.steps", { returnObjects: true }); 
  const title = t("WorkTimeline.title");
  const subtitle = t("WorkTimeline.subtitle");

  return (
    <div className="-mt-[100px] lg:mt-[80px]">
      <h1 className="titles-style mt-5">{title}</h1>
      <p className="text-center -mt-5 mb-6">{subtitle}</p>

      <VerticalTimeline className="flex flex-col">
        {steps.map((step, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{ background: "#1d1d1d", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #4CAF50" }}
            iconStyle={{ background: "#4CAF50", color: "#fff" }}
            icon={
              <span className="flex items-center justify-center text-[18pt] w-[40px] h-[40px] rounded-lg lg:mt-2 lg:ml-[10px]">
                {step.icon}
              </span>
            }
          >
            <h3 className="vertical-timeline-element-title">{step.title}</h3>
            <p>{step.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
