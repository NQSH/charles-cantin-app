import styles from "@styles/components/InputTextArea.module.css";

import React from "react";

export default function InputTextArea({ label, name, defaultValue = "" }) {
  const [isFocused, isFocusedChange] = React.useState(false);
  const [value, setValue] = React.useState("");
  const ref = React.useRef(null);

  React.useEffect(() => {
    defaultValue && setValue(
    `Bonjour, \n` +
    `\n` +
    `J'aimerai prendre RDV pour la formule "${defaultValue}". \n` +
    `\n` +
    `Bien cordialement.`
    )
  }, []);

  return (
    <div className={styles.container}>
      <label
        className={styles.label}
        data-isfocused={isFocused}
        data-isempty={value === ""}
        htmlFor={name}
      >
        {label}
      </label>
      <textarea
        className={styles.input}
        name={name}
        value={value}
        onChange={event => setValue(event.target.value)}
        maxLength={500}
        onFocus={() => isFocusedChange(true)}
        onBlur={() => isFocusedChange(false)}
        ref={ref}
        required
      ></textarea>
    </div>
  );
}