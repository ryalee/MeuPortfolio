const parseBoldText = (text) => {
  const parts = text.split(/(\*\*.*?\*\*)/g); // Quebra o texto nos marcadores `**` 

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) { // Remove os marcadores `**` e aplica negrito
      return (
        <strong key={index}>
          {part.replace(/\*\*/g, "")}
        </strong>
      );
    }
    return part;
  });
};

export default parseBoldText;
