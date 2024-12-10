import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavourites } from "../redux/actions";

const FavouritesCompanies = () => {
  const companies = useSelector((state) => state.favourites.favouritesCompanies.content);
  const dispatch = useDispatch();

  return (
    <Container className="mt-3">
      {companies.map((company, index) => (
        <Row className="mb-3 " key={index}>
          <Col className="d-flex align-items-center">
            <Button className="me-2 btn btn-danger" onClick={() => dispatch(removeFromFavourites(index))}>
              🗑️
            </Button>
            <p className="mb-0" key={index}>
              {company}
            </p>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default FavouritesCompanies;
