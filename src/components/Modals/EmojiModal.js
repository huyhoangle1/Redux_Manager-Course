import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { setChooseEmoji } from "../../actions/courseAction";
import { useDispatch, useSelector } from "react-redux";

const EmojiModal = ({ showModalEmoji, setShowModalEmoji, isShowModal }) => {
  const [showModalActivity, setShowModalActivity] = useState(false);
  const [dataActivity, setDataActivity] = useState([]);
  const dataChooseEmoji = useSelector((state) => state.chooseEmoji);

  const dispatch = useDispatch();

  const activity = [
    {
      id: 1,
      name: "Đang chúc mừng...",
      icon: "❤️️",
      activity: [
        {
          type: "❤️️",
          name: "tình bạn"
        },
        {
          type: "❤️️",
          name: "sinh nhật"
        },
        {
          type: "❤️️",
          name: "ngày đặc biệt của bạn"
        },
        {
          type: "❤️️",
          name: "giáng sinh"
        },
        {
          type: "❤️️",
          name: "năm mới"
        },
        {
          type: "❤️️",
          name: "thành công"
        },
        {
          type: "❤️️",
          name: "kì nghỉ"
        },
        {
          type: "❤️️",
          name: "tình yêu"
        }
      ]
    },
    {
      id: 2,
      name: "Đang xem...",
      icon: "❤️️",
      activity: [
      ]
    },
    {
      id: 3,
      name: "Đang ăn...",
      icon: "❤️️",
      activity: [
        {
          type: "❤️️",
          name: "trưa"
        },
        {
          type: "❤️️",
          name: "tối"
        },
        {
          type: "❤️️",
          name: "bữa sáng"
        }
      ]
    },
    {
      id: 4,
      name: "đang chơi...",
      icon: "❤️️",
      activity: [
        {
          type: "❤️️",
          name: "liên quân mobile"
        },
        {
          type: "❤️️",
          name: "freefire"
        },
        {
          type: "❤️️",
          name: "chess"
        }
      ]
    },
    {
      id: 5,
      name: "đang ủng hộ",
      icon: "❤️️",
      activity: [
      ]
    },
  ]

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
    }

  ];


  const handleOpenActivity = (activity) => {
    setDataActivity(activity);
    setShowModalActivity(true);
  };

  const handleCloseActivity = () =>{
    setShowModalActivity(false);
  }

  const chooseEmoji = (item) => {
    const isSelected = dataChooseEmoji.id === item.id;
    dispatch(setChooseEmoji((isSelected ? {} : item)));
    setShowModalEmoji(false);
    isShowModal(true);
  };

  const chooseActivity= (item) =>{
    const activityItem = dataActivity.activity.filter((a) => a.name === item.name);
    const result = {
      id: dataActivity.id,
      name: dataActivity.name,
      icon: dataActivity.icon,
      activity: activityItem
    };
    dispatch(setChooseEmoji(result));
    setShowModalEmoji(false);
    isShowModal(true);
  }
  

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
                          <div onClick={() => chooseEmoji(item)} className={`column-feeling ${[dataChooseEmoji][0].name === item.name ? "selected" : ""}`}>
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
                  <div className="search">
                  {showModalActivity ?<div onClick={handleCloseActivity} className="search-activity-name"> {dataActivity.name}</div> : null}
                  <Form.Control className="input-search-friend" size="lg" type="text" placeholder="Tìm kiếm" />
                  </div>
                  <div class="row-activity" id="style-1">
                    <div class="row">
                      {showModalActivity ? (dataActivity.activity.length > 0 ? (dataActivity.activity.map((item)=>
                        <div class="column-activity-fa">
                        <div onClick={()=>{chooseActivity(item)}} className="col column-activity">
                          <div className="emoji">{item.type}</div>
                          <span>{item.name}</span>
                        </div>
                      </div>
                      )) :(<div style={{textAlign:'center', fontSize:20 , fontWeight: 600, marginTop:30}}>Không tìm thấy kết quả</div>)) :  (activity.map((item) => (
                        <div onClick={()=>{handleOpenActivity(item)}} class="column-activity-fa">
                          <div className="col column-activity">
                            <div className="emoji">{item.icon}</div>
                            <span>{item.name}</span>
                          </div>
                          <i class="fa fa-arrow-right"></i>
                        </div>
                      )))
                    }
                     
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