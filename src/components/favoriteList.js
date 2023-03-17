import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCourse, toggleFavorite, setChooseFriends  } from '../actions/courseAction';
import Course from './Course';


const FavoriteList = () => {
  const dispatch = useDispatch();
  const favoriteCourses = useSelector(state => state.courses.filter(course => course.favorite));

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem('coursesState'));
    if (savedCourses) {
      console.log(savedCourses, 'tttt');
      dispatch({ type: 'SET_COURSES', courses: savedCourses });
    }
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteCourse(id));
  };

  const handleToggleFavorite = id => {
    dispatch(toggleFavorite(id));
  };

  const renderFavoriteCourses = () => {
    if (favoriteCourses.length === 0) {
      return <h1 style={{ textAlign: 'center', marginTop: '15%' }}>No favorite found.</h1>;
    } else {
      return (
        <div className="favorite-courses">
          <h2 className='my-5' style={{ textAlign: 'center', color: 'red' }}>Favorite Courses</h2>
          {favoriteCourses.map(course => (
            <div key={course.id}>
              <Course
                course={course}
                onDelete={handleDelete}
                onToggleFavorite={handleToggleFavorite}
              />
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      {renderFavoriteCourses()}
    </div>
  );
};

export default FavoriteList;