import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editExercise } from "../../actions/courseAction";

const EmojiModal = ({showModalEmoji, setShowModalEmoji}) => {

    const handleClose =()=>{
        setShowModalEmoji(false);
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
            Tạo Bài Viết
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="body-modal">
            <section class="post">
              <form action="#">
                <div class="content">
                  <img src="./assets/img/Home/faptv-bg.jpg" alt="" />
                  <div class="details">
                    <p>Hoàng Lê</p>
                    <div class="privacy">
                      <i class="fas fa-user-friends"></i>
                      <span>Friends</span>
                      <i class="fas fa-caret-down"></i>
                    </div>
                  </div>
                </div>

                {/* Component Editor */}
                <div className="custom-editor">
                </div>

                <div class="theme-emoji">
                  <img src="./img/theme.svg" alt="" />
                  <img src="./img/smile.svg" alt="" />
                </div>
                <div class="options">
                  <p>Thêm vào bài viết của bạn</p>
                  <ul class="list">
                    <li><img src="./img/gallery.svg" alt="" /></li>
                    <li><img src="./img/tag.svg" alt="" /></li>
                    <li><img src="./img/emoji.svg" alt="" /></li>
                    <li><img src="./img/mic.svg" alt="" /></li>
                    <li><img src="./img/more.svg" alt="" /></li>
                  </ul>
                </div>
                <button onClick={focus}>Post</button>
              </form>
            </section>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EmojiModal;