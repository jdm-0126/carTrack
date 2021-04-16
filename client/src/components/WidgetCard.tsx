import * as React from "react";
import IWidget from "../interfaces/IWidget";
import { Table } from 'reactstrap';

export function WidgetCard(props: IWidget) {
  const {
    name,
    username,
    email,
    address,
    phone,
    id,
    website,
    company
  } = props;
  return (
    // <div className="col-12 p-3">
    //   <div className="card">
    //     <div className="card-body">
    //       <h1 className="card-title">{name}</h1>
    //       <a href={email} className="card-text font-italic">{email}</a><br/>
    //       <a href={phone} className="card-text font-italic">{phone}</a>
    //     </div>
    //   </div>
    // </div>
    <div>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
    </div>
     
  );
}
