import Link from "next/link";

export default function NavSocial({ src }) {
  return (
    <div>
      <Link href="/#">
        <a>
          <img src={src} width="50px" />
        </a>
      </Link>
    </div>
  );
}