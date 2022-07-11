import styles from "@styles/components/NavSocial.module.css";
import Link from "next/link";

export default function NavSocial({ src }) {
  return (
    <div>
      <Link href="/#">
        <a className={styles.link}>
          <img src={src} width="50px" />
        </a>
      </Link>
    </div>
  );
}