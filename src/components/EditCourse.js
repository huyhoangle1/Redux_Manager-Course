import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editCourse } from '../actions/courseAction';
import { Button, Form, Table } from 'react-bootstrap';

const EditCourse = ({ course, closeEditModal }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(course.title);
  const [type, setType] = useState(course.category);
  const [description, setDescription] = useState(course.description);
  const [exercises, setExercises] = useState(course.exercises);

  const handleTitleChange = e => setTitle(e.target.value) ;
  const handleTypeChange = e => setType(e.target.value);
  const handleDescriptionChange = e => setDescription(e.target.value);
  const handleExercisesChange = e => setExercises(e.target.value);

  const handleEditCourse = e => {
    e.preventDefault();
    const updatedCourse = { title, type, description, exercises };
    dispatch(editCourse(course.id, updatedCourse));
    closeEditModal();
  };

  return (
    <div>
      <Form onSubmit={handleEditCourse}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control value={title} onChange={handleTitleChange} type="text" />
          <Form.Control value={type} onChange={handleTypeChange} type="text" />
          <Form.Control value={description} onChange={handleDescriptionChange} type="text" />
          <Form.Control value={exercises} onChange={handleExercisesChange} type="text" size="sm20" />
        </Form.Group>
        <Button className='ms-5 mb-5' variant="primary" type="submit">Save Changes</Button>
        <Button className='ms-5 mb-5' variant="primary" type="button" onClick={()=> closeEditModal()}>Cancel</Button> 
   </Form>
        </div>
  );
};

export default EditCourse;