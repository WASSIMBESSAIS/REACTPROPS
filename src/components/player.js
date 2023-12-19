import Card from "react-bootstrap/Card";
const Player = ({ name, team, nationality, jersyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>Name:{name}</Card.Title>
        <Card.Text>Team:{team}</Card.Text>
        <Card.Text>Nationality:{nationality}</Card.Text>
        <Card.Text>Jersy Number:{jersyNumber}</Card.Text>
        <Card.Text>Age:{age}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
