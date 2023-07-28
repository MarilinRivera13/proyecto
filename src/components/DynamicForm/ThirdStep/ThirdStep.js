import { useState } from "react";
import "./ThirdStep.css";
import {
    Col,
    Container,
    FloatingLabel,
    Form,
    Modal,
    Row
}  from "react-bootstrap";
import Resume from "../Resume";

export default function ThirdStep({setStep}) {
    const [modal, setModal]= useState(false);
    const onChangeComment = (e) =>{
        const comment= e.target.value;
        localStorage.setItem("comment", comment);
    };
    return(
        <div>
            <h2>Animes favoritos</h2>
            <h4>algun anime favorito que te gustaria compartir:</h4>
            <Container className="p-5 text-center">
                <Row className="justify-content-md-center">
                    <Col lg="10">
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="Comments"
                            className="mb-3"
                        >
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment"
                                onChange={(e) => onChangeComment(e) }
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                <div className="send-form">
                    <p className="result p-3" onClick={()=> setModal(true)}>
                        Visualiza resultado 🙌
                    </p>
                </div>
                {modal && (
                    <Resume showModal={modal} setModal={setModal} setStep={setStep}/>
                )}
            </Container>
        </div>
    );
}
