import { useTranslation } from "react-i18next";
import ptImg from "../assets/Images/brasil.png";
import engImg from "../assets/Images/eua.png";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "pt" ? "en" : "pt"; // Alterna entre pt e en
    i18n.changeLanguage(newLanguage); // Muda o idioma
    localStorage.setItem("language", newLanguage); // Salva
    window.location.reload(); // Recarrega a página para aplicar
  };

  return (
    <button onClick={toggleLanguage} className="bg-blue-800 p-2 rounded-full">
      {i18n.language === "pt" ? (
        <img src={engImg} className="logo-lang" />
      ) : (
        <img src={ptImg} className="logo-lang" />
      )}
    </button>
  );
};

export default LanguageSwitcher;
