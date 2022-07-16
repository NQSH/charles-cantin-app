import React from "react";

const FiltersContext = React.createContext();

export default function FiltersProvider({ children }) {
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
  function handleDeleteCategoryFilters() {
    setFilters({
      ...filters,
      categories: [],
    })
  }
  function handleDeleteYearFilters() {
    setFilters({
      ...filters,
      years: [],
    })
  }
 
  return (
    <FiltersContext.Provider
      value={{
        filters,
        handleOnPressCategory,
        handleOnPressYear,
        handleDeleteCategoryFilters,
        handleDeleteYearFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

export function useFilters () {
  return React.useContext(FiltersContext);
}