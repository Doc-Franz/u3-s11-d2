import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { handleSubmit, searchResults, setQuery } from "../redux/actions";

const MainSearch = () => {
  const dispatch = useDispatch();

  // const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);

  // const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const query = useSelector((state) => state.query);
  const jobs = useSelector((state) => state.jobs);
  console.log(jobs);

  const handleChange = (e) => {
    // setQuery(e.target.value);
    dispatch(setQuery(e.target.value));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(baseEndpoint + query + "&limit=20");
  //     if (response.ok) {
  //       const { data } = await response.json();
  //       setJobs(data);
  //       console.log(data);
  //       data.map((job) => {
  //         dispatch(searchResults(job.company_name));
  //       });
  //     } else {
  //       alert("Error fetching results");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
              dispatch(handleSubmit(query));
            }}
          >
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs & (jobs.length > 0) && jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
