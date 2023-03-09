import React, { useEffect, useState, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import "./style.css";
import { Editor, EditorState } from 'draft-js';
import "draft-js/dist/Draft.css";

const CreatePostFbModel = ({ showModal, isShowModal }) => {

  const editorRef = useRef(); // tạo reference để lấy DOM của component Editor
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(), // Khởi tạo EditorState với nội dung rỗng
  );
  
  // Hàm focus vào component khi click vào custom-editor
  const focus = () => {
    console.log(editorState)
    editorRef.current.focus();
  }

  // Hàm đóng Modal
  const handleClose = () => {
    isShowModal(false);
    setEditorState(EditorState.createEmpty()); // Reset lại EditorState khi đóng Modal
  };

  return (
    <div>
      <Modal
        show={showModal}
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
                <div className="custom-editor" onClick={focus}>
                  <Editor
                    placeholder="Hoàng ơi, Bạn đang nghĩ gì thế?"
                    ref={editorRef} // Gán reference vào component Editor
                    editorState={editorState}
                    onChange={setEditorState}
                  />
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
                <button>Post</button>
              </form>
            </section>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CreatePostFbModel;