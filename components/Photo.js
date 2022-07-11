import Image from "next/image";
import Link from "next/link";

export default function Photo({ photo: { image, slug }, disabled }) {
  return (
    <div style={{ height: "100px", minWidth: "30%", flex: 1, display: !disabled ? "block" : "none" }}>
      <Link href={`gallery/${slug}`}>
        <a>
          <div style={{ position: "relative", height: "100%", minWidth: "100%" }}>
            <Image src={`/${image}`} layout="fill" objectFit="cover" placeholder="blur" blurDataURL={`/${image}`} />
          </div>
        </a>
      </Link>
    </div>
  );
}