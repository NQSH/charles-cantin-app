import styles from "@styles/components/FilterList.module.css"

import React from "react";

export default function FilterList({ title, filters, side, onClickHandler, selectedFilters, deleteFiltersHandler }) {
  const [isOpenned, isOpennedChange] = React.useState(false);

  function handleToggleOpen() {
    isOpennedChange(!isOpenned);
    console.log("TEST")
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title} onClick={handleToggleOpen}>
        {title}
        <div className={styles.title_arrow} data-isopenned={isOpenned} />
      </h2>
      <ul className={styles.list} data-isopenned={isOpenned}>
        {
          filters.map(filter => {
            return (
              <li
              className={styles.filter}
              onClick={() => onClickHandler(filter)}
              data-side={side}
              data-isselected={selectedFilters.includes(filter)}
              key={filter}
              >
                {filter}
              </li>
            );
          })
        }
        {
          selectedFilters.length !== 0 &&
            <li
              className={styles.delete}
              data-side={side}
              onClick={deleteFiltersHandler}
            >
              Supprimer
            </li>
        }
      </ul>
    </div>
  );
}