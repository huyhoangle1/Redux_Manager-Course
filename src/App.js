import React from 'react';
import { useSelector } from 'react-redux';
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';
import SearchBar from './components/SearchBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/layouts/header/header';
import FavoriteList from './components/favoriteList';

const App = () => {
  const courses = useSelector(state => state.courses);

  return (
    <div>
    <Header />
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<CourseList courses={courses} />}/>
        <Route path="/Add" element={<CourseForm />}/>
        <Route path="/search" element={<SearchBar />}/>
        <Route path="/myfavorite" element={<FavoriteList />}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
};

export default App;