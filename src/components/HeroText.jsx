import { useEffect, useState } from "react";

const HeroText = () => {
  const text = "Do conceito à execução, eu criarei o seu futuro digital!";

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
    <div className="flex items-center space-x-1 font-Code text-4xl sm:text-5xl leading-relaxed">
      <span>
        {displayedText}
        <span className="inline-block w-[1px] border-r-2 border-white animate-blink align-baseline ml-2 h-[1.2em] absolute -mt-1">
          &nbsp;
        </span>
      </span>
    </div>
  );
};

export default HeroText;
