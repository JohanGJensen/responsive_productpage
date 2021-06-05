import { FunctionComponent, createContext, useState } from "react";

export const filterArray: Array<string> = [];

const context = {
  toggle: false,
  filters: filterArray,
  addFilter: (t: string) => {},
  removeFilter: (t: string) => {},
};

export const filterContext = createContext(context);

export const FilterContextProvider: FunctionComponent = (props) => {
  let filterToggle: boolean = false; // not ideal, but updating an array does not re-render components from context

  const addFilter = (filter: string) => {
    filterArray.push(filter);
    setState({
      ...state,
      filters: filterArray,
      toggle: (filterToggle = !filterToggle),
    });
  };

  const removeFilter = (filter: string) => {
    const idx = filterArray.findIndex((item) => {
      return filter === item;
    });

    filterArray.splice(idx, 1);

    setState({
      ...state,
      filters: filterArray,
      toggle: (filterToggle = !filterToggle),
    });
  };

  const initState = {
    ...context,
    addFilter: addFilter,
    removeFilter: removeFilter,
  };

  const [state, setState] = useState(initState);

  return (
    <filterContext.Provider value={state}>
      {props.children}
    </filterContext.Provider>
  );
};
