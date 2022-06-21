import Link from "next/link"

export default function NavMenu({ href, label }) {
  return (
    <div style={{ flex: 1 }}>
      <Link href={href}>
        <a>
          {label}
        </a>
      </Link>
    </div>
  );
}