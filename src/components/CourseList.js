import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCourse, toggleFavorite, editCourse } from '../actions/courseAction';
import Course from './Course';
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';
import { Button } from 'react-bootstrap';


const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses);

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem('coursesState'));
    if (savedCourses) {
      dispatch({ type: 'SET_COURSES', courses: savedCourses });
    }
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteCourse(id));
  };

  const handleToggleFavorite = id => {
    dispatch(toggleFavorite(id));
  };

  const renderCourses = () => {
    if (courses.length === 0) {
      return (<h3 style={{textAlign: 'center', color: 'red'}}>No courses found.</h3>)
    } else {
      return courses.map(course => (
        <div key={course.id}>
          <Course
            course={course}
            onDelete={handleDelete}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>
      ))
    }
  };


  return (
    <div>
      <h2 className='mb-5 mt-5' style={{ textAlign: 'center', color: 'violet' }}>All Courses</h2>
      {renderCourses()}
      <Button variant="outline-primary"  style={{marginLeft:15}}><Link to="/add">Add Course</Link></Button>
    </div>
  );
};

export default CourseList;