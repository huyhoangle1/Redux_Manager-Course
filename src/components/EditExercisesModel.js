import React from 'react';
import { Button,Modal } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


const EditExercisesModel = ({courseTasks, showExercisesModal, isExercisesShowModal}) => {

    const handleClose=()=>{
      isExercisesShowModal(false);
      console.log(courseTasks);
    }

  return (
    <div
    className="modal show"
    style={{ display: 'block', position: 'initial' }}
  >
      <Modal show={showExercisesModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Exercises</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {
            courseTasks.map((i)=>{
              <Input></Input>
            })
          } */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
  );
};

export default EditExercisesModel;