import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.svg";

export default function Brand({ color }) {
  return (
    <div style={{ flex: 1 }}>
      <Link href="/" >
        <a>
          <Logo style={{ width: "100px", color }} />
        </a>
      </Link>
    </div>
  );
}