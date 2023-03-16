import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCourse, toggleFavorite } from '../actions/courseAction';
import Course from './Course';


const Home = () => {

  return (
    <div>
        <img src="https://openend.vn/wp-content/uploads/2021/12/dao-tao-nhan-su-moi-scaled.jpg" />
    </div>
  );
};

export default Home;