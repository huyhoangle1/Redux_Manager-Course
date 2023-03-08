import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../actions/courseAction';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import moment from 'moment'

const CourseForm = () => {
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
    if(exercises.length === 0) {
      console.log(exerciseTitle);
      if(exerciseTitle === ''){
        alert('Không được để trống')
      }else{
        setExercises([...exercises, newExercise]);
      }
    }else{
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
    const startDate = new Date(startDay);
    const endDate = new Date(endDay);
    const today = new Date();
    if(!title){
      alert('Vui lòng điền title');
    }else if(!category){
      alert('Vui lòng điền category');
    }else if(description.length < 200){
      alert('Vui lòng điền description và điền ít nhất 200 kí tự');
    }else if (!startDay || !moment(startDay, 'YYYY-MM-DD', true).isValid()) {
      alert('Vui lòng nhập start day theo định dạng YYYY-MM-DD');
      setStartDay('');
    }else if (!endDay || !moment(endDay, 'YYYY-MM-DD', true).isValid()) {
      alert('Vui lòng nhập end day theo định dạng YYYY-MM-DD');
      setEndDay('');
    }else if (startDate < today) {
      alert("Ngày bắt đầu không được phép trước ngày hiện tại.");
      setStartDay('');
    } else if (startDate > endDate) {
      alert("Ngày kết thúc không được phép trước ngày bắt đầu.");
      setEndDay('');
    } else if (exercises.some(exercise => !exercise.title.trim())) {
      alert('Vui lòng điền tên cho tất cả các bài tập');
    } else {
      dispatch(addCourse(course));
      setTitle('');
      setCategory('');
      setDescription('');
      setImagePath('');
      alert('success');
      history('/')
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 style={{ textAlign: 'center', marginTop: 30 }}>Add Course</h2>
      <Form.Group className="mb-3 mx-5">
        <Form.Label type="title"><h3>Course Title:</h3></Form.Label>
        <Form.Control value={title} id="title" type="text" onChange={handleTitleChange} placeholder="Input Title" />
      </Form.Group>
      <Form.Group className="mb-3 mx-5">
        <Form.Label><h3>Category:</h3></Form.Label>
        <Form.Control value={category} id="category" type="text" onChange={handleCategoryChange} placeholder="Input category" />
      </Form.Group>
      <Form.Group className="mb-3 mx-5">
        <Form.Label><h3>Description</h3></Form.Label>
        <Form.Control value={description} id="description" type="text" onChange={handleDescriptionChange} placeholder="Input description" />
      </Form.Group>
      <Form.Group className="mb-3 mx-5">
        <Form.Label><h3>Start Day</h3></Form.Label>
        <Form.Control value={startDay} id="description" type="date" onChange={handleStartDay} placeholder="Input Start Day" />
      </Form.Group>
      <Form.Group className="mb-3 mx-5">
        <Form.Label><h3>End Day</h3></Form.Label>
        <Form.Control value={endDay} id="description" type="date" onChange={handleEndDay} placeholder="Input End Day" />
      </Form.Group>
      <Form.Group controlId="formFileSm" className="mb-3 mx-5">
        <Form.Label>Image: </Form.Label>
        <Form.Control type="file" accept='.jpg, .png, .jpeg' onChange={onChangeImage} size="sm" />
      </Form.Group>
      <Form.Group className="mb-3 mx-5">
        <Form.Label><h3>Exercise Title:</h3></Form.Label>
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
          <h3 className='mx-5 my-3'>Danh sách bài học:</h3>
          <ul>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên Bài</th>
                </tr>
              </thead>
              <tbody>
                {exercises.map(exercise => (
                  <tr key={exercise.id}>
                    <td>{exercise.id}</td>
                    <td>{exercise.title}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </ul>
        </div>
      }

    </Form>
  );
};

export default CourseForm;