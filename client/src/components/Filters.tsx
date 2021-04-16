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

export function Filters<T>(props: IFiltersProps<T>) {
  const { object, filters, onChangeFilter } = props;

  const labelTruthy = (
    <>
      is <b>truthy</b>
    </>
  );

  const labelFalsy = (
    <>
      is <b>falsy</b>
    </>
  );

  return (
    <div className="p-1 my-2">
      {/* <div id="myBtnContainer">
    <button className="btn active" onclick="filterSelection('all')"> Show all</button>
    <button className="btn" onclick="filterSelection('nature')"> Nature</button>
    <button className="btn" onclick="filterSelection('cars')"> Cars</button>
    <button className="btn" onclick="filterSelection('people')"> People</button>
  </div> */}
      <label className="container">One
  <input type="checkbox" checked="checked" />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}
