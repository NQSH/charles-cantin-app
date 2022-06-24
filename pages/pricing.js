import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Pricing({ services }) {
  return (
    <div style={{ flex: 1 }}>
      <h1>Pricing</h1>
      {
        services.map((service, index) => {
          const { title, description, price } = service;
          return (
            <Link
              href={{
                pathname: "/contact",
                query: service
              }}
              key={index}
            >
              <a>
                <div>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <b>{price}</b>
                </div>
              </a>
            </Link>
          );
        })
      }
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
