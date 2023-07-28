import React, { useState } from "react";
import "./FourthStep.css";
import CardFood from "./CardFood";
import { Container, Row, Button } from "react-bootstrap";

export const food = [
  {
    id: 1,
    icon: "🍔",
    name: "hamburguesa",
    description:
      "Una hamburguesa es un sándwich hecho a base de carne molida o de origen vegetal, aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornearse.",
  },
  {
    id: 2,
    icon: "🍜",
    name: "ramen",
    description:
      "El ramen es un plato de fideos japonés heredado de la cocina china. Hasta 1950, en Japón el ramen se llamaba shina soba.",
  },
  {
    id: 3,
    icon: "🥗",
    name: "ensalada",
    description:
      "La ensalada es, en términos generales, un plato que combina hortalizas frías y varias verduras cortadas, mezcladas y aderezadas —fundamentalmente con sal, aceite vegetal y vinagre— a las que se suelen añadir otros alimentos.",
  },
];

export default function FourthStep() {
  const [selectedCard, setSelectedCard] = useState(null);

  const clickCard = (food) => {
    setSelectedCard(food.id);
    localStorage.setItem("foodName", food.name);
    localStorage.setItem("iconFood", food.icon);
  };

  const finishForm = () => {

    setSelectedCard(null);
    localStorage.removeItem("foodName");
    localStorage.removeItem("iconFood");
  };

  return (
    <div>
      <h2>Elige tu comida favorita:</h2>
      <h4>Selecciona con un click y luego el botón de "Siguiente"</h4>
      <Container className="p-5 text-center">
        <Row>
          {food.map((food, index) => (
            <CardFood
              food={food}
              key={index}
              clickCard={clickCard}
              selectedCard={selectedCard}
            />
          ))}
        </Row>
      </Container>
      <Button variant="primary" onClick={finishForm}>
        Finalizar y Limpiar
      </Button>
    </div>
  );
}
