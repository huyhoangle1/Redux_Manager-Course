import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import EditCourse from './EditCourse';
import { editCourse } from '../actions/courseAction';
import InfoModel from './InfoModel'

const Course = ({ course, onDelete, onToggleFavorite }) => {
  const [show, isShow] = useState(false);
  const [showModal, isShowModal] = useState(false);
  const handleDelete = () => {
    onDelete(course.id);
  };

  const showElement = () => {
    isShow(true);
  };

  const infoStatus = () => {
    isShowModal(true);
  };

  const handleToggleFavorite = () => {
    onToggleFavorite(course.id);
    console.log((course));
  };

  const handleEdit = (id, newCourse) => {
    dispatch(editCourse(id, newCourse));
  }

  return (
    <div className="course">
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th style={{width:250}}>{course.title}
          <Button className='ms-2' variant='primary' onClick={infoStatus}>info</Button>
          </th>
          <th style={{width:80}}>{course.category}</th>
          <th style={{width:800}}>{course.description}</th>
          <th> 
          <div>
            <Button variant="primary" onClick={handleToggleFavorite}>
                {course.favorite ? 'Unfavorite' : 'Favorite'}
            </Button>
            <Button style={{marginLeft: 50, marginRight: 50}} variant="primary" onClick={handleDelete}>
                Delete
            </Button>
            <Button variant="primary" onClick={showElement}>
                Edit
            </Button>
          </div>
          </th>
        </tr>
      </thead>
    </Table>
    <div>
      {
        showModal ?
         <InfoModel
            course={course}
            showModal={showModal}
            isShowModal={isShowModal}
         /> : 
         <div></div>
      }
    </div>
    <div>
            {
              show ?
               <EditCourse 
                    course={course}
                    onEdit={handleEdit}
                    isShow={isShow}
                    show={show}
               /> : 
               <div></div>
            }
          </div>
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