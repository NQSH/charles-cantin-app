import styles from "@styles/components/FilterList.module.css"

export default function FilterList({ title, filters, side, onClickHandler }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {
          filters.map(filter => {
            return <li className={styles.filter} onClick={() => onClickHandler(filter)}>{filter}</li>
          })
        }
      </ul>
    </div>
  );
}