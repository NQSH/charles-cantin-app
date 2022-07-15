import styles from "@styles/components/InputTextArea.module.css";

import React from "react";

export default function InputTextArea({ label, name }) {
  const [isFocused, isFocusedChange] = React.useState(false);
  const ref = React.useRef(null);

  return (
    <div className={styles.container}>
      <label
        className={styles.label}
        data-isfocused={isFocused}
        data-isempty={ref.current && ref.current.value === ""}
        htmlFor={name}
      >
        {label}
      </label>
      <textarea
        className={styles.input}
        maxLength={500}
        onFocus={() => isFocusedChange(true)}
        onBlur={() => isFocusedChange(false)}
        ref={ref}
        required
      ></textarea>
    </div>
  );
}