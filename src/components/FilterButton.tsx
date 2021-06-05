import { useState, useEffect, useContext, FunctionComponent } from "react";
import styles from "../styles/Filter.module.css";
// components
// context
import { filterContext } from "../Provider";
// types
import { FilterOptions } from "../types/filter";

interface FilterButtonProps extends FilterOptions {}

const FilterButton: FunctionComponent<FilterButtonProps> = ({ text }) => {
  const { filterText, filterOff, filterOn } = styles;
  const [toggle, setToggle] = useState<boolean>(false);
  const { addFilter, removeFilter } = useContext(filterContext);

  const onClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    toggle && addFilter(text);
    !toggle && removeFilter(text);
  }, [toggle]);

  return (
    <div className={toggle ? filterOn : filterOff} onClick={onClick}>
      <h5 className={filterText}>{`${toggle ? "X " : ""}${text}`}</h5>
    </div>
  );
};

export default FilterButton;
