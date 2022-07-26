import styles from "@styles/components/NavSocial.module.css";

import { useNavigation } from "context/navigation";

import Link from "next/link";

export default function NavSocial({ src, isNavOpenned }) {
  const { handleSetCurrentMenu } = useNavigation();

  return (
    <div>
      <Link href="/">
        <a
          className={styles.link}
          data-isnavopenned={isNavOpenned}
          onClick={() => handleSetCurrentMenu("home")}
        >
          <img src={src} width="50px" />
        </a>
      </Link>
    </div>
  );
}