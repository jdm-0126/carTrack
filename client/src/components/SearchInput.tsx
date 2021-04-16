import * as React from "react";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

export interface ISearchProps {
  onChangeSearchQuery: (searchQuery: string) => void;
}

export default function SearchInput(props: ISearchProps) {
  const [searchQuery, setSearchQuery] = useState<string | undefined>();
  const { onChangeSearchQuery } = props;
  const debouncedSearchQuery = useDebounce(searchQuery, 250);

  useEffect(() => {
    if (debouncedSearchQuery !== undefined) {
      onChangeSearchQuery(debouncedSearchQuery);
    }
  }, [debouncedSearchQuery, onChangeSearchQuery]);

  return (
    <>
      <Container>
        <Row>
          {/* <Col md={{ span: 6, offset: 3 }}> */}
          <Col>
            <div>
            <label style={{fontSize:"20px"}} htmlFor="search" className="mt-3">SEARCH </label>
                <input
                  style={{fontSize:"20px", borderRadius: "10px"}}
                  id="search"
                  className="form-control full-width"
                  type="search"
                  aria-label="Search"
                  onChange={(event) => setSearchQuery(event.target.value)}
                />
              </div>
          </Col>
        </Row>

      </Container>
    </>
  );
}
