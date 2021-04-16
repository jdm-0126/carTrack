import * as React from "react";
import IFilter from "../interfaces/IFilter";
import "./style.css"
export interface IFiltersProps<T> {
  object: T;
  filters: Array<IFilter<T>>;
  onChangeFilter: (
    filterProperty: keyof T,
    checked: boolean,
    isTruthyPicked: boolean
  ) => void;
}

export function FilterFields<T>(props: IFiltersProps<T>) {
  // const { object, filters, onChangeFilter } = props;

//   const labelTruthy = (
//     <>
//       is <b>truthy</b>
//     </>
//   );

//   const labelFalsy = (
//     <>
//       is <b>falsy</b>
//     </>
//   );

  return (
    <div className="grid-container">
        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
  </div>
    
    
  );
}
