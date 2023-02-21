import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../actions/courseAction';
import data from '../data/course.json';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, Link } from 'react-router-dom';

const CourseForm = () => {
  const dispatch = useDispatch();
  let history = useNavigate()

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = e => {
    setCategory(e.target.value);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };


  const handleSubmit =async e => {
    e.preventDefault();
    const course = {
      title,
      category,
      description,
      favorite: false,
      tasks: []
    };
    console.log(data);
    data.courses.push(course);
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
          <Button variant="primary" type="submit">
              Submit
          </Button>
      </Form>
  );
};

export default CourseForm;