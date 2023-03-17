import React, { useEffect, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { setChooseFriends } from "../../actions/courseAction";
import { useSelector, useDispatch } from "react-redux";

const FriendsModal = ({ showModalFriends, setShowModalFriends, isShowModal }) => {
  const dispatch = useDispatch();
  const chooseFriends = useSelector((state) => state.chooseFriends);
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
      name: "Oracssle",
      avatar: "https://i.pravatar.cc/150?img=6",
      status: "offline"
    }
  ];

  const handleClose = () => {
    dispatch(setChooseFriends(chooseFriends));
    setShowModalFriends(false);
    isShowModal(true)
  }

  const handleChooseFriends = (index) => {
    if (chooseFriends.includes(index)) {
      const new_arr = chooseFriends.filter(item => item !== index);
      dispatch(setChooseFriends(new_arr));
    } else {
      const updatedList = [...chooseFriends, index];
      dispatch(setChooseFriends(updatedList));
    }
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
            Gắn thẻ người khác
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="header-model-input-style">
            <i class="fa fa-search"></i>
            <Form.Control className="input-search-friend" size="lg" type="text" placeholder="Tìm kiếm bạn bè" />
            <span onClick={handleClose} className="lblDone">Xong</span>
          </div>
          <div className="friends-list-container">
            {chooseFriends.length > 0 ? (<>
              <span className="assign-tags">Đã gắn thẻ</span>
              <div className="border-chooseFriends">
                {chooseFriends.map((item, index) =>
                  <div key={index} className="choose-Friend">{item}</div>
                )}
              </div></>) : null}
            <div className="scroll">
              <div className="suggest">GỢI Ý</div>
              <div className="friends-list" id="style-1">
                {friends.map((item) =>
                  <div key={item.id} className="info-friends" onClick={() => { handleChooseFriends(item.name) }}>
                    <img src={item.avatar} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FriendsModal;