import styles from "@styles/components/Footer.module.css";
import { useNavigation } from "context/navigation";

export default function Footer({}) {
  const navigation = useNavigation();
  const { currentMenu } = navigation;
  return (
    <div
      className={styles.container}
      data-disabled={currentMenu.id !== "home" && currentMenu.id !== "contact"}
    >
      <p className={styles.copyright}>
        Copyright © Charles Cantin. Tous droits réservé
      </p>
    </div>
  );
}