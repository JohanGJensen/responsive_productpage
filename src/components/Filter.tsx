import { FunctionComponent } from "react";
import styles from "../styles/Filter.module.css";
// components
import FilterButton from "./FilterButton";
import Image from "next/image";
// types
import { FilterOptions } from "../types/filter";

interface FilterProps {}

const filterOptions: Array<FilterOptions> = [
  { text: "Products" },
  { text: "Optional" },
  { text: "Accessories" },
  { text: "Bundles" },
  { text: "Special Editions" },
];

const Filter: FunctionComponent<FilterProps> = () => {
  const { filterWrapper, buttonWrapper } = styles;

  return (
    <div className={filterWrapper}>
      <Image
        src="/images/filter.svg"
        alt="filter icon"
        width={14}
        height={18}
      />
      <div className={buttonWrapper}>
        {filterOptions?.map((option, idx) => {
          return (
            <FilterButton key={`${option.text}=${idx}`} text={option.text} />
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
