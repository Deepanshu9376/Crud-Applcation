import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function CardComp(props) {
  const { name, email, contact, gender, category, technologies } = props;
  return (
    <Row xs={2} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>User</Card.Title>
              <div>
                <strong>Name:-</strong>
                {name}
              </div>
              <div>
                <strong>Phone Number:</strong>
                {contact}
              </div>
              <div className="col">
                <strong>Email:</strong> {email}
              </div>
              <div className="col">
                <strong>Gender:</strong> {gender}
              </div>
              <div className="col">
                <strong>Category:</strong> {category}
              </div>
              <div className="col">
                <strong>Technologies:</strong> {technologies}
              </div>
              <Button variant="primary">View</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardComp;
