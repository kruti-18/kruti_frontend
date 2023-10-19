import React, {useState} from "react";
import {
  CloseOutline,
  PersonOutline,
  SearchOutline,
  MenuOutline,
} from "react-ionicons";
import "../../src/assets/style.css";

function Nav() {
  
const [nav, setNav] = useState(false)

const changeBg = () =>{
  if(window.addEventListener('scroll', (window.scrollY())) >= 80){
    setNav(true)
  } else{
    setNav(false)
  }
}

  return (
    <header class={nav ? 'header active' : 'header'} data-header>
      <div class="container">
        <h1>
          <a href="#" class="logo">
            Weave
          </a>
        </h1>

        <nav class="navbar" data-navbar>
          <div class="navbar-top">
            <a href="#" class="logo">
              EduHome
            </a>

            <button
              class="nav-close-btn"
              aria-label="Close menu"
              data-nav-toggler
            >
              <CloseOutline color={"#00000"} height="20px" width="20px" />
            </button>
          </div>

          <ul class="navbar-list">
            <li class="navbar-item">
              <a href="#home" class="navbar-link" data-nav-toggler>
                Home
              </a>
            </li>

            <li class="navbar-item">
              <a href="#about" class="navbar-link" data-nav-toggler>
                Quick Therapy
              </a>
            </li>

            <li class="navbar-item">
              <a href="#courses" class="navbar-link" data-nav-toggler>
                Courses
              </a>
            </li>

            <li class="navbar-item">
              <a href="#event" class="navbar-link" data-nav-toggler>
                Event
              </a>
            </li>

            <li class="navbar-item">
              <a href="#" class="navbar-link" data-nav-toggler>
                Blog
              </a>
            </li>

            <li class="navbar-item">
              <a href="#" class="navbar-link" data-nav-toggler>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div class="header-actions">
          <button
            class="header-action-btn"
            aria-label="Open search"
            data-search-toggler
          >
            <SearchOutline color={"#00000"} height="20px" width="20px" />
          </button>

          <a href="#" class="header-action-btn login-btn">
            <PersonOutline color={"#00000"} height="20px" width="20px" />

            <span class="span">Login / Register</span>
          </a>

          <button
            class="header-action-btn nav-open-btn"
            aria-label="Open menu"
            data-nav-toggler
          >
            <MenuOutline color={"#00000"} height="20px" width="20px" />
          </button>
        </div>

        <div class="overlay" data-nav-toggler data-overlay></div>
      </div>
      <div class="search-container" data-search-box>
        <div class="container">
          <button
            class="search-close-btn"
            aria-label="Close search"
            data-search-toggler
          >
            <CloseOutline color={"#00000"} height="20px" width="20px" />
          </button>

          <div class="search-wrapper">
            <input
              type="search"
              name="search"
              placeholder="Search Here..."
              aria-label="Search"
              class="search-field"
            />

            <button
              class="search-submit"
              aria-label="Submit"
              data-search-toggler
            >
              <SearchOutline color={"#00000"} height="20px" width="20px" />{" "}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
