import styles from "@styles/pages/Success.module.css";

import { motion } from "framer-motion";

export default function Success({}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.container}
    >
      <p>
        Votre message a bien été envoyé. Je vous recontacterai dès que possible.
      </p>
    </motion.div>
  );
}