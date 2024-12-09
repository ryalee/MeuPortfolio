import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xkgnagqg");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center text-center">
        <h1 className="text-lg">Obrigado pelo contato</h1>
        <p className="text-md">Faremos um ótimo trabalho juntos!</p>
        <button onClick={() => window.location.reload()} className="submit-button-style">
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(event);
      }}
      className="flex flex-col gap-2 lg:w-[700px] lg:self-center lg:items-center"
    >
      <label htmlFor="name" className="label-style">
        Seu Nome
      </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Seu nome"
        required
        className="input-style"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <label htmlFor="email" className="label-style">
        Seu Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Seu email"
        required
        className="input-style"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message " className="label-style">
        O que deseja?
      </label>
      <textarea
        rows={5}
        id="message"
        name="message"
        placeholder="Mensagem"
        required
        className="input-style"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="submit-button-style"
      >
        {state.submitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
};

export default ContactForm;
