import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function PhotoPage({ title, image, category, published_at }) {
  return (
    <div style={{ flex: 1 }}>
      <h1>Picture</h1>
      <h2>{title}</h2>
      <p>{image}</p>
      <b>{category}</b>
      <p>{published_at}</p>
    </div>
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