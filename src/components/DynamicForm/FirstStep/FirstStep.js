import "./FirstStep.css";
import CardFruit from "./CardFruit";
import { Container, Row } from "react-bootstrap";
import { useState} from "react";

export const fruits = [
    {
        id:1,
        icon:"🍓",
        name:"fresa",
        description:"La fresa o frutilla es un género de plantas rastreras estoloníferas de la familia Rosaceae. Agrupa unos 400 taxones descritos, de los cuales solo unos 20 están aceptados.",
    },
    {
        id:2,
        icon:"🍇",
        name:"uva",
        description:"La uva es la común denominación que reciben los frutos formados en los racimos de la vida. Es usada mundialmente para su fermentación, ya que ésta da lugar al vino.",
    },
    {
        id:3,
        icon:"🍏",
        name:"manzana verde",
        description:"La manzana o poma es el fruto comestible de la especie Malus domestica, el manzano común. Es una fruta pomácea de forma redonda y sabor muy dulce, dependiendo de la variedad.",
    },
];

export default function FirstStep() {
    const [selectedCard, setSelectedCard] = useState(null);

    const clickCard = (fruit) =>{
        setSelectedCard(fruit.id);
        localStorage.setItem("fruitName", fruit.name);
        localStorage.setItem("iconFruit", fruit.icon);
    };


    return(
        <div>
            <h2>Elige tu fruta favorita:</h2>
            <h4>Selecciona una dando click y luego el  boton de "Siguiente"</h4>
            <Container className="p-5 text-center">
                <Row>
                    {fruits.map ((fruit, index)=>(
                        <CardFruit
                            fruit={fruit}
                            key={index}
                            clickCard={clickCard}
                            selectedCard={selectedCard}
                        />
                    ))}
                </Row>
            </Container>
        </div>
    );
    
}
