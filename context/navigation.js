import React from "react";
import { useRouter } from "next/router";

const NavigationContext = React.createContext();

export default function NavigationProvider({ children }) {
  const router = useRouter();

  const menuList = [
    {
      id: "home",
      label: "Accueil",
      href: "/",
    },
    {
      id: "gallery",
      label: "Galerie",
      href: "/gallery",
    },
    {
      id: "pricing",
      label: "Prestations",
      href: "/pricing",
    },
    {
      id: "contact",
      label: "Contact",
      href: "/contact",
    },
  ]

  const [currentMenu, setCurrentMenu] = React.useState({
    id: "",
    label: "",
    href: "",
  });

  function handleSetCurrentMenu(id) {
    const menu = menuList.find(menu => menu.id === id);
    setCurrentMenu(menu);
  }

  React.useEffect(() => {
    const current = router.pathname.split("/")[1];
    const menu = current
      ? menuList.find(menu => menu.id === current)
      : menuList.find(menu => menu.id === "home")
    setCurrentMenu(menu);
  }, []);

  return (
    <NavigationContext.Provider value={{ currentMenu, handleSetCurrentMenu, menuList }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation () {
  return React.useContext(NavigationContext);
}