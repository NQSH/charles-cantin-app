import Image from "next/image";
import Link from "next/link";

export default function Photo({ photo: { image, slug }, disabled }) {
  return (
    <div style={{ position: "relative", height: "100px", minWidth: "30%", flex: 1, display: !disabled ? "block" : "none" }}>
      <Link href={`gallery/${slug}`}>
        <a>
          <Image src={`/${image}`} layout="fill" objectFit="cover" />
        </a>
      </Link>
    </div>
  );
}