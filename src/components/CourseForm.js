import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../actions/courseAction';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const CourseForm = () => {
  const dispatch = useDispatch();
  let history = useNavigate()

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [exerciseTitle, setExerciseTitle] = useState('');
  const [exercises, setExercises] = useState([]);
  const [exerciseId, setExerciseId] = useState(1);

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = e => {
    setCategory(e.target.value);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const handleExerciseTitleChange = e => {
    setExerciseTitle(e.target.value);
  };

  const handleAddExercise = e => {
    e.preventDefault();
    const newExercise = {
      id: exerciseId,
      title: exerciseTitle,
      completed: false
    };
    setExercises([...exercises, newExercise]);
    setExerciseTitle('');
    setExerciseId(exerciseId + 1);
  };


  const handleSubmit =async e => {
    e.preventDefault();
    const newExercise = {
      id: exerciseId,
      title: exerciseTitle,
      completed: false
    };
    const course = {
      title,
      category,
      description,
      favorite: false,
      tasks: [newExercise]
    };
      dispatch(addCourse(course));
      setTitle('');
      setCategory('');
      setDescription('');
      history('/')
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 style={{textAlign:'center'}}>Add Course</h2>
      <p style={{color:'black'}}>
              <Link to="/">All Course</Link>    
       </p>
          <Form.Group className="mb-2">
              <Form.Label type="title">Course Title:</Form.Label>
              <Form.Control required value={title} id="title" type="text" onChange={handleTitleChange} placeholder="Input Title" />
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label>Category:</Form.Label>
              <Form.Control required value={category} id="category" type="text" onChange={handleCategoryChange} placeholder="Input category" />
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label>description</Form.Label>
              <Form.Control required value={description} id="description" type="text" onChange={handleDescriptionChange} placeholder="Input description" />
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label>Exercise Title:</Form.Label>
          <Form.Control value={exerciseTitle} id="exerciseTitle" type="text" onChange={handleExerciseTitleChange} placeholder="Input exercise title" />
        </Form.Group>
          <Button variant="primary" type="submit">
              Submit
          </Button>
          <Button variant="secondary" type="button" onClick={handleAddExercise}>
        Add Exercise
      </Button>
      {exercises.length > 0 && 
        <div>
          <h3>Exercises:</h3>
          <ul>
            {exercises.map(exercise => (
              <li key={exercise.id}>
                {exercise.title}
              </li>))}
            </ul>
          </div>
      }
        
      </Form>
  );
};

export default CourseForm;