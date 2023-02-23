import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editExercise } from "../actions/courseAction";

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
    handleClose();
  };

  return (
    <div>
      <Modal show={showExercisesModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Exercises</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
            <Form.Label>#</Form.Label>
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
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditExercisesModel;