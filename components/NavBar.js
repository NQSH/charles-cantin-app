import styles from "@styles/components/NavBar.module.css"

import React from "react";

import NavMenu from "./NavMenu";
import NavSocial from "./NavSocial";

import NavClosedIcon from "../public/nav-closed-icon.svg";
import NavOpennedIcon from "../public/nav-openned-icon.svg";

import { useNavigation } from "context/navigation";

export default function NavBar({}) {
  const { currentMenu, handleSetCurrentMenu, menuList } = useNavigation();
  const [isNavOpenned, isNavOpennedChange] = React.useState(false);
  const [markerPosition, setMarkerPosition] = React.useState(0);

  function handleToggleNavMenu(event) {
    event.preventDefault();
    isNavOpennedChange(!isNavOpenned);
  }
  function handleOnClickNavContainer() {
    isNavOpenned && isNavOpennedChange(false)
  }

  return (
    <div
      className={styles.container}
      data-isnavopenned={isNavOpenned}
      onClick={handleOnClickNavContainer}
    >
      <nav
        className={styles.menu_list_container}
        data-iscurrenthome={currentMenu.id === "home"}
        data-isnavopenned={isNavOpenned}
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
                  isNavOpenned={isNavOpenned}
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
        <div className={styles.toggle_nav_button_container} onClick={event => handleToggleNavMenu(event)}>
          <a className={styles.toggle_nav_button}>
            {
              !isNavOpenned
                ? <NavClosedIcon style={{ color: currentMenu.id === "home" ? "white" : "black" }} />
                : <NavOpennedIcon style={{ color: "white" }} />
            }
          </a>
        </div>
      </nav>
      <div className={styles.social_container} data-iscurrenthome={currentMenu.id === "home"}>
        <div className={styles.social_offset} />
        <div className={styles.social_wrapper}>
          <NavSocial src="/social-facebook-icon.png" isNavOpenned={isNavOpenned} />
          <NavSocial src="/social-instagram-icon.png" isNavOpenned={isNavOpenned} />
        </div>
      </div>
    </div>
  );
}