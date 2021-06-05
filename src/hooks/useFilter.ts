import { useEffect, useContext, useState } from "react";
// context
import { filterContext } from "../Provider";
// types
import { ProductInfo } from "../types/product";

export const useFilter = (list: Array<ProductInfo>) => {
  const [filtered, setFiltered] = useState<Array<ProductInfo>>([]);
  const { filters, toggle } = useContext(filterContext);

  useEffect(() => {
    // each item
    const filteredList = list.filter((item) => {
      // each item type
      return item.productType.find((type) => {
        if (filters.length >= 1) {
          // each applied filter
          return filters.find((filter) => {
            return filter === type;
          });
        }

        // if no filter is applied
        return true;
      });
    });

    setFiltered(filteredList);
  }, [filters, toggle]);

  return filtered;
};
