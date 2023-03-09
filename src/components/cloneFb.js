import React, { useState } from 'react';
import CreatePostFbModel from './Modals/CreatePostFbModal';


const CloneFb = () => {
    const [showModel, setShowModel] = useState(false);
    const openModel =()=>{
        setShowModel(true);
    }
    return (
        <div class="app">
        <div class="app-grid">  
            <header class="header" style={{position:'relative', bottom:100}}>
                <div class="header-grid">
                    <div class="header-left">
                        <div class="header-left__logo">
                            <i class="fab fa-facebook header-left__icon-logo"></i>
                        </div>
                        <div class="header-left__search">
                            <div class="header-left__search-icon">
                                <i class="fal fa-search"></i>
                            </div>
                            <input type="text" id="search-input" class="header-left__search-input" placeholder="Tìm kiếm trên Facebook"/>
                            <ul class="header-left__search-history">
                                <li class="header-left__search-history-item">
                                    Không có tìm kiếm nào gần đây
                                </li>
                            </ul>
                        </div>
                    </div>

                    <ul class="header-main">
                        <li class="header-main__item home-btn active nav-home">
                            <i class="fas fa-home"></i>
                            <span class="header-main__item-title">Trang chủ</span>
                        </li>
                        <li class="header-main__item">
                            <i class="fas fa-user-friends"></i>
                            <span class="header-main__item-title">Nhóm</span>
                        </li>
                        <li class="header-main__item">
                            <i class="fas fa-gamepad"></i>
                            <span class="header-main__item-title">Trò chơi</span>
                        </li>
                        <li class="header-main__item nav-left-layout">
                            <i class="fas fa-bars"></i>
                            <span class="header-main__item-title">Khác</span>
                        </li>
                    </ul>

                    <div class="header-switch">

                        <div class="header-switch__box">
                            <div class="header-switch-icon switch-moon">
                                <i class="fas fa-moon"></i>
                            </div>
                            <div class="header-switch-icon switch-sun">
                                <i class="fas fa-sun"></i>
                            </div>
                        </div>
                        
                    </div>

                    <ul class="header-right">
                        <li class="header-right__profile nav-wall">
                            <img src="./assets/img/Home/faptv-bg.jpg" alt="" class="header-profile__img avt"/>
                            <span class="header-profile__name last-name">Hoàng</span>
                        </li>
                        <li class="header-right__item plus">
                            <i class="fas fa-plus header-right__item-plus"></i>
                            <div class="header-right__item-more">
                                <h2 class="header-right__item-more-head">
                                    Tạo
                                </h2>
                                <ul class="header-right__item-more-list">
                                    <div>
                                        <li class="header-right__item-more-item">
                                            <div class="header-right__item-more-item__icon">
                                                <i class="fas fa-edit"></i>
                                            </div>
                                            <div class="header-right__item-more-item__content">
                                                <div class="header-right__item-more__head">
                                                    Đăng
                                                </div>
                                                <div class="header-right__item-more-item-more__note">
                                                    Chia sẻ bài viết trên Bảng tin.
                                                </div>
                                            </div>
                                        </li>
                                        <li class="header-right__item-more-item">
                                            <div class="header-right__item-more-item__icon">
                                                <i class="fas fa-book-open"></i>
                                            </div>
                                            <div class="header-right__item-more-item__content">
                                                <div class="header-right__item-more__head">
                                                    Tin
                                                </div>
                                                <div class="header-right__item-more-item-more__note">
                                                    Bạn có thể chia sẻ hoặc viết gì đó.
                                                </div>
                                            </div>
                                        </li>
                                        <li class="header-right__item-more-item">
                                            <div class="header-right__item-more-item__icon">
                                                <i class="fas fa-video"></i>
                                            </div>
                                            <div class="header-right__item-more-item__content">
                                                <div class="header-right__item-more__head">
                                                    Phòng họp mặt
                                                </div>
                                                <div class="header-right__item-more-item-more__note">
                                                    Chat video với bất kì ai trên hoặc bên ngoài Facebook, không giới hạn thời gian.
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                        <li class="header-right__item-more-item">
                                            <div class="header-right__item-more-item__icon">
                                                <i class="fas fa-font-awesome-flag"></i>
                                            </div>
                                            <div class="header-right__item-more-item__content">
                                                <div class="header-right__item-more__head">
                                                    Trang
                                                </div>
                                                <div class="header-right__item-more-item-more__note">
                                                    Kết nối, chia sẻ với khách hàng hoặc fan
                                                </div>
                                            </div>
                                        </li>
                                </ul>
                            </div>
                        </li>
                        <li class="header-right__item">
                            <i class="fab fa-facebook-messenger header-right__item-mess"></i>
                            <div class="header-right__item-more header-right__mess">
                                <div class="mess-heading">
                                    <h2 class="mess-heading__text">
                                        Messenger
                                    </h2>
                                    <div class="mess-heading__right">
                                        <div class="mess-heading__right-icon">
                                            <i class="fas fa-ellipsis-h"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="mess-search">
                                    <div class="mess-search__icon">
                                        <i class="far fa-address-card"></i>
                                    </div>
                                    <input class="mess-search__input" type="text" placeholder="Tìm kiếm trên Messenger"/>
                                </div>
                                <ul class="mess-list">
                                    <li class="mess-item">
                                        <div>
                                            <img src="./assets/img/Home/avatar-mess-2.jpg" alt="" class="mess-item__avatar"/>
                                        </div>
                                        <div class="mess-list__info">
                                            <div class="mess-item__info-name">
                                                Group thông báo IT02
                                            </div>
                                            <div class="mess-item__info-text">
                                                Trịnh: G9 
                                                <i class="fas fa-circle"></i>
                                                <span>
                                                    8 giờ
                                                </span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mess-item">
                                        <div class="mess-item__active">
                                            <img src="./assets/img/Home/avatar-mess-3.jpg" alt="" class="mess-item__avatar"/>
                                        </div>
                                        <div class="mess-list__info">
                                            <div class="mess-item__info-name">
                                                Lê Hoàng
                                            </div>
                                            <div class="mess-item__info-text">
                                                Bạn đã gửi 1 video 
                                                <i class="fas fa-circle"></i>
                                                <span>
                                                    10 giờ
                                                </span> 
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <form class="mess-open-Mess" action="./mess.html">
                                    <button class="mess-open-Mess__btn">Xem tất cả trong Messenger</button>
                                </form>
                            </div>
                        </li>
                        <li class="header-right__item">
                            <span class="header-right__item-count">
                                1
                            </span>
                            <i class="fas fa-bell header-right__item-notify"></i>
                            <div class="header-right__item-more header-right__notify">
                                <div class="notify-heading">
                                    <h2 class="notify-heading__text">
                                        Thông báo
                                    </h2>
                                    <div class="notify-heading__right">
                                        <div class="notify-heading__right-icon">
                                            <i class="fas fa-ellipsis-h"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="notify-content">
                                    <div class="notify-content__new">
                                        <div class="notify-content__new-head">
                                            <p class="notify-content__head-text new-notify__title">
                                                Mới
                                            </p>
                                            <ul class="notify-content__new-list">
                                                
                                            </ul>
                                            <p class="notify-content__head-text">
                                                Trước đó
                                            </p>
                                            <ul class="notify-content__before-list">
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="header-right__item">
                            <i class="fas fa-caret-down header-right__item-caret-down"></i>
                            <div class="header-right__item-more header-right__setting">
                                <div class="setting-head nav-wall">
                                    <img src="./assets/img/Home/faptv-bg.jpg" alt="" class="avt setting-head__avatar"/>
                                    <div class="setting-head__content">
                                        <p class="setting-head__content-name full-name">
                                            Lê Hoàng
                                        </p>
                                        <p class="setting-head__content-note">
                                            Xem trang cá nhân của bạn
                                        </p>
                                    </div>
                                </div>
                                <div class="setting__respond">
                                    <div>
                                        <div class="setting__respond-img">
                                            <i class="fas fa-exclamation-circle"></i>
                                        </div>
                                        <div class="setting__respond-content">
                                            <p class="setting__respond-title">
                                                Đóng góp ý kiến
                                            </p>
                                            <p class="setting__respond-note">
                                                Góp phần cải thiện Facebook mới.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <ul class="setting__list">
                                    <li class="setting__item">
                                        <div class="setting__item-img">
                                            <i class="fas fa-cogs"></i>
                                        </div>
                                        <p class="setting__item-content">
                                            Cài đặt & quyền riêng tư
                                        </p>
                                        <i class="fas fa-chevron-right"></i>
                                    </li>
                                    <li class="setting__item">
                                        <div class="setting__item-img">
                                            <i class="fas fa-question-circle"></i>
                                        </div>
                                        <p class="setting__item-content">
                                            Trợ giúp & hỗ trợ
                                        </p>
                                        <i class="fas fa-chevron-right"></i>
                                    </li>
                                    <li class="setting__item">
                                        <div class="setting__item-img">
                                            <i class="fas fa-moon"></i>
                                        </div>
                                        <p class="setting__item-content">
                                            Màn hình & trợ năng
                                        </p>
                                        <i class="fas fa-chevron-right"></i>
                                    </li>
                                    <li class="setting__item nav-logout">
                                        <a>
                                            <div class="setting__item-img">
                                                <i class="fas fa-sign-out-alt"></i>
                                            </div>
                                            <p class="setting__item-content">
                                                    Đăng xuất
                                            </p>
                                        </a>
                                    </li>
                                </ul>
                                <footer class="setting__footer">
                                    <span>
                                        Quyền riêng tư
                                    </span>
                                    ·
                                    <span>
                                        Điều khoản
                                    </span>
                                    · 
                                    <span>
                                        Quảng cáo
                                    </span>   
                                    ·
                                    <span>
                                        Cookie
                                    </span>   
                                    · 
                                    <span>
                                        Chính sách
                                    </span> 
                                    · 
                                    Facebook © 2021
                                </footer>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>

            <section class="container">
                <section class="container-left">
                    <div class="header-switch sub-switch">

                        <div class="header-switch__box">
                            <div class="header-switch-icon switch-moon">
                                <i class="fas fa-moon"></i>
                            </div>
                            <div class="header-switch-icon switch-sun">
                                <i class="fas fa-sun"></i>
                            </div>
                        </div>
                        
                    </div>
                    <div class="container-left__favorite">
                        <ul class="favorite-list">
                            <li class="favorite-item nav-wall">
                                <img src="./assets/img/Home/faptv-bg.jpg" alt="" class="avt favorite-item__img"/>
                                <span class="favorite-item__text full-name">Lê Hoàng</span>
                            </li>
                            <li class="favorite-item">
                                <img src="./assets/img/Home/item-fav-1.png" alt="" class="favorite-item__img"/>
                                <span class="favorite-item__text">Bạn bè</span>
                            </li>
                            <li class="favorite-item">
                                <img src="./assets/img/Home/item-fav-2.png" alt="" class="favorite-item__img"/>
                                <span class="favorite-item__text">Đã lưu</span>
                            </li>
                            <li class="favorite-item">
                                <img src="./assets/img/Home/item-fav-3.png" alt="" class="favorite-item__img"/>
                                <span class="favorite-item__text">Watch</span>
                            </li>
                            <li class="favorite-item">
                                <img src="./assets/img/Home/item-fav-4.png" alt="" class="favorite-item__img"/>
                                <span class="favorite-item__text">Nhóm</span>
                            </li>
                            <li class="favorite-item">
                                <img src="./assets/img/Home/item-fav-5.png" alt="" class="favorite-item__img"/>
                                <span class="favorite-item__text">Marketplace</span>
                            </li>
                        </ul>
                        <div class="container-left__more more-less-btn">
                            <div class="container-left__more-icon more-less-icon">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                            <span class="container-left__more-text more-less-text">Xem thêm</span>
                        </div>
                        <ul class="container-left__more-list">
                            <li class="favorite-item">
                                <img src="./assets/img/Home/item-fav-6.png" alt="" class="favorite-item__img"/>
                                <span class="favorite-item__text">Chơi game</span>
                            </li>
                            <li class="favorite-item">
                                <img src="./assets/img/Home/item-fav-7.png" alt="" class="favorite-item__img"/>
                                <span class="favorite-item__text">Yêu thích</span>
                            </li>
                            <li class="favorite-item">
                                <img src="./assets/img/Home/item-fav-8.png" alt="" class="favorite-item__img"/>
                                <span class="favorite-item__text">Sự kiện</span>
                            </li>
                            <li class="favorite-item">
                                <img src="./assets/img/Home/item-fav-9.png" alt="" class="favorite-item__img"/>
                                <span class="favorite-item__text">Kỉ niệm</span>
                            </li>
                        </ul>
                        <div class="container-left__less more-less-btn">
                            <div class="container-left__more-icon more-less-icon">
                                <i class="fas fa-chevron-up"></i>
                            </div>
                            <span class="container-left__more-text more-less-text">Ẩn bớt</span>
                        </div>
                    </div>
                    <div class="container-left__shortcut">
                        <div class="shortcut-head">
                            <div class="shortcut-head__text">
                                Lối tắt của bạn
                            </div>
                            <span class="shortcut-head__btn">Chỉnh sửa</span>
                        </div>
                        <ul class="shortcut-list">
                            <li class="shortcut-item">
                                <img src="./assets/img/Home/avatar-notify-4.jpg" alt="" class="shortcut-item__img"/>
                                <span class="shortcut-item__text">Titan Gaming</span>
                            </li>
                            <li class="shortcut-item">
                                <img src="./assets/img/Home/item-group-1.png" alt="" class="shortcut-item__img"/>
                                <span class="shortcut-item__text">Cờ tướng</span>
                            </li>
                            <li class="shortcut-item">
                                <img src="./assets/img/Home/item-group-2.png" alt="" class="shortcut-item__img"/>
                                <span class="shortcut-item__text">Nametests</span>
                            </li>
                            <li class="shortcut-item">
                                <img src="./assets/img/Home/item-group-3.png" alt="" class="shortcut-item__img"/>
                                <span class="shortcut-item__text">J2TEAM Community</span>
                            </li>
                            <li class="shortcut-item">
                                <img src="./assets/img/Home/item-group-4.png" alt="" class="shortcut-item__img"/>
                                <span class="shortcut-item__text">Chia sẻ cùng thách đấu</span>
                            </li>
                        </ul>
                        <div class="container-left__more more-less-btn">
                            <div class="container-left__more-icon more-less-icon">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                            <span class="container-left__more-text more-less-text">Xem thêm</span>
                        </div>
                        <ul class="container-left__more-list">
                            <li class="shortcut-item">
                                <img src="./assets/img/Home/item-group-5.png" alt="" class="shortcut-item__img"/>
                                <span class="shortcut-item__text">Ngôi sao lấp lánh Offical</span>
                            </li>
                            <li class="shortcut-item">
                                <img src="./assets/img/Home/item-group-6.png" alt="" class="shortcut-item__img"/>
                                <span class="shortcut-item__text">Sinh viên OU</span>
                            </li>
                            <li class="shortcut-item">
                                <img src="./assets/img/Home/item-group-7.png" alt="" class="shortcut-item__img"/>
                                <span class="shortcut-item__text">LÀM CHỦ SLIDE</span>
                            </li>
                        </ul>
                        <div class="container-left__less more-less-btn">
                            <div class="container-left__less-icon more-less-icon">
                                <i class="fas fa-chevron-up"></i>
                            </div>
                            <span class="container-left__less-text more-less-text">Ẩn bớt</span>
                        </div>
                    </div>
                    <footer class="container-left__footer">
                        <p class="container-left__footer-text">
                            <a href="">
                                Quyền riêng tư
                            </a>
                            -
                            <a href="">
                                Điều khoản
                            </a>
                            -
                            <a href="">
                                Quảng cáo
                            </a>
                            -
                            <a href="">
                                Cookie
                            </a>
                            -
                            <span class="container-left__footer-more-text">Xem thêm</span>
                            <br/>
                            Facebook &copy; 2021
                        </p>
                    </footer>
                </section>
                <section class="container-main">

                    <div class="container-story">
                        <ul class="container-story__list">
                            <li class="container-story__item">
                                <img src="./assets/img/Home/faptv-bg.jpg" alt="" class="avt container-story__item-bg"/>
                                <span class="container-story__item-avatar">+</span>
                                <span class="container-story__item-name">Tạo tin</span>
                            </li>
                            <li class="container-story__item">
                                <img class="container-story__item-avatar" src="./assets/img/Home/avatar-mess-3.jpg" alt=""/>
                                <img src="./assets/img/Home/bg-story.jpg" alt="" class="container-story__item-bg"/>
                                <span class="container-story__item-name">Lê Hoàng</span>
                            </li>
                            <li class="container-story__item">
                                <img class="container-story__item-avatar" src="./assets/img/Home/thangfly.jpg" alt=""/>
                                <img src="./assets/img/Home/thangfly-bg.jpg" alt="" class="container-story__item-bg"/>
                                <span class="container-story__item-name">Thăng Fly Comics</span>
                            </li>
                            <li class="container-story__item">
                                <img class="container-story__item-avatar" src="./assets/img/Home/avatar-mess-1.jpg" alt=""/>
                                <img src="./assets/img/Home/bg-story1.jpg" alt="" class="container-story__item-bg"/>
                                <span class="container-story__item-name">Nguyễn Danh Nhân</span>
                            </li>
                            <li class="container-story__item">
                                <img class="container-story__item-avatar" src="./assets/img/Home/faptv.jpg" alt=""/>
                                <img src="./assets/img/Home/faptv-bg.jpg" alt="" class="container-story__item-bg"/>
                                <span class="container-story__item-name">FAPTV</span>
                            </li>
                        </ul>
                    </div>
                    <div class="container-posts">
                        <div class="posts__new-post">
                            <img src="./assets/img/Home/avatar-mess-1.jpg" alt="" class="avt posts__new-post-img nav-wall"/>
                            <button class="new-post-btn posts__new-post-btn" onClick={openModel}>
                                Bạn đang nghĩ gì thế ?
                            </button>
                        </div>
                        <ul class="post__action">
                            <li class="post__action-item">
                                <i class="fas fa-video post__action-item-icon"></i>
                                <span class="post__action-item-text">Video trực tiếp</span>
                            </li>
                            <li class="post__action-item uploadfile single">
                                <i class="fas fa-images post__action-item-icon"></i>
                                <span class="post__action-item-text">Ảnh/Video</span>
                            </li>
                            <li class="post__action-item">
                                <i class="far fa-laugh post__action-item-icon"></i>
                                <span class="post__action-item-text">Cảm xúc/Hoạt động</span>
                            </li>
                        </ul>
                    </div>
                    <div class="container-mess-room">
                        <div class="container-mess-room__btn">
                            <i class="fas fa-rss container-mess-room__btn-icon"></i>
                            <span class="container-mess-room__btn-text">Tạo phòng họp mặt</span>
                        </div>
                        <ul class="container-mess-room__list">
                            <li class="container-mess-room__item">
                                <img src="./assets/img/Home/thangfly.jpg" alt="" class="container-mess-room__item-img"/>
                            </li>
                            <li class="container-mess-room__item">
                                <img src="./assets/img/Home/faptv.jpg" alt="" class="container-mess-room__item-img"/>
                            </li>
                        </ul>
                    </div>
                    <div class="container-newsfeed-list newf-list">
                        
                    </div>
                </section>
                <section class="container-right">
                    <div class="container-right__page">
                        <div class="container-right__page-head">
                            <p class="container-right__page-head-text">
                                Trang của bạn
                            </p>
                            <div class="container-right__page-more more-dots">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                        <div class="container-right__page-item">
                            <img src="./assets/img/Home/avatar-notify-4.jpg" alt="" class="container-right__page-item-avatar"/>
                            <span class="container-right__page-item-title">Titan Gaming</span>
                        </div>
                        <div class="container-right__page-ads">
                            <div class="container-right__page-ads-img">
                                <i class="fas fa-volume-down"></i>
                            </div>
                            <div class="container-right__page-ads-text">
                                Tạo quảng cáo
                            </div>
                        </div>
                    </div>

                    <div class="container-right__connect">
                        <div class="container-right__connect-head">
                            <p class="container-right__connect-head-text">
                                Người liên hệ
                            </p>
                            <div class="container-right__connect-head-more more-dots">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                        <ul class="container-right__connect-list">
                            <li class="container-right__connect-item">
                                <div class="container-right__connect-item-avatar">
                                    <img src="./assets/img/Home/user-1.jpg" alt="" class="container-right__connect-item-img"/>
                                </div>
                                <span class="container-right__connect-item-name">Nguyễn Hoàng Uyên My</span>
                            </li>
                            <li class="container-right__connect-item">
                                <div class="container-right__connect-item-avatar">
                                <img src="./assets/img/Home/faptv-bg.jpg" alt="" class="container-right__connect-item-img"/>
                                </div>
                                <span class="container-right__connect-item-name">Dương Hoàng Phi Long</span>
                            </li>
                            <li class="container-right__connect-item">
                                <div class="container-right__connect-item-avatar">
                                <img src="./assets/img/Home/faptv-bg.jpg" alt="" class="container-right__connect-item-img"/>
                                </div>
                                <span class="container-right__connect-item-name">An Lê</span>
                            </li>
                            <li class="container-right__connect-item">
                                <div class="container-right__connect-item-avatar">
                                    <img src="./assets/img/Home/faptv-bg.jpg" alt="" class="container-right__connect-item-img"/>
                                </div>
                                <span class="container-right__connect-item-name">Nhật Hào</span>
                            </li>
                            <li class="container-right__connect-item">
                                <div class="container-right__connect-item-avatar">
                                    <img src="./assets/img/Home/faptv-bg.jpg" alt="" class="container-right__connect-item-img"/>
                                </div>
                                <span class="container-right__connect-item-name">Trương Thành Đạt</span>
                            </li>
                            <li class="container-right__connect-item">
                                <div class="container-right__connect-item-avatar">
                                <img src="./assets/img/Home/faptv-bg.jpg" alt="" class="container-right__connect-item-img"/>
                                </div>
                                <span class="container-right__connect-item-name">Phú Dừa</span>
                            </li>
                            <li class="container-right__connect-item">
                                <div class="container-right__connect-item-avatar">
                                <img src="./assets/img/Home/faptv-bg.jpg" alt="" class="container-right__connect-item-img"/>
                                </div>
                                <span class="container-right__connect-item-name">Phước Thịnh Nguyễn</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>

            <section class="my-wall">
                <section class="my-wall__head">
                    <div class="my-wall__top">
                        <div class="my-wall__top-bg--big">
                            <div class="my-wall__top-bg">
                                <img src="" alt="" class="my-wall__top-bg-img"/>
                                <div class="my-wall__top-bg__edit">
                                    <i class="fas fa-camera my-wall__top-bg__edit-icon"></i>
                                    <div class="my-wall__top-bg__edit-text">
                                        Chỉnh sửa ảnh bìa
                                    </div>
                                </div>
                            </div>
                            <div class="my-wall__top-bg-avatar">
                                <img src="" alt="" class="my-wall__top-bg-avatar__img avt"/>
                                <div class="my-wall__top-bg-avatar__edit">
                                    <i class="fas fa-camera my-wall__top-bg-avatar__edit-icon"></i>
                                </div>
                            </div>
                        </div>
                        <div class="my-wall__top-info">
                            <div class="my-wall__top-info-name full-name">
                                Lê Hoàng
                            </div>
                            <div class="my-wall__top-info-note">
                                ˇ 2 5 ˇ
                            </div>
                            <div class="my-wall__top-info-btn">
                                Chỉnh sửa
                            </div>
                        </div>
                    </div>
                    <div class="my-wall__head-more">
                        <ul class="my-wall__head-more-list">
                            <li class="my-wall__head-more-item">
                                <div class="my-wall__head-more-item__title">
                                    Bài viết
                                </div>
                            </li>
                            <li class="my-wall__head-more-item">
                                <div class="my-wall__head-more-item__title">
                                    Giới thiệu
                                </div>
                            </li>
                            <li class="my-wall__head-more-item">
                                <div class="my-wall__head-more-item__title">
                                    Bạn bè
                                    <span>
                                        425
                                    </span>
                                </div>
                            </li>
                            <li class="my-wall__head-more-item">
                                <div class="my-wall__head-more-item__title">
                                    Ảnh
                                </div>
                            </li>
                            <li class="my-wall__head-more-item">
                                <div class="my-wall__head-more-item__title">
                                    Xem thêm
                                </div>
                            </li>
                        </ul>
                        <button class="my-wall__head-more-btn btn-active">
                            <i class="fas fa-plus-circle"></i>
                            Thêm vào tin
                        </button>
                        <div class="my-wall__head-more-edit">
                            <i class="fas fa-pencil-alt"></i>
                            <span>
                                Chỉnh sửa trang cá nhân
                            </span>
                        </div>
                        <div class="my-wall__head-more-setting">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                </section>
                <secton class="my-wall__main">
                    <div class="my-wall__main-left">
                        <div class="my-wall__main-left__intro">
                            <div class="main-left__heading">
                                Giới thiệu
                            </div>
                            <div class="main-left__intro-content">
                                <div class="main-left__intro-content-item">
                                    <div class="main-left__intro-content-item__img">
                                        <i class="fas fa-clock"></i>
                                    </div>
                                    <div class="main-left__intro-content-item__text">
                                        Tham gia vào tháng 9 năm 2014
                                    </div>
                                </div>
                                <div class="main-left__intro-content-item">
                                    <div class="main-left__intro-content-item__img">
                                        <i class="fas fa-wifi"></i>
                                    </div>
                                    <div class="main-left__intro-content-item__text">
                                        Có
                                        <span>379</span>
                                        người theo dõi
                                    </div>
                                </div>
                                <div class="main-left__intro-content-item">
                                    <div class="main-left__intro-content-item__btn">
                                        Chỉnh sửa chi tiết
                                    </div>
                                </div>
                                <div class="main-left__intro-content-item">
                                    <div class="main-left__intro-content__favorite">
                                        <div class="main-left__intro-content-item__img">
                                            <i  class="fas fa-globe"></i>
                                        </div>
                                        <div class="main-left__intro-content-item__text">
                                                Học tiếng Việt
                                        </div>
                                    </div>
                                    <div class="main-left__intro-content__favorite">
                                        <div class="main-left__intro-content-item__img">
                                            <i  class="fas fa-laptop"></i>
                                        </div>
                                        <div class="main-left__intro-content-item__text">
                                                Học viết mã
                                        </div>
                                    </div>
                                </div>
                                <div class="main-left__intro-content-item">
                                    <div class="main-left__intro-content-item__btn">
                                        Chỉnh sửa sở thích
                                    </div>
                                </div>
                                <div class="main-left__intro-content-item">
                                    <div class="main-left__intro-content-item__btn">
                                        Thêm nội dung đáng chú ý
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="my-wall__main-left__gallery">
                            <div class="main-left__gallery-head">
                                <div class="main-left__heading">
                                    Ảnh
                                </div>
                                <div class="main-left__more">
                                    Xem tất cả ảnh
                                </div>
                            </div>
                            <ul class="main-left__gallery-pictures">
                                <li class="main-left__pictures-item">
                                    <img src="./assets/img/wall/wall-1.jpg" alt="" class="main-left__pictures-item-img"/>
                                </li>
                                <li class="main-left__pictures-item">
                                    <img src="./assets/img/wall/wall-2.jpg" alt="" class="main-left__pictures-item-img"/>
                                </li>
                                <li class="main-left__pictures-item">
                                    <img src="./assets/img/wall/wall-3.jpg" alt="" class="main-left__pictures-item-img"/>
                                </li>
                            </ul>
                        </div>
                        <div class="my-wall__main-left__friends">
                            <div class="main-left__friends-head">
                                <div class="main-left__heading">
                                    Bạn bè
                                    <div class="main-left__heading-sub">
                                        425 người bạn
                                    </div>
                                </div>
                                <div class="main-left__more">
                                    Xem tất cả bạn bè
                                </div>
                            </div>
                            <ul class="main-left__friends-list">
                                <li class="main-left__friends-item">
                                    <div class="main-left__friends-item-avatar">
                                        <img src="./assets/img/wall/user-1.jpg" alt="" class="imgmain-left__friends-img"/>
                                    </div>
                                    <div class="main-left__friends-item-text">
                                        Ali
                                    </div>
                                </li>
                                <li class="main-left__friends-item">
                                    <div class="main-left__friends-item-avatar">
                                        <img src="./assets/img/wall/user-2.jpg" alt="" class="imgmain-left__friends-img"/>
                                    </div>
                                    <div class="main-left__friends-item-text">
                                        Beatriz
                                    </div>
                                </li>
                                <li class="main-left__friends-item">
                                    <div class="main-left__friends-item-avatar">
                                        <img src="./assets/img/wall/user-3.jpg" alt="" class="imgmain-left__friends-img"/>
                                    </div>
                                    <div class="main-left__friends-item-text">
                                        Charles
                                    </div>
                                </li>
                                <li class="main-left__friends-item">
                                    <div class="main-left__friends-item-avatar">
                                        <img src="./assets/img/wall/user-4.jpg" alt="" class="imgmain-left__friends-img"/>
                                    </div>
                                    <div class="main-left__friends-item-text">
                                        Diya
                                    </div>
                                </li>
                                <li class="main-left__friends-item">
                                    <div class="main-left__friends-item-avatar">
                                        <img src="./assets/img/wall/user-5.jpg" alt="" class="imgmain-left__friends-img"/>
                                    </div>
                                    <div class="main-left__friends-item-text">
                                        Eric
                                    </div>
                                </li>
                                <li class="main-left__friends-item">
                                    <div class="main-left__friends-item-avatar">
                                        <img src="./assets/img/wall/user-6.jpg" alt="" class="imgmain-left__friends-img"/>
                                    </div>
                                    <div class="main-left__friends-item-text">
                                        Fatima
                                    </div>
                                </li>
                                <li class="main-left__friends-item">
                                    <div class="main-left__friends-item-avatar">
                                        <img src="./assets/img/wall/user-7.jpg" alt="" class="imgmain-left__friends-img"/>
                                    </div>
                                    <div class="main-left__friends-item-text">
                                        Gabriel
                                    </div>
                                </li>
                                <li class="main-left__friends-item">
                                    <div class="main-left__friends-item-avatar">
                                        <img src="./assets/img/wall/user-8.jpg" alt="" class="imgmain-left__friends-img"/>
                                    </div>
                                    <div class="main-left__friends-item-text">
                                        Hanna
                                    </div>
                                </li>
                                <li class="main-left__friends-item">
                                    <div class="main-left__friends-item-avatar">
                                        <img src="./assets/img/wall/user-9.jpg" alt="" class="imgmain-left__friends-img"/>
                                    </div>
                                    <div class="main-left__friends-item-text">
                                        Hiddleston
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <footer class="my-wall__main-left__footer">
                            <span>
                                Quyền riêng tư
                            </span>
                            ·
                            <span>
                                Điều khoản
                            </span>
                            · 
                            <span>
                                Quảng cáo
                            </span>   
                            ·
                            <span>
                                Cookie
                            </span>   
                            · 
                            <span>
                                Chính sách
                            </span> 
                            ·
                            Facebook © 2021
                        </footer>
                    </div>
                    <div class="my-wall__main-right">
                        <div class="main-right__posts">
                            <div class="posts__new-post">
                                <img src="" alt="" class="posts__new-post-img avt"/>
                                <button class="new-post-btn posts__new-post-btn">Bạn đang nghĩ gì thế ?</button>
                            </div>
                            <ul class="post__action">
                                <li class="post__action-item">
                                    <i class="fas fa-video post__action-item-icon"></i>
                                    <span class="post__action-item-text">Video trực tiếp</span>
                                </li>
                                <li class="post__action-item uploadfile single">
                                    <i class="fas fa-images post__action-item-icon"></i>
                                    <span class="post__action-item-text">Ảnh/Video</span>
                                </li>
                                <li class="post__action-item">
                                    <i class="far fa-laugh post__action-item-icon"></i>
                                    <span class="post__action-item-text">Cảm xúc/Hoạt động</span>
                                </li>
                            </ul>
                        </div>
                        <div class="main-right__option">
                            <div class="main-right__option-head">
                                <div class="main-right__option-head__title">
                                    Bài viết
                                </div>
                                <div class="main-right__option-head__more">
                                    <div class="main-right__option-head__more-btn">
                                        <div class="main-right__option-head__more-btn-icon">
                                            <i class="fas fa-sliders-h"></i>
                                        </div>
                                        <div class="main-right__option-head__more-btn-text">
                                            Bộ lọc
                                        </div>
                                    </div>
                                    <div class="main-right__option-head__more-btn">
                                        <div class="main-right__option-head__more-btn-icon">
                                            <i class="fas fa-cogs"></i>
                                        </div>
                                        <div class="main-right__option-head__more-btn-text">
                                            Quản lí bài viết
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="main-right__option-select">
                                <div class="main-right__option-item active">
                                    <div class="main-right__option-select-item">
                                        <div class="main-right__option-select-item__icon">
                                            <i class="fas fa-bars"></i>
                                        </div>
                                        <div class="main-right__option-select-item__text">
                                            Xem theo danh sách
                                        </div>
                                    </div>
                                </div>
                                <div class="main-right__option-item">
                                    <div class="main-right__option-select-item">
                                        <div class="main-right__option-select-item__icon">
                                            <i class="fas fa-th-large"></i>
                                        </div>
                                        <div class="main-right__option-select-item__text">
                                            Chế độ xem lưới
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="main-right__newsfeed newf-list">
                            
                        </div>

                    </div>
                </secton>
            </section>

            <div class="overplay">
                <div class="overplay-body">

                    <div class="post-box">
                        <div class="post-box__head">
                            <h3 class="post-box__head-text">
                                Tạo bài viết
                            </h3>
                            <span class="post-box__head-close">
                                <i class="fas fa-times"></i>
                            </span>
                        </div>
                        <div class="post-box__main">
                            <div class="post-box__info">
                                <img src="" alt="" class="avt post-box__avatar"/>
                                <div class="post-box__info-info">
                                    <p class="post-box__info-name full-name">
                                        Lê Hoàng
                                    </p>
                                    <div class="post-box__info-object">
                                        <i class="fas fa-globe-europe"></i>
                                        Công khai
                                    </div>
                                </div>
                            </div>
                            <div class="post-box__content">
                                <textarea value="hello" placeholder="Bạn đang nghĩ gì thế ?" type="text" class="post-box__content-textarea"></textarea>
                                <div class="post-box__content-img">
                                    {/* <img style="display: none;" src="" width="100%" alt="" class=""/>
                                    <span>&times;</span> */}
                                </div>
                            </div>
                            <div class="post-box__add">
                                <div class="post-box__add-head">
                                    Thêm vào bài viết
                                </div>
                                <div class="post-box__add-more">
                                    <div class="post-box__add-icon uploadfile">
                                        <input type="file" class="input-upload" hidden="hidden"/>
                                        <i  class="fas fa-images"></i>
                                    </div>
                                    <div class="post-box__add-icon">
                                        <i class="fas fa-laugh"></i>
                                    </div>
                                    <div class="post-box__add-icon">
                                        <i  class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div class="post-box__add-icon">
                                        <i  class="fas fa-ellipsis-h"></i>
                                    </div>
                                </div>
                            </div>
                            <button class="post-box__btn btn-disable">Đăng</button>
                        </div>
                    </div>

                </div>
            </div>
            <div>
            {
          showModel ?
            <CreatePostFbModel
              showModal={showModel}
              isShowModal={setShowModel}
            /> :
            <div></div>
        }
      </div>

        </div>
    </div>
                    );
};
   export default CloneFb;