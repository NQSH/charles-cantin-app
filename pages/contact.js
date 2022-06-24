import InputText from "@components/InputText";
import InputTextArea from "@components/InputTextArea";

export default function Contact({}) {
  return (
    <div style={{ flex: 1 }}>
      <h1>Contact</h1>
      <form name="contact" method="POST" data-netlify="true" action="/contact?status=success">
        <input type="hidden" name="form-name" value="contact" />
        <InputText label={`Votre nom et prénom`} name={`name`} />
        <InputText label={`Votre adresse e-mail`} name={`email`} />
        <InputTextArea label={`Votre message`} name={`message`} />
        <div>
          <button type="submit">ENVOYER</button>
        </div>
      </form>
    </div>
  );
}