import styles from "@styles/components/Service.module.css";

import Link from "next/link";

export default function Service({ service }) {
  const { title, description, price } = service;
  return (
    <div className={styles.container}>
      <Link
        href={{
          pathname: "/contact",
          query: { service: title }
        }}
      >
        <a>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            <b className={styles.price}>{price ? `${price}€` : "Sur mesure"}</b>
            <p className={styles.description}>{description}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}