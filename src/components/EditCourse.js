import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editCourse } from '../actions/courseAction';
import { Button, Form, Table, Modal } from 'react-bootstrap';

const EditCourse = ({ course, isShow, show }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(course.title);
  const [category, setCategory] = useState(course.category);
  const [description, setDescription] = useState(course.description);
  const [exercises, setExercises] = useState(course.exercises);

  const handleTitleChange = e => setTitle(e.target.value);
  const handleTypeChange = e => setCategory(e.target.value);
  const handleDescriptionChange = e => setDescription(e.target.value);
  const handleExercisesChange = e => setExercises(e.target.value);

  const handleEditCourse = e => {
    e.preventDefault();
    const updatedCourse = { title, category, description, exercises };
    dispatch(editCourse(course.id, updatedCourse));
    isShow(false);
  };

  const handleClose = () => {
    isShow(false);
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Course Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditCourse}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control value={title} onChange={handleTitleChange} type="text" />
              <Form.Control value={category} onChange={handleTypeChange} type="text" />
              <Form.Control value={description} onChange={handleDescriptionChange} type="text" />
              <Form.Control value={exercises} onChange={handleExercisesChange} type="text" size="sm20" />
            </Form.Group>
            <div style={{ textAlign: 'center' }}>
              <Button variant="primary" type="submit">Save Changes</Button>
              <Button className='ms-3' variant="primary" type="button" onClick={() => isShow(false)}>Cancel</Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditCourse;