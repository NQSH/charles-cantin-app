import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter"
import Album from "@components/Album";

export default function Gallery({ photos, categories, years }) {
  const [ filters, setFilters ] = React.useState({
    categories: [],
    years: [],
  });

  function handleOnPressCategory(value) {
    const { categories } = filters;
    setFilters({ ...filters, categories: handleSetFilters(categories, value) }); 
  }
  function handleOnPressYear(value) {
    const { years } = filters;
    setFilters({ ...filters, years: handleSetFilters(years, value)}); 
  }
  function handleSetFilters(filter, value) {
    const index = filter.indexOf(value);
    index === -1
      ? filter.push(value)
      : filter.splice(index, 1)
    return filter;
  }
  
  return (
    <div style={{ flex: 1 }}>
      <h1>Gallery</h1>
      <div>
        {
          categories.map(category => {
            return <button onClick={() => handleOnPressCategory(category.name)} key={category.name}>{category.name}</button>
          })
        }
      </div>
      <div>
        {
          years.map(year => {
            return <button onClick={() => handleOnPressYear(year)} key={year}>{year}</button>
          })
        }
      </div>
      <Album photos={photos} filters={filters} />
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
  const { data: { categories } } = matter(categoryContent);

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