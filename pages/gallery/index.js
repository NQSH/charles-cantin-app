import fs from "fs";
import path from "path";
import matter from "gray-matter"
import Image from "next/image"
import Album from "@components/Album";

export default function Gallery({ photos, categories, years }) {
  
  return (
    <div style={{ flex: 1 }}>
      <h1>Gallery</h1>
      <Album photos={photos} />
    </div>
  );
}

export async function getStaticProps() {
  const photoFiles = fs.readdirSync(path.join("content/photos"));
  const photos = photoFiles.map(file => {
    const content = fs.readFileSync(path.join("content/photos/", file), "utf-8");
    const { data } = matter(content);
    const { published_at } = data;
    
    const date = published_at.toString();
    const slug = file.replace(".md", "");

    return { 
      ...data,
      published_at: date,
      slug,
    };
  })
  
  const categoryContent = fs.readFileSync(path.join("content/meta/categories.md"), "utf-8");
  const { data: categories } = matter(categoryContent);

  const years = photos.map(photo => new Date(photo.published_at).getFullYear())
    .filter((value, index, result) => result.indexOf(value) === index)
    .sort((a, b) => b - a);

  return  {
    props: {
      photos,
      categories,
      years,
    }
  }
}