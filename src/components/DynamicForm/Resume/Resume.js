import { Button, CardGroup, Modal } from "react-bootstrap";
import CardResume from "./CardResume/CardResume";
import CardResumeHobbies from "./CardResume/CardResumeHobbies";

export default function Resume({ showModal, setModal, setStep }) {
  const favouriteFruit = localStorage.getItem("fruitName");
  const fruitIcon = localStorage.getItem("iconFruit");
  const hobbiesStorage = JSON.parse(localStorage.getItem("hobbies"));
  const additionalHobbie = localStorage.getItem("additionalHobbie");
  const comment = localStorage.getItem("comment");

  const clearForm = () => {
    localStorage.clear();
    setModal(false);
    setStep((prevStep) => prevStep + 1); // Incrementa el paso al siguiente
  };

  return (
    <Modal
      show={showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={clearForm}
    >
      <Modal.Header closeButton>
        <Modal.Title>Felicidades !🥳 🎉</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Has finalizado el formulario</h4>
        <CardGroup className="mt-4">
          {favouriteFruit && fruitIcon && (
            <CardResume
              title={fruitIcon}
              subtitle="Your favourite fruit is"
              text={favouriteFruit}
            />
          )}
          {hobbiesStorage && (
            <CardResumeHobbies
              subtitle="Your hobbies"
              text={additionalHobbie}
              hobbiesStorage={hobbiesStorage}
            />
          )}
          {comment && (
            <CardResume
              subtitle="And for the last this is the comment"
              text={comment}
            />
          )}
        </CardGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={clearForm} variant="outline-dark">
          Siguiente
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
