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
    console.log(item);
    setEditItem(item);
    isExercisesShowModal(true);
  };

  const handleClose = () => {
    isShowModal(false);
    console.log(course);
  };

  const handleToggleFavorite = item => {
    dispatch(exerciseStatus(item.id));
  };

  const renderButton = (item) => {
    return (
      <div>
        <Button onClick={() => handleOpen(item)}>Sửa Bài Tập</Button>
        <Button
          variant="primary"
          onClick={() => handleToggleFavorite(item)}
        >
          {item?.completed ? "Chưa Hoàn Thành" : "Hoàn Thành"}
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
          <h4>Tên Khóa Học : {course.title}</h4>
          <p>Nội Dung Khóa Học: {course.description}</p>
          <h2>Danh Sách Bài Tập:</h2>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Tên Bài</th>
                <th>Tình Trạng</th>
                <th>Chức Năng</th>
              </tr>
            </thead>
            <tbody>
              {course.tasks?.map((item, index) => (
                <tr className="number">
                  <td>{item?.id}</td>
                  <td>{item?.title}</td>
                  <td>
                    {item?.completed ? "Hoàn Thành" : "Chưa Hoàn Thành"}
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
