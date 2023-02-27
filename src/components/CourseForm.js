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
  const [file, setFile] = useState(null);
  const [imagePath, setImagePath] = useState('');
  const [startDay, setStartDay] = useState('')
  const [endDay, setEndDay] = useState('')


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

  const handleStartDay = e => {
    setStartDay(e.target.value);
  };

  const handleEndDay = e => {
    setEndDay(e.target.value);
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

  const onChangeImage = e => {
    const file = e.target.files[0];
    setFile(file);
    setImagePath(URL.createObjectURL(file));
  };


  const handleSubmit = async e => {
    e.preventDefault();
    const newExercise = {
      id: exerciseId,
      title: exerciseTitle,
      completed: false
    };
    const arr = [newExercise];
    const exercisesLength = exercises.filter((item)=>item.completed === true).length
    const course = {
      title,
      category,
      description,
      favorite: false,
      startDay,
      endDay,
      exercisesLength: exercisesLength,
      length: exercises.length,
      tasks: exercises.length > 0 ? exercises : [...arr],
      imagepath: imagePath
    };
    dispatch(addCourse(course));
    setTitle('');
    setCategory('');
    setDescription('');
    setImagePath('');
    history('/')
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 style={{ textAlign: 'center', marginTop: 30 }}>Add Course</h2>
      <Form.Group className="mb-3 mx-5">
        <Form.Label type="title"><h4>Course Title:</h4></Form.Label>
        <Form.Control required value={title} id="title" type="text" onChange={handleTitleChange} placeholder="Input Title" />
      </Form.Group>
      <Form.Group className="mb-3 mx-5">
        <Form.Label><h4>Category:</h4></Form.Label>
        <Form.Control required value={category} id="category" type="text" onChange={handleCategoryChange} placeholder="Input category" />
      </Form.Group>
      <Form.Group className="mb-3 mx-5">
        <Form.Label><h4>Description</h4></Form.Label>
        <Form.Control required value={description} id="description" type="text" onChange={handleDescriptionChange} placeholder="Input description" />
      </Form.Group>
      <Form.Group className="mb-3 mx-5">
        <Form.Label><h4>Start Day</h4></Form.Label>
        <Form.Control required value={startDay} id="description" type="date" onChange={handleStartDay} placeholder="Input Start Day" />
      </Form.Group>
      <Form.Group className="mb-3 mx-5">
        <Form.Label><h4>End Day</h4></Form.Label>
        <Form.Control required value={endDay} id="description" type="date" onChange={handleEndDay} placeholder="Input End Day" />
      </Form.Group>
      <Form.Group controlId="formFileSm" className="mb-3 mx-5">
        <Form.Label>Image: </Form.Label>
        <Form.Control type="file" accept='.jpg, .png, .jpeg' onChange={onChangeImage} size="sm" />
      </Form.Group>
      <Form.Group className="mb-3 mx-5">
        <Form.Label><h4>Exercise Title:</h4></Form.Label>
        <Form.Control value={exerciseTitle} id="exerciseTitle" type="text" onChange={handleExerciseTitleChange} placeholder="Input exercise title" />
      </Form.Group>
      <div className='d-flex justify-content-center'>
        <Button className='mx-5' variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="secondary" type="button" onClick={handleAddExercise}>
          Add Exercise
        </Button>
      </div>
      {exercises.length > 0 &&
        <div>
          <h3 className='mx-5 my-3'>Exercises:</h3>
          <ul>
            {exercises.map(exercise => (
              <li className='mx-5' key={exercise.id}>
                #{exercise.id}---------{exercise.title}
              </li>))}
          </ul>
        </div>
      }

    </Form>
  );
};

export default CourseForm;