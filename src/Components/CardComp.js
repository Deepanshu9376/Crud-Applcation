import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardComp(props) {
  const { name, email, contact, gender, category, technologies } = props;
  return (
    <Card style={{ width: "18rem" }}>
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
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default CardComp;
