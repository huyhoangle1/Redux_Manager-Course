import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCourses } from '../actions/courseAction';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchCourses(query));
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex ms-5">
      <Form.Control
        value={query}
        id='search'
        type="text"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={handleQueryChange}
      />
      <Button type="submit" variant="outline-success">Search</Button>
    </Form>
  );
};

export default SearchBar;