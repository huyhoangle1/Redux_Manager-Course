import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import EditCourse from './EditCourse';

const Course = ({ course, onDelete, onToggleFavorite }) => {
  const handleDelete = () => {
    onDelete(course.id);
  };


  const handleEdit = () => {
    onEdit(course.id);
  };

  const handleToggleFavorite = () => {
    onToggleFavorite(course.id);
    console.log((course));
  };

  return (
    <div className="course">
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>{course.title}</th>
          <th>{course.category}</th>
          <th>{course.description}</th>
          <th> 
          <Button className='ms-5' variant="primary" onClick={handleToggleFavorite}>
               {course.favorite ? 'Unfavorite' : 'Favorite'}
          </Button>
          <Button className="ms-5" variant="primary" onClick={handleDelete}>
               Delete
          </Button>
          <Button className="ms-5" variant="primary" onClick={handleEdit}>
               Edit
          </Button>
        </th>
        </tr>
      </thead>
    </Table>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired
};

export default Course;