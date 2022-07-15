import styles from "@styles/pages/Contact.module.css";

import InputText from "@components/InputText";
import InputTextArea from "@components/InputTextArea";

export default function Contact({}) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          Pour toutes informations complémentaires ou demandes de RDV, merci de me contacter via le formulaire ci-dessous.
        </p>
        <form
          className={styles.form}
          name="contact"
          method="POST"
          data-netlify="true"
          action="/contact?status=success"
        >
          <input type="hidden" name="form-name" value="contact" />
          <InputText label={`Votre nom et prénom`} name={`name`} />
          <InputText label={`Votre adresse e-mail`} name={`email`} />
          <InputTextArea label={`Votre message`} name={`message`} />
          <div>
            <button type="submit">ENVOYER</button>
          </div>
        </form>
      </div>
    </div>
  );
}