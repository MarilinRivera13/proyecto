import { Button, Col, Container, Row } from "react-bootstrap";
import "./Introduction.css";
export default function Introduction() {
    return (
        <div className="introduction p-3 p-lg-5 mt-5">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h1 className="pl-2 text-center">
                        Bienvenido a mi formulario dinamico {" "}
                            <span className="pt-2 pb-4">Aqui encontraras informacion de mi interes.</span>
                        </h1>
                        <h4 className="d-flex container-actions mt-5">
                        Hola, soy Marilyn Rivera. Tengo 23 años y me gusta hacer y desarrollar programas con js y JAVA. Me gusta jugar baloncesto y tocar el acordeón.
                        </h4>
                        <div className="d-flex container-actions mt-5">
                            <div className="container-buttons">
                                <Button
                                    className="p-3"
                                    onClick={() => console.log("click button1")}
                                >Informacion de contacto</Button>
                                <Button className="p-3">Informacion de contacto</Button>
                            </div>
                            <div className="btn-start-create">
                                <a href="#dynamic-form">toca para crear</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
    
}
