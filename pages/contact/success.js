import styles from "@styles/pages/Success.module.css";

export default function Success({}) {
  return (
    <div className={styles.container}>
      <p>
        Votre message a bien été envoyé. Je vous recontacterai dès que possible.
      </p>
    </div>
  );
}