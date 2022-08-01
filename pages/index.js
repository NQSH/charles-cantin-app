import styles from "@styles/pages/Home.module.css";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { useNavigation } from "context/navigation";

import Head from "next/head";
import Link from "next/link";

import { motion }  from "framer-motion";

export default function Home({ backgroundImage }) {
  const { handleSetCurrentMenu } = useNavigation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.container}
    >
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
    </motion.div>
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