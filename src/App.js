import React from 'react';
import { useSelector } from 'react-redux';
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';
import SearchBar from './components/SearchBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const courses = useSelector(state => state.courses);

  return (
    <div className="container">
      <h1 style={{textAlign:'center'}}>Course Manager</h1>
      <SearchBar />
      <CourseList courses={courses} />
      <CourseForm />
    </div>
  );
};

export default App;