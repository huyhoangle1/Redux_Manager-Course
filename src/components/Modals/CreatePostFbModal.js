import React, { useState, useRef, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./style.css";
import { Editor, EditorState } from 'draft-js';
import "draft-js/dist/Draft.css";
import createImagePlugin from 'draft-js-image-plugin';
import Dropzone from 'react-dropzone';
import { useSelector, useDispatch } from "react-redux";

const CreatePostFbModel = ({ showModal, isShowModal, closeModel, setShowModalFriends, setShowModalEmoji, setShowModalCheckin, setShowModalOptions, setShowModalEvent }) => {
  const chooseFriends = useSelector((state) => state.chooseFriends);
  const chooseEmoji = useSelector((state) => state.chooseEmoji);
  const chooseAddress = useSelector((state) => state.chooseAddress);
  const dispatch = useDispatch();

  useEffect(() => {
    const chooseFriendsFromStorage = JSON.parse(localStorage.getItem('chooseFriends'));
    if (chooseFriendsFromStorage) {
      dispatch({ type: 'SET_CHOOSE_FRIENDS_DATA', chooseFriends: chooseFriendsFromStorage });
    }
  }, [dispatch]);

  const [statusImage, setStatusImage] = useState(false);
  const [files, setFiles] = useState();
  const imagePlugin = createImagePlugin();
  const editorRef = useRef(); // tạo reference để lấy DOM của component Editor
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(), // Khởi tạo EditorState với nội dung rỗng
  );

  const handleDrop = (acceptedFiles) => {
    const uploadedFiles = acceptedFiles.map(file =>
      URL.createObjectURL(file)
    );
    console.log(uploadedFiles);
    setFiles(uploadedFiles)
  }

  const handleAddImages = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = 'image/*';

    input.addEventListener('change', (event) => {
      const newFiles = Array.from(event.target.files);
      setFiles([...files, ...newFiles.map((file) => URL.createObjectURL(file))]);
    });

    input.click();
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

  const handleOpenChooseImage = () => {
    setStatusImage(true);
  }

  const handleCloseChooseImage = () => {
    setStatusImage(false);
    setFiles();
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

  const getAssignedNames = () => {
    const count = chooseFriends.length;
    let result = "cùng với ";
    if (count === 1) {
      result += chooseFriends[0];
    } else if (count === 2) {
      result += `${chooseFriends[0]} và ${chooseFriends[1]}`;
    } else if (count > 2) {
      result += `${chooseFriends[0]}, ${chooseFriends[1]} và ${(count - 2)} người khác`;
    }
    return result;
  };

  const getAssignedEmoji = () => {
    if(chooseEmoji.activity) {
      return `${chooseEmoji.name.toLowerCase().slice(0, -3)} ${(chooseEmoji.activity)[0].name.toLowerCase()}`;
    }else{
      return `đang cảm thấy ${[chooseEmoji][0]?.name?.toLowerCase()} ${[chooseEmoji][0].icon}`;
    }
  };

  const getAssignedAddress = () => {
    return `tại ${chooseAddress.name}`
  };


  // Hàm focus vào component khi click vào custom-editor
  const focus = () => {
    console.log(chooseAddress);
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
              <div className="form">
                <div class="content">
                  <img src="./assets/img/Home/faptv-bg.jpg" alt="" />
                  <div class="details">
                    <div>
                      <p style={{ fontSize: 14 }} onClick={() => console.log(showModal)}>Hoàng Lê {" "}
                        {Object.keys(chooseEmoji).length > 0 && getAssignedEmoji()} {" "}
                        {chooseFriends.length > 0 && getAssignedNames()} {" "}
                        {Object.keys(chooseAddress).length > 0 && getAssignedAddress()}
                        </p>

                    </div>
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
                    plugins={[imagePlugin]}
                  />
                </div>

                {statusImage == false ? (<div class="theme-emoji">
                  <img src="./img/theme.svg" alt="" />
                  <img src="./img/smile.svg" alt="" />
                </div>
                ) : (
                  <div>
                    <i onClick={handleCloseChooseImage} class="bi bi-x"></i>
                    <Dropzone onDrop={handleDrop}>
                      {({ getRootProps, getInputProps }) => (
                        <div className="container-dropzone">
                          {files ? (
                            <div className="body-image">
                              <button className="btnAddImages" onClick={handleAddImages}> <li><img src="./img/gallery.svg" alt="" /></li><span> Thêm ảnh </span></button>
                              {files.length > 2 ? (
                                <div>
                                  {files.map((url) => (
                                    <img src={url} style={{ maxWidth: '50%', backgroundColor: '#f7f8fa' }} key={url} />
                                  ))}
                                </div>
                              ) : (<div>
                                {files.map((url) => (
                                  <img src={url} style={{ maxWidth: '100%', backgroundColor: '#f7f8fa' }} key={url} />
                                ))}
                              </div>)}
                            </div>

                          ) : (<div {...getRootProps()} className="dropzone">
                            <div className="body-dropzone">
                              <input {...getInputProps()} />
                              <li><img src="./img/gallery.svg" alt="" /></li>
                              <span>Thêm ảnh/video</span>
                              <p>hoặc kéo và thả</p>
                            </div>
                          </div>)}
                        </div>
                      )}
                    </Dropzone>
                  </div>
                )}

                <div class="options">
                  <p onClick={handleOpenModalOptions}>Thêm vào bài viết của bạn</p>
                  <ul class="list">
                    <li onClick={handleOpenChooseImage}><img src="./img/gallery.svg" alt="" /></li>
                    {chooseFriends.length > 0 ? (
                      <li onClick={handleOpenModalFriends} style={{ backgroundColor: '#caeef9' }}>
                        <img src="./img/tag.svg" alt="" />
                      </li>
                    ) : (
                      <li onClick={handleOpenModalFriends}>
                        <img src="./img/tag.svg" alt="" />
                      </li>
                    )}
                    {Object.keys(chooseEmoji).length > 0 ? (
                      <li onClick={handleOpenModalEmoji} style={{ backgroundColor: '#fdefc9' }}>
                        <img src="./img/emoji.svg" alt="" />
                      </li>
                    ) : (
                      <li onClick={handleOpenModalEmoji}><img src="./img/emoji.svg" alt="" /></li>
                    )}
                    {Object.keys(chooseAddress).length > 0 ? (
                      <li onClick={handleOpenModalCheckIn} style={{ backgroundColor: '#f9a19d' }}>
                        <img style={{width:22}} src="	https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/uywzfiZad5N.png" alt="" />
                      </li>
                    ) : (
                      <li onClick={handleOpenModalCheckIn}>
                      <img style={{width:22}} src="	https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/uywzfiZad5N.png" alt="" />
                    </li>
                    )}
                   
                    <li onClick={handleOpenModalEvent}><img style={{width:22}} src="	https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/CenxFlWjtJO.png" alt="" /></li>
                    <li onClick={handleOpenModalOptions}><img src="./img/more.svg" alt="" /></li>
                  </ul>
                </div>
                <button onClick={focus}>Post</button>
              </div>
            </section>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CreatePostFbModel;
