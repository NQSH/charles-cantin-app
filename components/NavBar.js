import styles from "@styles/components/NavBar.module.css"

import React from "react";

import NavMenu from "./NavMenu";
import NavSocial from "./NavSocial";

import { useNavigation } from "context/navigation";

export default function NavBar({}) {
  const { currentMenu, handleSetCurrentMenu, menuList } = useNavigation();

  const [markerPosition, setMarkerPosition] = React.useState(0);

  return (
    <div className={styles.container}>
      <nav
        className={styles.menu_list_container}
        data-iscurrenthome={currentMenu.id === "home"}
      >
        <ul className={styles.menu_list}>
          {
            menuList.map(menu => {
              const { id } = menu;
              return (
                <NavMenu
                  {...menu}
                  onClickHandler={() => handleSetCurrentMenu(id)}
                  isCurrent={currentMenu.id === id}
                  setMarkerPosition={setMarkerPosition}
                  key={id}
                  isHomeCurrent={currentMenu.id === "home"}
                />
              );
            })
          }
          <div
            className={styles.menu_list_marker}
            style={{ left: markerPosition - 3 }}
            data-iscurrenthome={currentMenu.id === "home"}
          />
        </ul>
      </nav>
      <div className={styles.social_container} data-iscurrenthome={currentMenu.id === "home"}>
        <div className={styles.social_wrapper}>
          <NavSocial src="/icon-social-facebook.png" />
          <NavSocial src="/icon-social-instagram.png" />
        </div>
      </div>
    </div>
  );
}