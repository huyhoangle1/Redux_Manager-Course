import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../actions/courseAction';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import moment from 'moment'

const CourseForm = () => {
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  let history = useNavigate()

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [exerciseTitle, setExerciseTitle] = useState('');
  const [exercises, setExercises] = useState([]);
  const [exerciseId, setExerciseId] = useState(1);
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
    console.log(e);
    e.preventDefault();
    const newExercise = {
      id: exerciseId,
      title: exerciseTitle,
      completed: false
    };
    if (exercises.length === 0) {
      console.log(exerciseTitle);
      if (exerciseTitle === '') {
        alert('Không được để trống')
      } else {
        setExercises([...exercises, newExercise]);
      }
    } else {
      setExercises([...exercises, newExercise]);
    }
    setExerciseTitle('');
    setExerciseId(exerciseId + 1);
  };

  const onChangeImage = e => {
    const file = e.target.files[0];
    setImagePath(URL.createObjectURL(file));
  };


  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.currentTarget;
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    const valid = !!title && !!category && description.length >= 200;

    if (valid) {
      const newExercise = {
        id: exerciseId,
        title: exerciseTitle,
        completed: false
      };
      const arr = [newExercise];
      const exercisesLength = exercises.filter((item) => item.completed === true).length
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

      setValidated(valid);

      alert('Add successfully');
      history('/allCourse')
    } else {
      setValidated(valid);
    }
  };


  return (
    <Form noValidate onSubmit={handleSubmit} validated={validated}>
      <h2 style={{ textAlign: 'center', marginTop: 30 }}>Add Course</h2>
      <Form.Group className="mb-3 mx-5" controlId="validationCustom01">
        <Form.Label type="title">
          <h3>Course Title:</h3>
        </Form.Label>
        <Form.Control
          required
          value={title}
          type="text"
          onChange={handleTitleChange}
          placeholder="Input Title"
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid course title.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 mx-5" controlId="validationCustom02">
        <Form.Label><h3>Category:</h3></Form.Label>
        <Form.Control
          required
          value={category}
          type="text"
          onChange={handleCategoryChange}
          placeholder="Input category"
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid category.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 mx-5" controlId="validationCustom03">
        <Form.Label>
          <h3>Description</h3>
        </Form.Label>
        <Form.Control
          required
          value={description}
          as="textarea"
          rows={10}
          minLength={200}
          onChange={handleDescriptionChange}
          placeholder="Input description"
          pattern=".{200,}"
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid description with minimum 200 lines.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 mx-5" controlId="validationCustom04">
        <Form.Label>
          <h3>Start Day</h3>
        </Form.Label>
        <Form.Control
          required
          value={startDay}
          type="date"
          onChange={handleStartDay}
          placeholder="Input Start Day"
        />
        <Form.Control.Feedback type="invalid">
          Please choose a start day.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 mx-5" controlId="validationCustom05">
        <Form.Label>
          <h3>End Day</h3>
        </Form.Label>
        <Form.Control
          required
          value={endDay}
          type="date"
          onChange={handleEndDay}
          placeholder="Input End Day"
        />
        <Form.Control.Feedback type="invalid">
          Please choose an end day.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formFileSm" className="mb-3 mx-5">
        <Form.Label>Image: </Form.Label>
        <Form.Control
          type="file"
          accept=".jpg,.png,.jpeg"
          onChange={onChangeImage}
          size="sm"
        />
      </Form.Group>
      <Form.Group className="mb-3 mx-5">
        <Form.Label>
          <h3>Exercise Title:</h3>
        </Form.Label>
        <Form.Control
          value={exerciseTitle}
          // id="exerciseTitle"
          type="text"
          onChange={handleExerciseTitleChange}
          placeholder="Input exercise title"
        />
      </Form.Group>
      <div className="d-flex justify-content-center">
        <Button className="mx-5" variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="secondary" type="button" onClick={handleAddExercise}>
          Add Exercise
        </Button>
      </div>
      {exercises.length > 0 && (
        <div>
          <h3 className="mx-5 my-3">Danh sách bài học:</h3>
          <ul>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên Bài</th>
                </tr>
              </thead>
              <tbody>
                {exercises.map((exercise) => (
                  <tr key={exercise.id}>
                    <td>{exercise.id}</td>
                    <td>{exercise.title}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </ul>
        </div>
      )}
    </Form>

  );
};

export default CourseForm;