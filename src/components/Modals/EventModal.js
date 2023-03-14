import React, { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editExercise } from "../../actions/courseAction";

const EventModal = ({ showModalEvent, setShowModalEvent, isShowModal }) => {

  const handleClose = () => {
    setShowModalEvent(false);
    isShowModal(true)
  }

  return (
    <div>
      <Modal
        show={showModalEvent}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        className="my-modal-event"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title w-100 text-center">
            Tạo sự kiện trong đời
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="event-container">
          <div className="header-create-event">
              <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/st43MlfQdGP.png"/>
            <div className="title-create-event">
              <span>Sự kiện trong đời</span>
              <p>Chia sẻ và ghi nhớ những khoảng khắc quan trọng trong đời</p>
            </div>
            <hr/>
          </div>
          <div className="body-create-event">
            <h3>Chọn hạng mục</h3>
            <div className="list-event">
            <div className="img-event">
                <li><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/tv-E-vHm5BI.png" alt="" /></li>
                <span>Công việc</span>
              </div>
            <div className="img-event">
                <li><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/ZiGEGoFHFZ7.png" alt="" /></li>
                <span>Học vấn</span>
              </div>
            <div className="img-event">
                <li><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/dd9WTBzGoR2.png" alt="" /></li>
                <span>Mối quan hệ</span>
              </div>
            <div className="img-event">
                <li><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/MpH7r7_alQv.png" alt="" /></li>
                <span>Nhà cửa & đời sống</span>
              </div>
            <div className="img-event">
                <li><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/ODn85oIZPRI.png" alt="" /></li>
                <span>Gia đình</span>
              </div>
            <div className="img-event">
                <li><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/5BeXaHy93jn.png" alt="" /></li>
                <span>Du lịch</span>
              </div>
            <div className="img-event">
                <li><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/6IVy4VvGN77.png" alt="" /></li>
                <span>Sở thích và hoạt động</span>
              </div>
            <div className="img-event">
                <li><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/y9RzANpUnRE.png" alt="" /></li>
                <span>Sức khỏa thể chất & tinh thần</span>
              </div>
            <div className="img-event">
                <li><img src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/by18u6-1Nj6.png" alt="" /></li>
                <span>Dấu mốc thành tựu</span>
              </div>
            <div className="img-event">
                <li><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/eSWk-rdJrYY.png" alt="" /></li>
                <span>Tưởng nhớ</span>
              </div>
            <div className="img-event">
                <li><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/uApTnyEWHEw.png" alt="" /></li>
                <span>Tạo sự kiện riêng</span>
              </div>
            </div>
          </div>
         </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EventModal;