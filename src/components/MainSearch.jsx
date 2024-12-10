import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../redux/actions";
import { useState } from "react";
import { Link } from "react-router-dom";

const MainSearch = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  const jobs = useSelector((state) => state.jobs.content);
  console.log(jobs);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  console.log(jobs);
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(getJobs(query));
            }}
          >
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          <Row className="my-3">
            <Col>
              <Link to="/favourites">Go to favourites</Link>
            </Col>
          </Row>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
