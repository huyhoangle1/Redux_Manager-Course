import React, { useState } from "react";
import { Modal, Button, Form, InputGroup  } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editExercise } from "../../actions/courseAction";

const FriendsModal = ({showModalFriends, setShowModalFriends}) => {

   const friends = [
    {
      id: 1,
      name: "Thomas Anderson",
      avatar: "https://i.pravatar.cc/150?img=1",
      status: "online"
    },
    {
      id: 2,
      name: "Trinity",
      avatar: "https://i.pravatar.cc/150?img=2",
      status: "offline"
    },
    {
      id: 3,
      name: "Morpheus",
      avatar: "https://i.pravatar.cc/150?img=3",
      status: "online"
    },
    {
      id: 4,
      name: "Cypher",
      avatar: "https://i.pravatar.cc/150?img=4",
      status: "away"
    },
    {
      id: 5,
      name: "Agent Smith",
      avatar: "https://i.pravatar.cc/150?img=5",
      status: "busy"
    },
    {
      id: 6,
      name: "Oracle",
      avatar: "https://i.pravatar.cc/150?img=6",
      status: "offline"
    },
    {
      id: 7,
      name: "Niobe",
      avatar: "https://i.pravatar.cc/150?img=7",
      status: "online"
    }
  ];
  
    const handleClose =()=>{
        setShowModalFriends(false);
    }

  return (
    <div>
      <Modal
        show={showModalFriends}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        className="my-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title w-100 text-center">
            Gán thẻ người khác
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="header-model-input-style">
          <Form.Control className="input-search-friend" size="lg" type="text" placeholder="Tìm kiếm bạn bè" />
            <span className="lblDone">Xong</span>
          </div>
          <div>GỢI Ý</div>
          <div>
          {friends.map((item)=>
            <div key={item.id} className="friends-list">
                 <img src={item.avatar} alt={item.name} />
                <div>{item.name}</div>
            </div>
          )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FriendsModal;