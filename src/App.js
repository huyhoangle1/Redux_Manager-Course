import React from 'react';
import { useSelector } from 'react-redux';
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';
import SearchBar from './components/SearchBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/layouts/header/header';
import FavoriteList from './components/favoriteList';
import CloneFb from './components/cloneFb';
import Home from './components/Home';

const AdminDashboard = () => {
  const courses = useSelector(state => state.courses);

  return (
    <div>
      {/* <!-- Dashboard --> */}
      <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        {/* <!-- Vertical Navbar --> */}
        <nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
          <div class="container-fluid">
            {/* <!-- Toggler --> */}
            <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            {/* <!-- Brand --> */}
            <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
                <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" alt="..."/>
            </a>
            {/* <!-- User menu (mobile) --> */}
            <div class="navbar-user d-lg-none">
              {/* <!-- Dropdown --> */}
              <div class="dropdown">
                {/* <!-- Toggle --> */}
                <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div class="avatar-parent-child">
                    <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar- rounded-circle" />
                    <span class="avatar-child avatar-badge bg-success"></span>
                  </div>
                </a>
                {/* <!-- Menu --> */}
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                  <a href="#" class="dropdown-item">Profile</a>
                  <a href="#" class="dropdown-item">Settings</a>
                  <a href="#" class="dropdown-item">Billing</a>
                  <hr class="dropdown-divider" />
                  <a href="#" class="dropdown-item">Logout</a>
                </div>
              </div>
            </div>
            {/* <!-- Collapse --> */}
            <div class="collapse navbar-collapse" id="sidebarCollapse">
              <h4>Main Menu</h4>
              {/* <!-- Navigation --> */}
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="/allCourse">
                    <i class="bi bi-house"></i> Dashboard
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/myfavorite">
                    <i class="bi bi-bookmark-heart-fill"></i> My Favorite
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/add">
                    <i class="bi bi-plus"></i> Add Course
                    {/* <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span> */}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-bookmarks"></i> Collections
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/cloneFb">
                    <i class="bi bi-people"></i> Clone FaceBook
                  </a>
                </li>
              </ul>
              {/* <!-- Divider --> */}
              <hr class="navbar-divider my-5 opacity-20" />
              {/* <!-- Navigation --> */}
              {/* <ul class="navbar-nav mb-md-4"> */}
                {/* <li>
                  <div class="nav-link text-xs font-semibold text-uppercase text-muted ls-wide" href="#">
                    Contacts
                    <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-4">13</span>
                  </div>
                </li>
                <li>
                  <a href="#" class="nav-link d-flex align-items-center">
                    <div class="me-4">
                      <div class="position-relative d-inline-block text-white">
                        <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar rounded-circle" />
                        <span class="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                      </div>
                    </div>
                    <div>
                      <span class="d-block text-sm font-semibold">
                        Marie Claire
                      </span>
                      <span class="d-block text-xs text-muted font-regular">
                        Paris, FR
                      </span>
                    </div>
                    <div class="ms-auto">
                      <i class="bi bi-chat"></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link d-flex align-items-center">
                    <div class="me-4">
                      <div class="position-relative d-inline-block text-white">
                        <span class="avatar bg-soft-warning text-warning rounded-circle">JW</span>
                        <span class="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                      </div>
                    </div>
                    <div>
                      <span class="d-block text-sm font-semibold">
                        Michael Jordan
                      </span>
                      <span class="d-block text-xs text-muted font-regular">
                        Bucharest, RO
                      </span>
                    </div>
                    <div class="ms-auto">
                      <i class="bi bi-chat"></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link d-flex align-items-center">
                    <div class="me-4">
                      <div class="position-relative d-inline-block text-white">
                        <img alt="..." src="https://images.unsplash.com/photo-1610899922902-c471ae684eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar rounded-circle" />
                        <span class="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-danger rounded-circle"></span>
                      </div>
                    </div>
                    <div>
                      <span class="d-block text-sm font-semibold">
                        Heather Wright
                      </span>
                      <span class="d-block text-xs text-muted font-regular">
                        London, UK
                      </span>
                    </div>
                    <div class="ms-auto">
                      <i class="bi bi-chat"></i>
                    </div>
                  </a>
                </li> */}
              {/* </ul> */}
              {/* <!-- Push content down --> */}
              {/* <div class="mt-auto"></div> */}
              {/* <!-- User (md) --> */}
              <ul class="navbar-nav">
                <li class="nav-item">
                <h4>Setting</h4>
                  <a class="nav-link" href="#">
                  <i class="bi bi-patch-exclamation-fill"></i>Help
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-tools"></i>Settings
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-box-arrow-left"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- Main content --> */}
        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
          {/* <!-- Header --> */}
          {/* <!-- Main --> */}
          <main class=" bg-surface-secondary">
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home courses={courses} />} />
              <Route path="/allCourse" element={<CourseList courses={courses} />} />
              <Route path="/Add" element={<CourseForm />} />
              <Route path="/search" element={<SearchBar />} />
              <Route path="/myfavorite" element={<FavoriteList />} />
              <Route path="/cloneFb" element={<CloneFb />} />
            </Routes>
          </BrowserRouter>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
