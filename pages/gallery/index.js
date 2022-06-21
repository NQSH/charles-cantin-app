import fs from "fs";
import path from "path";
import matter from "gray-matter"

export default function Gallery({ categories, pictures, years }) {
  
  return (
    <div style={{ flex: 1 }}>
      <h1>Gallery</h1>
      <div>
        {
          pictures.map(picture => {
            return (
              <img src={picture.path} width={100} key={picture.path} />
            );
          })
        }
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("content/gallery"));
  
  const props = {
    categories: [],
    pictures: [],
    years: []
  };

  files.forEach(file => {
    const { data } = matter(fs.readFileSync(path.join("content/gallery", file), "utf-8"));
    const { title: category, images } = data;

    props.categories.push(category);
    images.forEach(image => {
      const { image: path, published_at } = image;
      const date = published_at.toString();
      props.pictures.push({ path, published_at: date, category });
      const year = new Date(published_at).getFullYear();
      if(!props.years.includes(year)) props.years.push(year);
    })
  });
  console.log(props)
  return  {
    props
  }
}