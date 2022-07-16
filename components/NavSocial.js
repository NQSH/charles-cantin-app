import styles from "@styles/components/NavSocial.module.css";

import { useNavigation } from "context/navigation";

import Link from "next/link";

export default function NavSocial({ src }) {
  const { handleSetCurrentMenu } = useNavigation();

  return (
    <div>
      <Link href="/">
        <a className={styles.link} onClick={() => handleSetCurrentMenu("home")}>
          <img src={src} width="50px" />
        </a>
      </Link>
    </div>
  );
}