import React from 'react';
import { useSelector } from 'react-redux';
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';
import SearchBar from './components/SearchBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  const courses = useSelector(state => state.courses);

  return (
    // <div className="container">
    //   <h1 style={{textAlign:'center'}}>Course Manager</h1>
    //   <SearchBar />
    //   <CourseList courses={courses} />
    //   <CourseForm />
    // </div>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<CourseList courses={courses} />}/>
        <Route path="/Add" element={<CourseForm />}/>
        <Route path="/search" element={<SearchBar />}/>
    </Routes>
  </BrowserRouter>
 
  );
};

export default App;