import styles from "@styles/pages/GalleryDetail.module.css";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { motion } from "framer-motion";

export default function PhotoPage({ title, image, category, published_at }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.container}
    >
      <div className={styles.wrapper}>
        <div className={styles.image_container}>
          <img className={styles.image} src={`/${image}`} />
          <b className={styles.category}>{`# ${category}`}</b>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.date}>{`Le ${new Intl.DateTimeFormat('fr-FR').format(new Date(published_at))}`}</p>
      </div>
    </motion.div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content/photos"));
  const paths = files.map(file => {
    const slug = file.replace(".md", "");
    return {
      params: {
        slug,
      }
    }
  });
  
  return  {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const content = fs.readFileSync(path.join("content/photos", `${slug}.md`), "utf-8");
  const { data } = matter(content);
  const props = {
    ...data,
    published_at: data.published_at.toString()
  }

  return {
    props
  };
}