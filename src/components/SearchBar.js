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
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
          <Form.Label type="title"><h3>Search Courses:</h3></Form.Label>
          <Form.Control value={query} id="search" type="text" onChange={handleQueryChange} />
          <Button className='mt-2' type="submit" variant="primary"> Search </Button>
      </Form.Group>
    </Form>
  );
};

export default SearchBar;