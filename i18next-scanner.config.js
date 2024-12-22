// /* eslint-disable no-undef */
module.exports = {
  input: [
    "src/**/*.{js,jsx}", //caminho para buscar texto
  ],
  output: "./public/locales/{{lng}}/{{ns}}.json",
  options: {
    lngs: ["en", "pt"],
    defaultLng: "pt",
    ns: ["translation"],
    defaultNs: "translation",
    resource: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
      savePath: "./public/locales/{{lng}}/{{ns}}.json",
    },
    keySeparator: false,
    nsSeparator: false,
  },
};
