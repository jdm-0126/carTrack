import React, { useState, useEffect } from "react";
import './App.css';
import './index.css'
import SearchInput from "./components/SearchInput";
import IWidget from "./interfaces/IWidget"
import IFilter from "./interfaces/IFilter";
import { genericSearch } from "./utils/genericSearch";
import { genericFilter } from "./utils/genericFilter";
import { Container, Row, Col } from 'reactstrap';

function App() {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState([]);
  const [showId, setShowId] = useState(true);
  const [show, setShow] = useState(true);
  const [showWebsite, setShowWebsite] = useState(true);
  const [showCompany, setShowCompany] = useState(true);
  const [activeFilters, setActiveFilters] = useState<Array<IFilter<IWidget>>>(
    []
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json().then((lam) => {
          setData(lam);
        });
      }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
    // return () => {
    //   cleanup
    // }
  }, [])
  const resultdata = data
    .filter((res) =>
      genericSearch<IWidget>(res, ["name", "email", "website", "company"], query)
    )
    .filter((res) => genericFilter<IWidget>(res, activeFilters))
const columns = [
  {
    name: "id",
    label: "ID",
    options: showId,
  },
  {
    name: "name",
    label: "Name",
    options: show
  },
  {
    name: "email",
    label: "Email",
    options: show
  },
  {
    name: "phone",
    label: "Phone",
    options: show
  },
  {
    name: "website",
    label: "Website",
    options: showWebsite
  },
  {
    name: "company",
    label: "Company",
    options: showCompany
  },

]
let ishigh;

const handleTHead = (e) => {
  e = e || window.event;
  // var th = e.target || e.srcElement;
}
const handleFilter = () => {
  columns.map(dat => {
      if (dat.name === "website") {
        setShowWebsite(!showWebsite);
      }
      return columns;
    } 
  )
}
const handleFilterCompany = () => {
  columns.map(dat => {
      if (dat.name === "company") {
        setShowCompany(!showCompany);
      }
      return columns;
    } 
  )
}
const handleFilterID = () => {
  columns.map(dat => {
      if (dat.name === "id") {
        setShowId(!showId);
      }
      return columns;
    } 
  )
}

const handleTbody = (e) => {
  e = e || window.event;
  let td = e.target || e.srcElement; //assumes there are no other elements inside the td
  let row = td.parentNode;
  if (ishigh&&ishigh!==row){
    ishigh.className='';
  }
  row.className = row.className==="highlighted" ? "" : "highlighted";
  ishigh=row;
}

function GoTo(id,nu){
  var obj=document.getElementById(id),
      trs=obj.getElementsByTagName('TR');
  nu = nu + 1;
  if (trs[nu]){
    if (ishigh&&ishigh!==trs[nu]){
      ishigh.className='';
    }
    trs[nu].className = trs[nu].className==="highlighted" ? "" : "highlighted";
    ishigh=trs[nu];
   }
}

function rowindex(row){
	var rows = table.rows, i = rows.length;
	while(--i > -1){
		if(rows[i] === row){return i;}
	}
}
document.onkeydown = (e) => {
  e = e ;
	var code = e.keyCode, rowslim = table.rows.length, newhigh;
	if(code === 38){ //up arraow
		newhigh = rowindex(ishigh) - 2;
		if(!ishigh || newhigh < 0){return GoTo('mstrTable', rowslim);}
		return GoTo('mstrTable', newhigh);
	} else if (code === 40){ //down arrow
		newhigh = rowindex(ishigh);
		if(!ishigh || newhigh > rowslim){return GoTo('mstrTable', 0);}
		return GoTo('mstrTable', newhigh);
	}
}
var table = document.getElementById("mstrTable") as HTMLTableElement;
  return (
    <div className="App">
     
      {resultdata.length > 0 && (
        <Container>
          <Row md={4}>
            <Col style={{marginTop:"5em", marginBottom:"1em"}}>
              <SearchInput onChangeSearchQuery={(query) => setQuery(query)} />
            </Col>
            
          </Row>
          <Row style={{margin:"5em"}}>
            <Col >
                <table id="mstrTable">
                <thead onClick={e => handleTHead(e)}>
                  <tr>
                    {columns.map((column) => (
                      column.options ? <th>{column.label}</th> :  ''
                    )
                    )}
                  </tr>
                  </thead>
                  <tbody onClick={e => handleTbody(e)}>
                    {resultdata.map((widget) => {
                      const emailtTo = widget.email;
                      const phone = widget.phone;
                      const website = widget.website;
                      const company = widget.company;
                      return (
                      <tr key={widget.id}>
                        {showId ? <td>{widget.id} </td>: ''}
                        <td>{widget.name}</td>
                        <td><a style={{textDecoration:"none"}} href={`mailto:${emailtTo}`}>{emailtTo}</a></td>
                        <td><a style={{textDecoration:"none"}} href={`tel:${phone}`}>{phone}</a></td>
                        {showWebsite ? <td>{website} </td>: ''}
                        {showCompany ? <td>{company.name}</td> : ''}
                      </tr>
                      )
                      })}
                    </tbody>
                  <div>
                  </div>
                  <div style={{margin:"2em"}}>
                  Filter by: <button style={{marginRight:"2px"}} onClick={() => handleFilterID()}>ID</button>
                  <button style={{marginRight:"2px"}} onClick={() => handleFilter()}>Website</button>
                  <button onClick={() => handleFilterCompany()}>Company</button>
                  </div>
                </table>
              </Col>
          </Row>
          
        </Container>
      )}
        {resultdata.length === 0 && <p>No results found!</p>}
    </div>
  );
}

export default App;
