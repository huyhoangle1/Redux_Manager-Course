import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCourse, toggleFavorite, editCourse } from '../actions/courseAction';
import Course from './Course';
import {  Link } from "react-router-dom";
import { Button,Modal } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


const InfoModel = ({course, showModal, isShowModal}) => {

    const handleClose=()=>{
      isShowModal(false);
      console.log(course);
    }

  return (
    <div>
      <Modal show={showModal} onHide={handleClose}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Course Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Tên Khóa Học : {course.title}</h4>
        <p>
          Nội Dung Khóa Học: {course.description}
        </p>
        <h2>Danh Sách Bài Tập:</h2>
        <Table >
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên Bài</th>
                        <th>Tình Trạng</th>
                    </tr>
                    </thead>
                    <tbody>
                    {course.exercises?.map((item, index) =>
                        <tr key={`stydy-${index}`} className="number">
                            <td>{item?.id}</td>
                            <td>{item?.title}</td>
                            <td>{item?.completed ? "Hoàn Thành" : "Không Hoàn Thành"}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
};

export default InfoModel;