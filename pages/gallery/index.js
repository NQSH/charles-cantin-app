import styles from "@styles/pages/Gallery.module.css";

import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter"

import Album from "@components/Album";
import FilterList from "@components/FilterList";
import { useFilters } from "context/filters";

import { motion } from "framer-motion";

export default function Gallery({ photos, categories, years }) {
  const { filters, handleOnPressCategory, handleOnPressYear, handleDeleteCategoryFilters, handleDeleteYearFilters } = useFilters();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.container}
    >
      <FilterList
        title={`Catégories`}
        filters={categories.map(category => category.name)}
        side="left" onClickHandler={handleOnPressCategory}
        selectedFilters={filters.categories}
        deleteFiltersHandler={handleDeleteCategoryFilters}
      />
      <Album photos={photos} filters={filters} />
      <FilterList
        title={`Collections`}
        filters={years}
        side="right" onClickHandler={handleOnPressYear}
        selectedFilters={filters.years}
        deleteFiltersHandler={handleDeleteYearFilters}
      />
    </motion.div>
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