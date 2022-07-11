import styles from "@styles/components/NavMenu.module.css";

import React from "react";
import Link from "next/link"

export default function NavMenu({ href, label, onClickHandler, isCurrent, setMarkerPosition, isHomeCurrent }) {
  const ref = React.useRef(null);
  const [offset, setOffset] = React.useState();

  React.useEffect(() => {
    if(!offset) {
      const value = ref.current.offsetLeft + ref.current.offsetWidth / 2 - 2;
      setOffset(value);
      isCurrent && setMarkerPosition(value);
    } else {
      isCurrent && setMarkerPosition(offset)
    }
  }, [isCurrent]);

  return (
    <li className={styles.container}>
      <Link href={href}>
        <a
          onClick={onClickHandler}
          className={styles.link}
          data-iscurrent={isCurrent}
          data-iscurrenthome={isHomeCurrent}
          ref={ref}
        >
          {label}
        </a>
      </Link>
    </li>
  );
}