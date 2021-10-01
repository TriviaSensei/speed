import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function EndGameModal(props) {
  // const nameRef = useRef();

  // function handleSubmit(e) {
  //   e.preventDefault();
  // if (props.score > props.highScore.score) {
  //   props.setHighScore({
  //     name: nameRef.current.value,
  //     score: props.score,
  //   });
  // }
  // props.closeModal();
  // }

  return (
    <Modal
      {...props}
      size="lg"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Game Over</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Your score: {props.score}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    // <div className="Modal">
    //   <Modal.Header>Game Over</Modal.Header>
    //   <Modal.Body>
    //     <form onSubmit={handleSubmit}>
    //       <p>
    //         Your score: <span>{props.score}</span>
    //       </p>
    //       <p>
    //         High score:
    //         <span>{`${props.highScore.score} (${props.highScore.name})`}</span>
    //       </p>
    //       {props.score > props.highScore.score && (
    //         <Form.Group>
    //           <Form.Label>
    //             You beat the high score - enter your name:
    //           </Form.Label>
    //           <Form.Control type="text" ref={nameRef} required />
    //         </Form.Group>
    //       )}
    //       <Button type="submit">OK</Button>
    //     </form>
    //   </Modal.Body>
    // </div>
  );
}
