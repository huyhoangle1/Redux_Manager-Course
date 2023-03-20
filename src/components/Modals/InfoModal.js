import React, { useEffect, useState, useRef } from 'react';
import { Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import EditExercisesModel from "./EditExercisesModal";
import { useDispatch } from "react-redux";
import { useReactToPrint } from 'react-to-print'
import { exerciseStatus } from "../../actions/courseAction";

const InfoModel = ({ course, showModal, isShowModal }) => {
  const dispatch = useDispatch();
  const [showExercisesModal, isExercisesShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const handleOpen = (item) => {
    setEditItem(item);
    isExercisesShowModal(true);
  };
  const componentRef = useRef()
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: 'Bill Room',
      onAfterPrint: () => toast.success('Print Success!')
    })

  const handleClose = () => {
    isShowModal(false);
  };

  const handleExerciseStatus = (item) => {
    dispatch(exerciseStatus(course.id, item.id));
  };

  const renderButton = (item) => {
    return (
      <div className="d-flex justify-content-center my-auto align-items-center">
        <Button style={{ width: 100 }} className="me-5" onClick={() => handleOpen(item)}>Edit</Button>
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
        aria-labelledby="contained-modal-title-vcenter"
        className="my-modal-event"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title w-100 text-center">
            Course Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body ref={componentRef}>
          <h4>Course Name: {course?.title}</h4>
          <p>Course Description: {course?.description}</p>
          <h2>Exercise List:</h2>
          <Table>
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th>#</th>
                <th>Assignment Name</th>
                <th>Exercise Status</th>
                <th>Extend</th>
              </tr>
            </thead>
            <tbody>
              {course?.tasks?.map((item, index) => (
                <tr style={{ textAlign: "center" }} className="number">
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
          <Button onClick={handlePrint}>Print</Button>
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
