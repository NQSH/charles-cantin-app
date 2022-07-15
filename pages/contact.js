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
          <div>
          <label>Your Name: <input type="text" name="name" /></label>
        </div>
        <div>
          <label>Your Email: <input type="email" name="email" /></label>
        </div>
        <div>
          <label>Message: <textarea name="message"></textarea></label>
        </div>
          <div>
            <button type="submit">ENVOYER</button>
          </div>
        </form>
      </div>
    </div>
  );
}