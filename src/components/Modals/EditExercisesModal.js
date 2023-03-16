import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editExercise } from "../../actions/courseAction";

const EditExercisesModel = ({ courseTasks, showExercisesModal, isExercisesShowModal, course }) => {
  const [title, setTitle] = useState(courseTasks?.title);
  const [id, setId] = useState(courseTasks?.id);
  const dispatch = useDispatch();

  const handleClose = () => {
    isExercisesShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updates = {
      id: id,
      title: title,
    };
    const updatedCourseTask = { ...courseTasks, ...updates };
    dispatch(editExercise(course.id, courseTasks.id, updatedCourseTask));
    alert('Edit successfully');
    handleClose();
  };

  return (
    <div>
      <Modal show={showExercisesModal} onHide={handleClose} className="my-modal-event">
        <Modal.Header closeButton>
          <Modal.Title className="modal-title w-100 text-center">Edit Exercises</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Lesson</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <Form.Label>Assignment Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Button className="mt-4 text-center" variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditExercisesModel;