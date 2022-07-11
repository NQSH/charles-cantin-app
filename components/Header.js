import styles from "@styles/components/Header.module.css"

import React from "react";
import { useNavigation } from "context/navigation";

import Brand from "./Brand";
import NavBar from "./NavBar";

export default function Header({}) {
  const { currentMenu, handle } = useNavigation();

  return (
    <div className={styles.container}>
      <Brand />
      <NavBar />
      <h1
        className={styles.title}
        data-iscurrenthome={currentMenu.id === "home"}
      >
        {currentMenu.label}
      </h1>
    </div>
  );
}