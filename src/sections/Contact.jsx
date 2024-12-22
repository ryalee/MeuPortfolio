import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xkgnagqg");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center text-center">
        <h1 className="text-lg">{t("contact.title")}</h1>
        <p className="text-md">{t("contact.subtitle")}</p>
        <button
          onClick={() => window.location.reload()}
          className="submit-button-style"
        >
          {t("contact.sendAnotherMessage")}
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
        {t("contact.form.nameLabel")}
      </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder={t("contact.form.namePlaceholder")}
        required
        className="input-style"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <label htmlFor="email" className="label-style">
        {t("contact.form.emailLabel")}
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder={t("contact.form.emailPlaceholder")}
        required
        className="input-style"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message " className="label-style">
        {t("contact.form.messageLabel")}
      </label>
      <textarea
        rows={5}
        id="message"
        name="message"
        placeholder={t("contact.form.messagePlaceholder")}
        required
        className="input-style"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="submit-button-style"
      >
        {state.submitting ? t("contact.form.sendingButton")  : t("contact.form.submitButton")}
      </button>
    </form>
  );
};

export default ContactForm;
