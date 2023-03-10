import React, { useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import "./style.css";
import { Editor, EditorState } from 'draft-js';
import "draft-js/dist/Draft.css";
import createImagePlugin from 'draft-js-image-plugin';
import Dropzone from 'react-dropzone';

const CreatePostFbModel = ({ showModal, isShowModal, closeModel, setShowModalFriends, setShowModalEmoji, setShowModalCheckin, setShowModalOptions, setShowModalEvent }) => {
  const [statusImage, setStatusImage] = useState(false);
  const [files, setFiles] = useState([]);
  const imagePlugin = createImagePlugin();
  const editorRef = useRef(); // tạo reference để lấy DOM của component Editor
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(), // Khởi tạo EditorState với nội dung rỗng
  );

  const handleDrop = (acceptedFiles) => {
    // Add code to handle file upload here
    setFiles(acceptedFiles);
  }


  // Hàm đóng Modal
  const handleClose = () => {
    isShowModal(false);
    setEditorState(EditorState.createEmpty()); // Reset lại EditorState khi đóng Modal
  };

  const handleOpenModalOptions = () => {
    setShowModalOptions(true);
    closeModel()
  };

  const handleOpenChooseImage =()=>{
    setStatusImage(true);
  }

  const handleOpenModalEvent = () => {
    setShowModalEvent(true);
    closeModel()
  };

  const handleOpenModalCheckIn = () => {
    setShowModalCheckin(true);
    closeModel()
  }


  const handleOpenModalFriends = () => {
    setShowModalFriends(true);
    closeModel()
  };

  const handleOpenModalEmoji = () => {
    setShowModalEmoji(true);
    closeModel()
  };



  // Hàm focus vào component khi click vào custom-editor
  const focus = () => {
    const content = editorState.getCurrentContent().getPlainText(); // lấy text input trong editor
    console.log(content);
    editorRef.current.focus();
  }


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
                    <p onClick={() => console.log(showModal)}>Hoàng Lê</p>
                    <div class="privacy">
                      <i class="fas fa-user-friends"></i>
                      <span>Friends</span>
                      <i class="fas fa-caret-down"></i>
                    </div>
                  </div>
                </div>

                {/* Component Editor */}
                <div className="custom-editor">
                  <Editor
                    placeholder="Hoàng ơi, Bạn đang nghĩ gì thế?"
                    ref={editorRef} // Gán reference vào component Editor
                    editorState={editorState}
                    onChange={setEditorState}
                  />
                </div>

                {statusImage == false ? ( <div class="theme-emoji">
                  <img src="./img/theme.svg" alt="" />
                  <img src="./img/smile.svg" alt="" />
                </div>) : (
                   <div>
                   <Dropzone onDrop={handleDrop}>
                     {({getRootProps, getInputProps}) => (
                       <div {...getRootProps()}>
                         <input {...getInputProps()} />
                         <span>Thêm ảnh/video</span>
                         <p>hoặc kéo và thả</p>
                       </div>
                     )}
                   </Dropzone>
                   <Editor
                     editorState={editorState}
                     onChange={(state) => setEditorState(state)}
                     plugins={[imagePlugin]}
                   />
                 </div>
                )} 
                <div class="options">
                  <p onClick={handleOpenModalOptions}>Thêm vào bài viết của bạn</p>
                  <ul class="list">
                    <li onClick={handleOpenChooseImage}><img src="./img/gallery.svg" alt="" /></li>
                    <li onClick={handleOpenModalFriends}><img src="./img/tag.svg" alt="" /></li>
                    <li onClick={handleOpenModalEmoji}><img src="./img/emoji.svg" alt="" /></li>
                    <li onClick={handleOpenModalCheckIn}><img src="./img/mic.svg" alt="" /></li>
                    <li onClick={handleOpenModalEvent}><img src="./img/mic.svg" alt="" /></li>
                    <li onClick={handleOpenModalOptions}><img src="./img/more.svg" alt="" /></li>
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

export default CreatePostFbModel;
