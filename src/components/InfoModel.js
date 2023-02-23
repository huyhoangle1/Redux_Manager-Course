import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import EditExercisesModel from "./EditExercisesModel";
import { useDispatch } from "react-redux";
import { exerciseStatus } from "../actions/courseAction";

const InfoModel = ({ course, showModal, isShowModal }) => {
  const dispatch = useDispatch();
  const [showExercisesModal, isExercisesShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const handleOpen = (item) => {
    setEditItem(item);
    isExercisesShowModal(true);
  };

  const handleClose = () => {
    isShowModal(false);
  };

  const handleExerciseStatus = (item) => {
    dispatch(exerciseStatus(course.id, item.id));
  };

  const renderButton = (item) => {
    return (
      <div className="d-flex justify-content-center my-auto align-items-center">
        <Button style={{width:100}} className="me-5" onClick={() => handleOpen(item)}>Edit</Button>
        <Button
          variant="primary"
          onClick={() => handleExerciseStatus(item)}
        >
          {item?.completed ? "Complete" : "Unfinished"}
        </Button>
      </div>
    );
  };

  return (
    <div>
      <Modal
        show={showModal}
        onHide={handleClose}
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
          <h4>Course Name: {course.title}</h4>
          <p>Course Description: {course.description}</p>
          <h2>Exercise List:</h2>
          <Table>
            <thead>
              <tr style={{textAlign:"center"}}>
                <th>#</th>
                <th>Assignment Name</th>
                <th>Exercise Status</th>
                <th>Extend</th>
              </tr>
            </thead>
            <tbody>
              {course.tasks?.map((item, index) => (
                <tr style={{textAlign:"center"}} className="number">
                  <td>{item?.id}</td>
                  <td>{item?.title}</td>
                  <td>
                    {item?.completed ? "Complete" : "Unfinished"}
                  </td>
                  <td>
                    <div>{renderButton(item)}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <div>
          {showExercisesModal ? (
            <EditExercisesModel
              course={course}
              courseTasks={editItem}
              showExercisesModal={showExercisesModal}
              isExercisesShowModal={isExercisesShowModal}
            />
          ) : (
            <div></div>
          )}
        </div>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InfoModel;
