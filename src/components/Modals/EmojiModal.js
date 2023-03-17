import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { setChooseEmoji } from "../../actions/courseAction";
import { useDispatch, useSelector } from "react-redux";

const EmojiModal = ({ showModalEmoji, setShowModalEmoji, isShowModal }) => {
  const dataChooseEmoji = useSelector((state) => state.chooseEmoji);

  const dispatch = useDispatch();

  const icoins = [
    {
      id: 1,
      name: "Thích thú",
      icon: "❤️",
      count: 100
    },
    {
      id: 2,
      name: "Yêu đời",
      icon: "❤️️",
      count: 50
    },
    {
      id: 3,
      name: "vui vẻ",
      icon: "😂",
      count: 30
    },
    {
      id: 4,
      name: "ngạc nhiên",
      icon: "😮",
      count: 10
    },
    {
      id: 5,
      name: "Buồn",
      icon: "😢",
      count: 5
    },
    {
      id: 6,
      name: "Đói",
      icon: "😡",
      count: 2
    },
    {
      id: 6,
      name: "Angry",
      icon: "😡",
      count: 2
    },
    {
      id: 6,
      name: "Angry",
      icon: "😡",
      count: 2
    },
    {
      id: 6,
      name: "Angry",
      icon: "😡",
      count: 2
    },
    {
      id: 6,
      name: "Angry",
      icon: "😡",
      count: 2
    },
    {
      id: 6,
      name: "Angry",
      icon: "😡",
      count: 2
    },
    {
      id: 6,
      name: "Angry",
      icon: "😡",
      count: 2
    },
    {
      id: 6,
      name: "Angry",
      icon: "😡",
      count: 2
    },
    {
      id: 6,
      name: "Angry",
      icon: "😡",
      count: 2
    },
    {
      id: 6,
      name: "Angry",
      icon: "😡",
      count: 2
    },
    {
      id: 6,
      name: "Angry",
      icon: "😡",
      count: 2
    },
    {
      id: 6,
      name: "Angry",
      icon: "😡",
      count: 2
    },
    {
      id: 6,
      name: "Angry",
      icon: "😡",
      count: 2
    },
    {
      id: 6,
      name: "Angry",
      icon: "😡",
      count: 2
    },
    {
      id: 6,
      name: "Angry",
      icon: "😡",
      count: 2
    },
    {
      id: 6,
      name: "Angry",
      icon: "😡",
      count: 2
    },
    {
      id: 6,
      name: "Angry",
      icon: "😡",
      count: 2
    },


  ];


  const chooseEmoji = (item) => {
    const isSelected = dataChooseEmoji.id === item.id;
    dispatch(setChooseEmoji(isSelected ? {} : item));
    setShowModalEmoji(false);
    isShowModal(true);
  };
  

  const handleClose = () => {
    setShowModalEmoji(false);
    isShowModal(true)
  }

  return (
    <div>
      <Modal
        show={showModalEmoji}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        className="my-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title w-100 text-center">
            Bạn đang cảm thấy thế nào?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="tab-emoji">
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Cảm xúc">
                <div className="row-feeling-container">
                  <Form.Control className="input-search-friend" size="lg" type="text" placeholder="Tìm kiếm" />
                  <div class="row-feeling" id="style-1">
                    <div class="row row-cols-2">
                    {icoins.map((item) => (
                      <div key={item.id} class="col">
                          <div onClick={() => chooseEmoji(item)} class={`column-feeling ${[dataChooseEmoji][0].id === item.id ? "selected" : ""}`}>
                            <div className="emoji">{item.icon}</div>
                            <span>{item.name}</span>
                          </div>
                      </div>
                    ))}
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="profile" title="Hoạt Động">
                <div className="row-activity-container">
                  <Form.Control className="input-search-friend" size="lg" type="text" placeholder="Tìm kiếm" />
                  <div class="row-activity" id="style-1">
                    <div class="row">
                      {icoins.map((item) => (
                        <div class="column-activity-fa">
                          <div className="column-activity">
                            <div className="emoji">{item.icon}</div>
                            <span>{item.name}</span>
                          </div>
                          <i class="fa fa-arrow-right"></i>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EmojiModal;