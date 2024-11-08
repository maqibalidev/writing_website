import React, { useEffect, useRef } from "react";
import "./header.css";
import $ from 'jquery'
import logo from "../../../assets/images/logo.png";
const Header = () => {

    const dropdownRef = useRef(null);

  
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dropdownRef.current.removeAttribute("open");
      }
    };
  
    useEffect(() => {
 
      document.addEventListener("mousedown", handleClickOutside);
      return () => {

        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);



    return (
        <>
             <div className= "header-container  d-flex justify-content-center ">
                <div className="container g-0  custom-header-container custom-container">
                    <div className=" header d-flex justify-content-between align-items-center">
                     {/* LOGO  */}
                        <div className="left">
                            <a href="#" className="logo">
                                <img height="60px" src={logo} alt="logo" />
                            </a>
                        </div>
                     {/* HEADER LINKS */}
                        <div className="center ">
                   
                            <ul className=" d-none d-xl-flex flex-wrap mb-0 mx-3 py-3">
                                <li className="active">
                                    <a href="#">About us</a>
                                </li>

                                <li>
                                 <details ref={dropdownRef} className="header-details">
                                    <summary  className="header-summary">
                                        Services
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="15"
                                            height="5"
                                            viewBox="0 0 10 6"
                                            fill="none"
                                        >
                                            <path
                                                d="M5.7063 5.70715C5.31584 6.09762 4.68173 6.09762 4.29127 5.70715L0.292933 1.70871C0.00555333 1.42132 -0.0787866 0.993362 0.0773983 0.618508C0.233583 0.243655 0.595933 0 1.00201 0L8.99868 0.00312397C9.40163 0.00312397 9.76711 0.246779 9.92329 0.621632C10.0795 0.996486 9.99201 1.42444 9.70776 1.71183L5.70942 5.71027L5.7063 5.70715Z"
                                                fill="white"
                                            />
                                        </svg>
                                   
                                      </summary>
                                    <ul>
                                        <li>
                                            <a href="">abc</a>
                                        </li>
                                        <li>
                                            <a href="">abc</a>
                                        </li>
                                        <li>
                                            <a href="">abc</a>
                                        </li>
                                    </ul>
                                 </details>
                                </li>
                                <li>
                                    <a href="#">Prices</a>
                                </li>
                                <li>
                                    <a href="#">Discount</a>
                                </li>
                                <li>
                                    <a href="#">Guarantees</a>
                                </li>
                                <li>
                                    <a href="#">How it Works</a>
                                </li>
                                <li>
                                    <a href="#">Reviews</a>
                                </li>
                                <li>
                                    <a href="#">Our writers</a>
                                </li>
                                <li>
                                    <a href="#">Contact us</a>
                                </li>
                            </ul>
                        </div>
                     {/* BUTTONS */}
                        <div className="right d-flex align-items-center">
                            <button className=" header-btn-login d-flex align-items-center justify-content-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 20"
                                    fill="none"
                                >
                                    <g clip-path="url(#clip0_1_1590)">
                                        <path
                                            d="M9 10C10.364 10 11.6721 9.47322 12.6365 8.53553C13.601 7.59785 14.1429 6.32608 14.1429 5C14.1429 3.67392 13.601 2.40215 12.6365 1.46447C11.6721 0.526784 10.364 0 9 0C7.63603 0 6.32792 0.526784 5.36345 1.46447C4.39898 2.40215 3.85714 3.67392 3.85714 5C3.85714 6.32608 4.39898 7.59785 5.36345 8.53553C6.32792 9.47322 7.63603 10 9 10ZM7.16384 11.875C3.20625 11.875 0 14.9922 0 18.8398C0 19.4805 0.534375 20 1.1933 20H16.8067C17.4656 20 18 19.4805 18 18.8398C18 14.9922 14.7938 11.875 10.8362 11.875H7.16384Z"
                                            fill="#583BEC"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_1590">
                                            <rect width="18" height="18" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className="d-none d-sm-block">Login</span>
                            </button>
                            <button className=" header-btn-order  d-flex align-items-center justify-content-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 23 21"
                                    fill="none"
                                >
                                    <path
                                        d="M0 0.984375C0 0.438867 0.427257 0 0.958333 0H2.77517C3.65365 0 4.43229 0.525 4.79566 1.3125H21.2071C22.2573 1.3125 23.024 2.33789 22.7484 3.37969L21.1113 9.62637C20.7719 10.9143 19.6339 11.8125 18.3361 11.8125H6.81615L7.03177 12.9814C7.11962 13.4449 7.51493 13.7812 7.97413 13.7812H19.4861C20.0172 13.7812 20.4444 14.2201 20.4444 14.7656C20.4444 15.3111 20.0172 15.75 19.4861 15.75H7.97413C6.59253 15.75 5.4066 14.741 5.15104 13.3506L3.09062 2.23535C3.06267 2.07949 2.9309 1.96875 2.77517 1.96875H0.958333C0.427257 1.96875 0 1.52988 0 0.984375ZM5.11111 19.0312C5.11111 18.7727 5.16069 18.5167 5.25701 18.2778C5.35333 18.039 5.49451 17.8219 5.67249 17.6391C5.85047 17.4563 6.06176 17.3113 6.2943 17.2124C6.52684 17.1134 6.77608 17.0625 7.02778 17.0625C7.27948 17.0625 7.52871 17.1134 7.76125 17.2124C7.99379 17.3113 8.20509 17.4563 8.38307 17.6391C8.56104 17.8219 8.70222 18.039 8.79855 18.2778C8.89487 18.5167 8.94444 18.7727 8.94444 19.0312C8.94444 19.2898 8.89487 19.5458 8.79855 19.7847C8.70222 20.0235 8.56104 20.2406 8.38307 20.4234C8.20509 20.6062 7.99379 20.7512 7.76125 20.8501C7.52871 20.9491 7.27948 21 7.02778 21C6.77608 21 6.52684 20.9491 6.2943 20.8501C6.06176 20.7512 5.85047 20.6062 5.67249 20.4234C5.49451 20.2406 5.35333 20.0235 5.25701 19.7847C5.16069 19.5458 5.11111 19.2898 5.11111 19.0312ZM18.5278 17.0625C19.0361 17.0625 19.5236 17.2699 19.8831 17.6391C20.2425 18.0083 20.4444 18.5091 20.4444 19.0312C20.4444 19.5534 20.2425 20.0542 19.8831 20.4234C19.5236 20.7926 19.0361 21 18.5278 21C18.0194 21 17.5319 20.7926 17.1725 20.4234C16.813 20.0542 16.6111 19.5534 16.6111 19.0312C16.6111 18.5091 16.813 18.0083 17.1725 17.6391C17.5319 17.2699 18.0194 17.0625 18.5278 17.0625Z"
                                        fill="white"
                                    />
                                </svg>
                                <span className="d-none d-sm-block"> OrderNow</span>
                            </button>

                            <button
                            className='d-flex justify-content-center align-items-center d-xl-none'
                               type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                                </svg>
                            </button>
                            <div class="offcanvas offcanvas-end right-slider-menu" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header right-slider-menu-header justify-content-end">
 
    <button type="button" class="header-btn-close text-reset bg-transparent " data-bs-dismiss="offcanvas" aria-label="Close">
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
    </button>
  </div>
  <div class="offcanvas-body right-slider-menu-body">
  <ul className=" flex-wrap mb-0 mx-3 text-center">
                                <li className="active">
                                    <a className="active" href="#">About us</a>
                                </li>

                                <li>
                                    <a href="#">
                                        Services
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="15"
                                            height="5"
                                            viewBox="0 0 10 6"
                                            fill="none"
                                        >
                                            <path
                                                d="M5.7063 5.70715C5.31584 6.09762 4.68173 6.09762 4.29127 5.70715L0.292933 1.70871C0.00555333 1.42132 -0.0787866 0.993362 0.0773983 0.618508C0.233583 0.243655 0.595933 0 1.00201 0L8.99868 0.00312397C9.40163 0.00312397 9.76711 0.246779 9.92329 0.621632C10.0795 0.996486 9.99201 1.42444 9.70776 1.71183L5.70942 5.71027L5.7063 5.70715Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">Prices</a>
                                </li>
                                <li>
                                    <a href="#">Discount</a>
                                </li>
                                <li>
                                    <a href="#">Guarantees</a>
                                </li>
                                <li>
                                    <a href="#">How it Works</a>
                                </li>
                                <li>
                                    <a href="#">Reviews</a>
                                </li>
                                <li>
                                    <a href="#">Our writers</a>
                                </li>
                                <li>
                                    <a href="#">Contact us</a>
                                </li>
                            </ul>
  </div>
</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
