import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import EditCourse from './EditCourse';
import { editCourse } from '../actions/courseAction';
import InfoModel from './Modals/InfoModal';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Course = ({ course, onDelete, onToggleFavorite }) => {
  const [show, isShow] = useState(false);
  const [showModal, isShowModal] = useState(false);
  const handleDelete = () => {
    onDelete(course.id);
    alert(`Delete successfully Course id:  ${course.id}`);
  };

  const showElement = () => {
    isShow(true);
  };

  const infoStatus = () => {
    isShowModal(true);
  };

  const handleToggleFavorite = () => {
    onToggleFavorite(course.id);
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
            <th scope='col'>Start Day</th>
            <th scope='col'>End Day</th>
            <th scope='col'>Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
            <div style={{ textAlign: 'center', width: 150, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={course.imagepath} alt={course.title} style={{ width: '20px', height: '20px', objectFit: 'cover', marginRight:"10px" }} />
              <div>{course.title}</div>
              <Button variant='primary' className='ms-3' onClick={infoStatus}>info</Button>
            </div>
            </th>
            <th className='p-4' style={{ width: 80 }}>{course.category}</th>
            <th className='p-4' style={{ maxWidth: 300, textOverflow: 'ellipsis', overflow:'hidden', whiteSpace:'nowrap',WebkitLineClamp:3 }}>{course.description}</th>
            <th style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', height:100 }}>
              <div>
                <Button style={{ width: 100 }} variant="primary" onClick={handleToggleFavorite}>
                  {course.favorite ? 'Unfavorite' : 'Favorite'}
                </Button>
                <Button className='m-4' style={{ width: 90 }} variant="primary" onClick={handleDelete}>
                  Delete
                </Button>
                <Button style={{ width: 90 }} variant="primary" onClick={showElement}>
                  Edit
                </Button>
              </div>
            </th>
            <th style={{width: 90}}>{course.startDay}</th>
            <th style={{width: 90}}>{course.endDay}</th>
            <th style={{width: 90}}><CircularProgressbar value={((Number(course.tasks.filter((a)=> a.completed).length) / Number(course.length)).toFixed(2))*100} text={`${((Number(course.tasks.filter((a)=> a.completed).length) / Number(course.length)).toFixed(2))*100}%`} /></th>
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