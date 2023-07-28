
import { Card, Col } from "react-bootstrap";
export default function CardFood({food, clickCard, selectedCard}) {
    const {id, icon, name, description} = food;

    return (
        <Col
        className={`card-food mt-2 ${selectedCard === food.id ? "selected-card": ""}`}
        onClick={() => clickCard(food)}
        key={id}>
            <Card>
                <Card.Body>
                    <Card.Title>{icon}</Card.Title>
                    <Card.Subtitle>{name}</Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
}
