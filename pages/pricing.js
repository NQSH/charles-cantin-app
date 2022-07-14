import styles from "@styles/pages/Pricing.module.css";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Service from "@components/Service";

export default function Pricing({ services }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {
          services.map((service, index) => {
            return (
              <Service
                service={service}
                key={index}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("content/pricing"));

  const services = files.map(file => {
    const content = fs.readFileSync(path.join("content/pricing", file), "utf-8");
    const { data } = matter(content);
    return data;
  })

  return {
    props: {
      services
    }
  }
}
