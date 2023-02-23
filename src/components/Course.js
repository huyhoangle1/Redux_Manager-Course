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
            <th scope="col">Name/Info</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <div style={{ textAlign: 'center', width: 150, height: 150, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>{course.title}</div>
                <Button variant='primary' className='ms-3' onClick={infoStatus}>info</Button>
              </div>
            </th>
            <th className='p-4' style={{ width: 80 }}>{course.category}</th>
            <th className='p-4' style={{ width: 800 }}>{course.description}</th>
            <th style={{ justifyContent: 'center', display: 'flex', height: 200, alignItems: 'center' }}>
              <div>
                <Button style={{ width: 100 }} variant="primary" onClick={handleToggleFavorite}>
                  {course.favorite ? 'Unfavorite' : 'Favorite'}
                </Button>
                <Button className='m-5' style={{ width: 100 }} variant="primary" onClick={handleDelete}>
                  Delete
                </Button>
                <Button style={{ width: 100 }} variant="primary" onClick={showElement}>
                  Edit
                </Button>
              </div>
            </th>
          </tr>
        </tbody>
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