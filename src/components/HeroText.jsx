import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const HeroText = () => {
  const { t } = useTranslation();
  const text = t("hero.title");

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 15);

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="flex items-center space-x-1 font-Code text-4xl sm:text-6xl leading-relaxed lg:w-[600px] lg:-mt-10">
      <span>
        {displayedText}
        <span className="inline-block w-[1px] border-r-2 border-white animate-blink align-baseline ml-2 h-[1.1em] absolute mt-2">
          &nbsp;
        </span>
      </span>
    </div>
  );
};

export default HeroText;
