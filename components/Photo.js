import styles from "@styles/components/Photo.module.css";

import Image from "next/image";
import Link from "next/link";

export default function Photo({ photo: { image, slug }, disabled }) {
  return (
    <div
      className={styles.container}
      data-disabled={disabled}
    >
      <Link href={`gallery/${slug}`}>
        <a>
          <div className={styles.image_container}>
            <Image
              src={`/${image}`}
              alt={slug}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={`/${image}`}
            />
          </div>
        </a>
      </Link>
    </div>
  );
}