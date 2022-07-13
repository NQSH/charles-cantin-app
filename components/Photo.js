import styles from "@styles/components/Photo.module.css";

import Image from "next/image";
import Link from "next/link";

export default function Photo({ photo: { image, slug }, disabled }) {
  return (
    <div className={styles.container}>
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