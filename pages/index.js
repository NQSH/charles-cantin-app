import styles from "@styles/pages/Home.module.css";7
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useNavigation } from "context/navigation";

import Head from "next/head";
import Link from "next/link";

export default function Home({ backgroundImage }) {
  const { handleSetCurrentMenu } = useNavigation();

  return (
    <div style={{ flex: 1 }}>
      <Head>
        <title>Accueil</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.background} style={{ backgroundImage: `url(${backgroundImage})` }} />
        <span className={styles.title_wrapper}>
          <h2 className={styles.title_name}>Charles Cantin</h2>
          <span className={styles.title_hyphen}>{` - `}</span>
          <span className={styles.title_job}>Photographe</span>
        </span>
        <Link href={`/gallery`}>
          <a className={styles.gallery_link} onClick={() => handleSetCurrentMenu("gallery")}>
            <p className={styles.gallery_link_text}>Visiter la galerie</p>
          </a>
        </Link>
        <p className={styles.copyright}>Copyright © Charles Cantin. Tous droits réservé</p>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const content = fs.readFileSync(path.join("content/home.md"), "utf-8");
  const { data } = matter(content);
  const { background_image: backgroundImage } = data;
  
  return  {
    props: {
      backgroundImage,
    }
  }
}