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
  
  function getMenuById (id) {
    return id
      ? menuList.find(menu => menu.id === id)
      : menuList.find(menu => menu.id === "home")
  }

  React.useEffect(() => {
    const initialPath = router.pathname.split(/[\/?]/)[1];
    const initialMenu = getMenuById(initialPath);
    setCurrentMenu(initialMenu);

    const handleRouteChange = (url) => {
      const currentPath = url.split(/[\/?]/)[1];
      const currentMenu = getMenuById(currentPath);
      setCurrentMenu(currentMenu);
    }

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    };
  }, [])

  return (
    <NavigationContext.Provider value={{ currentMenu, handleSetCurrentMenu, menuList }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation () {
  return React.useContext(NavigationContext);
}