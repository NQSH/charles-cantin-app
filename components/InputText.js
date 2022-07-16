import styles from "@styles/components/InputText.module.css";

import React from "react";

export default function InputText({ label, name, errorMessage, pattern }) {
  const [isFocused, isFocusedChange] = React.useState(false);
  const ref = React.useRef(null);

  function handleChangeValue({ target }) {
    const { value } = target;
    if(!value.match(pattern)) {
      ref.current.setCustomValidity(errorMessage);
    } else {
      ref.current.setCustomValidity("");
    }
  }

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
      <input
        className={styles.input}
        type="text"
        name={name}
        onFocus={() => isFocusedChange(true)}
        onBlur={() => isFocusedChange(false)}
        onChange={handleChangeValue}
        ref={ref}
      />
    </div>
  );
}