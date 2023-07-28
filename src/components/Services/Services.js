import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import imgCourse1 from "../../assets/img/imagen1 (1).jpg";
import imgCourse2 from "../../assets/img/imagen1 (2).jpg";
import imgCourse3 from "../../assets/img/imagen1 (3).jpg";
import CardService from "./CardService/CardService";

export default function Services() {
    const servicesArray = [
        {
            title: "Demon Slayer: Kimetsu no Yaiba",
            subtitle: "o en español Guardianes de la Noche es una serie de manga escrita e ilustrada por Koyoharu Gotōge, cuya publicación comenzó el 15 de febrero de 2016 en la revista semanal Shūkan Shōnen Jump de la editorial Shūeisha.",
            image: imgCourse1,
            footer: "Ir a mas informacion ➡️",
            link: "#!",
        },
        {
            title: "Nanatsu no Taizai",
            subtitle: "comúnmente conocido como Los siete pecados capitales en España e Hispanoamérica, es un serie de manga y anime escrita e ilustrada por Nakaba Suzuki, publicada en la revista Weekly Shōnen Magazine de Kodansha desde el 10 de octubre del 2012 hasta el 25 de marzo del 2020.",
            image: imgCourse2,
            footer: "Ir a mas informacion ➡️",
            link: "#!",
        },
        {
            title: "Tate no Yūsha no Nariagari",
            subtitle: "o también conocida por su nombre en inglés The Rising of The Shield Hero, es una serie de novelas ligeras escritas por Aneko Yusagi. Originalmente serializada como novela web, fue adquirida por Media Factory quien amplió la historia y la publicó con ilustraciones de Seira Minami.",
            image: imgCourse3,
            footer: "Ir a mas informacion ➡️",
            link: "#!",
        },
    ];

    return (
        <div className="services p-4 mt-5">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h2 className="text-center">Animes favoritos</h2>
                        <h4 className="pb-3 text-center">
                            Estos son algunos de mis animes preferidos:
                        </h4>
                        <Row xs={1} md={3} className="g-4 mt-4">
                            {servicesArray.map((service, index) => (
                                <CardService service={service} key={index} />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
