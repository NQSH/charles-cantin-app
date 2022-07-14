import styles from "@styles/components/Brand.module.css"

import { useNavigation } from "context/navigation";

import Link from "next/link";
import Logo from "../public/logo.svg";

export default function Brand({}) {
  const { currentMenu, handleSetCurrentMenu } = useNavigation();
  
  return (
    <div className={styles.container} data-iscurrenthome={currentMenu.id === "home"}>
      <div className={styles.logo_container} data-iscurrenthome={currentMenu.id === "home"}>
        <Link href="/" >
          <a
            className={styles.link}
            onClick={() => handleSetCurrentMenu("home")}
            data-iscurrenthome={currentMenu.id === "home"}
          >
            <Logo style={{ color: "currentColor" }} />
          </a>
        </Link>
      </div>
    </div>
  );
}