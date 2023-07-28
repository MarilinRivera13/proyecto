import { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import Select from "react-select";

const options=[
    {id:1, value:"futbol", label:"Futbol ⚽"},
    {id:2, value:"computadoras", label:"computadoras 💻"},
    {id:3, value:"plays", label:"plays 🎮"},
    {id:4, value:"musica", label:"musica 🎼"},
    {id:5, value:"fotografia", label:"fotografia 📷"},
    {id:6, value:"natacion", label:"natacion 🥽"},
    {id:7, value:"caminar", label:"caminar 👟"},
    {id:8, value:"baloncesto", label:"baloncesto 🏀"},
];
/*
<Select 
                            defaultValue={selectOption}
                            onChange={setSelectOption}
                            options={options}
                            isSearchable
                            isMulti
                        />*/
export default function SecondStep() {
    const [selectOption, setSelectOption]=useState(null);
    const hobbiesSer= JSON.stringify(selectOption);
    localStorage.setItem("hobbies", hobbiesSer);
    const onChangeAdditionalHobbie = (e) =>{
        const sport = e.target.value;
        localStorage.setItem("additionalHobbie", sport);
    };
    return (
        <div>
            <h2>Selecciona tu deporte favorito</h2>
            <h4>elige tus favoritos</h4>
            <Container className="p-5 text-center">
                <Row className="justify-content-md-center">
                    <Col lg="7">
                        <h5>selecciona uno</h5>
                        <Select 
                            defaultValue={selectOption}
                            onChange={setSelectOption}
                            options={options}
                            isSearchable
                            isMulti
                        />
                    </Col>
                    <Col lg="7" className="mt-4">
                        <h5>alguno mas.</h5>
                        <Form.Control
                            type="text"
                            placeholder="Baloncesto"
                            onChange={(e) => onChangeAdditionalHobbie(e)}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
