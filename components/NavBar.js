import Brand from "./Brand";
import NavMenu from "./NavMenu";
import NavSocial from "./NavSocial";

export default function NavBar({}) {
  return (
    <div style={{ flex: 1 }}>
      <Brand />
      <div>
        <NavMenu href="/" label="Accueil" />
        <NavMenu href="/gallery" label="Galerie" />
        <NavMenu href="/pricing" label="Préstations" />
        <NavMenu href="/contact" label="Contact" />
      </div>
      <div>
        <NavSocial src="/icon-social-facebook.png" />
        <NavSocial src="/icon-social-instagram.png" />
      </div>
    </div>
  );
}