import React, { useState } from "react";
import { Modal, Button, Form, InputGroup  } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editExercise } from "../../actions/courseAction";

const CheckInModal = ({showModalCheckin, setShowModalCheckin, isShowModal}) => {

   const MockDataCheckin = [
    {
      "name": "Quốc Việt Palace",
      "address": "99 Hoàng Quốc Việt, Cầu Giấy, Hà Nội",
      "phone": "+84 24 3366 6113",
      "website": "https://quocvietpalace-hn.com/",
      "latitude": 21.054605,
      "longitude": 105.795143
    },
    {
      "name": "Hanoi Opera House",
      "address": "01 Tràng Tiền, Hoàn Kiếm, Hà Nội",
      "phone": "+84 24 3933 0113",
      "website": "https://www.vietnamonline.com/attraction/hanoi-opera-house.html",
      "latitude": 21.024905,
      "longitude": 105.846524
    },
    {
      "name": "Vietnam Museum of Ethnology",
      "address": "Nguyễn Văn Huyên, Nghĩa Đô, Từ Liêm, Hà Nội",
      "phone": "+84 24 3756 2193",
      "website": "http://vme.org.vn/",
      "latitude": 21.050714,
      "longitude": 105.790908
    },
    {
      "name": "The Huc Bridge",
      "address": "Hoàn Kiếm Lake, Hoàn Kiếm, Hà Nội",
      "phone": null,
      "website": null,
      "latitude": 21.029434,
      "longitude": 105.851355
    },
    {
      "name": "Temple of Literature",
      "address": "58 Quốc Tử Giám, Đống Đa, Hà Nội",
      "phone": "+84 24 3734 3975",
      "website": "http://vanmieu.gov.vn/en/homepage/",
      "latitude": 21.027824,
      "longitude": 105.835996
    },
    {
      "name": "Thang Long Water Puppet Theater",
      "address": "57B Đinh Tiên Hoàng, Hàng Bạc, Hoàn Kiếm, Hà Nội",
      "phone": "+84 24 3825 6069",
      "website": "http://thanglongwaterpuppet.org/home",
      "latitude": 21.030690,
      "longitude": 105.852985
    },
    {
      "name": "Ho Chi Minh Mausoleum",
      "address": "2 Hùng Vương, Điện Bàn, Ba Đình, Hà Nội",
      "phone": null,
      "website": null,
      "latitude": 21.036862,
      "longitude": 105.834239
    },
    {
      "name": "Ba Dinh Square",
      "address": "Ba Đình, Hà Nội",
      "phone": null,
      "website": null,
      "latitude": 21.034485,
      "longitude": 105.841917
    },
    {
      "name": "Long Bien Bridge",
      "address": "Chương Dương, Hoàn Kiếm, Hà Nội",
      "phone": null,
      "website": null,
      "latitude": 21.049674,
      "longitude": 105.890386
    },
    {
      "name": "Trấn Quốc Pagoda",
      "address": "Thành Nhà T-lao, Yên Phụ, Tây Hồ, Hà Nội",
      "phone": null,
      "website": "https://www.vietnamonline.com/attraction/chua-tran-quoc-temple.html",
      "latitude": 21.047275,
      "longitude": 105.847858
    },
    {
      "name": "Imperial Citadel of Thang Long",
      "address": "19C Hoàng Diệu, Quận Ba Đình, Hà Nội",
      "phone": "+84 24 3734 4673",
      "website": "https://dulich24.com.vn/diem-den/dia-diem-du-lich/toa-citadel-thang-long/",
      "latitude": 21.032852,
      "longitude": 105.847858
    }]
  
  
    const handleClose =()=>{
        setShowModalCheckin(false);
        isShowModal(true)
    }

  return (
    <div>
      <Modal
        show={showModalCheckin}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        className="my-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title w-100 text-center">
              Tìm kiếm vị trí 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="header-model-input-style">
          <i class="fa fa-search"></i>
          <Form.Control className="input-search-friend" size="lg" type="text" placeholder="Tìm kiếm bạn bè" />
            <span className="lblDone">Xong</span>
          </div>
          <div className="checkin-list-container">
            <div className="checkin-list" id="style-1">
            {MockDataCheckin.map((item)=>
              <div key={item.id} className="info-address">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/5AmCdexsMi-.png" alt={item.name} />
                  <div className="title-address">
                    <span>{item.name}</span>
                    <div>{item.address}</div>
                  </div>
              </div>
            )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CheckInModal;