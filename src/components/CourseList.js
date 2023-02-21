import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCourse, toggleFavorite, editCourse } from '../actions/courseAction';
import Course from './Course';
import EditCourse from './EditCourse'


const CourseList = ({ courses }) => {
  const dispatch = useDispatch();
  const favoriteCourses = useSelector(state => state.courses.filter(course => course.favorite));

  const handleDelete = id => {
    dispatch(deleteCourse(id));
  };

  const handleToggleFavorite = id => {
    dispatch(toggleFavorite(id));
  };

  const handleEdit = (id, newCourse) => {
    dispatch(editCourse(id, newCourse));
  }

  const renderCourses = () => {
    if (courses.length === 0) {
      return <p>No courses found.</p>
    } else {
      return courses.map(course => (
        <div key={course.id}>
          <Course
            course={course}
            onDelete={handleDelete}
            onToggleFavorite={handleToggleFavorite}
          />
          <EditCourse
            course={course}
            onEdit={handleEdit}
          />
        </div>
      ));
    }
  };

  const renderFavoriteCourses = () => {
    if (favoriteCourses.length === 0) {
      return null;
    } else {
      return (
        <div className="favorite-courses">
          <h3 className='mb-5' style={{textAlign:'center'}}>Favorite Courses</h3>
          {favoriteCourses.map(course => (
            <div key={course.id}>
              <Course
                course={course}
                onDelete={handleDelete}
                onToggleFavorite={handleToggleFavorite}
              />
              {/* <Course
                course={course}
                onEdit={handleEdit}
              /> */}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      {renderFavoriteCourses()}
      <h2 className='mb-5 mt-5' style={{textAlign:'center'}}>All Courses</h2>
      {renderCourses()}
    </div>
  );
};

export default CourseList;