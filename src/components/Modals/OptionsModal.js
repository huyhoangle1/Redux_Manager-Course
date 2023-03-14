import React, { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";

const OptionsModal = ({ showModalOptions, setShowModalOptions, isShowModal }) => {

  const handleClose = () => {
    setShowModalOptions(false);
    isShowModal(true)
  }

  return (
    <div>
      <Modal
        show={showModalOptions}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        className="my-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title w-100 text-center">
            Thêm vào bài viết của bạn
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="row row-cols-2">
            <div class="col">
              <div class="options-modal">
                <li><img src="./img/gallery.svg" alt="" /></li>
                <span>Ảnh/Video</span>
              </div>
            </div>
            <div class="col">
              <div class="options-modal">
                <li><img src="./img/tag.svg" alt="" /></li>
                <span>Gắn Thẻ Người Khác</span>
              </div>
            </div>
            <div class="col">
              <div class="options-modal">
                <li><img src="./img/emoji.svg" alt="" /></li>
                <span>Cảm xúc/Hoạt động</span>
              </div>
            </div>
            <div class="col">
              <div class="options-modal">
                <li><img src="./img/mic.svg" alt="" /></li>
                <span>Check in</span>
              </div>
            </div>
            <div class="col">
              <div class="options-modal">
                <li><img src="./img/gallery.svg" alt="" /></li>
                <span>Sự kiện trong đời</span>
              </div>
            </div>
            <div class="col">
              <div class="options-modal">
                <li><img src="./img/gallery.svg" alt="" /></li>
                <span>File GIF</span>
              </div>
            </div>
            <div class="col">
              <div class="options-modal">
                <li><img src="./img/gallery.svg" alt="" /></li>
                <span>Video trực tiếp</span>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default OptionsModal;