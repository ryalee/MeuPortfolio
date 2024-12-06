const About = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* QUEM SOU */}
      <section>
        <h1 className="text-2xl mb-5 text-center">Quem sou?</h1>

        <p>
          Sou desenvolvedor web e mobile com experiência em criação de sites,
          apps e landing pages focadas em resultados, otimizadas para atrair e
          converter visitantes em clientes. Minha paixão por tudo isso me levou
          a trabalhar com o objetivo de ajudar a estabelecer uma presença online
          marcante.
        </p>
      </section>

      {/* OQ OFEREÇO? */}
      <section className="items-center">
        <h1 className="text-2xl mb-5 text-center">Aqui estão os serviços que ofereço para o seu projeto:</h1>

        <ul className="flex flex-col list-disc gap-3">
          <li>
            Design Responsivo: Sua landing page será 100% responsiva,
            funcionando perfeitamente em dispositivos móveis, tablets e
            desktops.
          </li>
          <li>
            Desempenho e Velocidade: Código otimizado para garantir carregamento
            rápido, proporcionando uma experiência fluida para os usuários.
          </li>
          <li>
            SEO On-Page: Configuração de tags e práticas recomendadas para
            melhorar a visibilidade nos motores de busca.
          </li>
          <li>
            Integração com Ferramentas de Marketing: Como formulários de captura
            de leads, Google Analytics, e-mail marketing, entre outras.
          </li>
          <li>
            Foco na Conversão: Design com chamadas para ação (CTA) estratégicas
            e psicologia de cores para aumentar a conversão.
          </li>
        </ul>

        <h1 className="mt-5 mb-10 text-center">Vamos trabalhar juntos e fazer acontecer!</h1>

        <a href="" className="button-style mt-8 ml-[83px]">Vamos Conversar!</a>
      </section>
    </div>
  );
};

export default About;