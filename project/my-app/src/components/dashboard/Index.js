
import "bootstrap/dist/css/bootstrap.css";
import "./index-style.css";
import { SearchIcon } from "@chakra-ui/icons";
import {
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    useColorModeValue,
} from "@chakra-ui/react";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Link, Text } from '@chakra-ui/react';


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import ReactDOM from 'react-dom';


import {
    faBars,
    faX,
    faMagnifyingGlassChart,
    faEnvelope,
    faReceipt,
    faCircleExclamation,
    faGear,
    faArrowRightFromBracket,
    faSun,
    faMoon,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {useEffect, useState} from "react";


function Index(props) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { variant, background, children, placeholder, borderRadius, ...rest } =
        props;
    const searchIconColor = useColorModeValue("gray.700", "white");
    const inputBg = useColorModeValue("secondaryGray.300", "navy.900");
    const inputText = useColorModeValue("gray.700", "gray.100");
    const[page,setPage] = useState();
    const [ scrolled, setScrolled ] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar);

        return () => {
            window.removeEventListener('scroll', changeNavbar);
        };
    });

    const changeNavbar = () => {
        if (window.scrollY > 1) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        const sidMenu = document.querySelector('#aside');
        const menuBtn = document.querySelector('#menu_bar');
        const closeBtn = document.querySelector('#close_btn');
        menuBtn.addEventListener('click', () => {
            sidMenu.style.display = "block"
        })

        closeBtn.addEventListener('click', () => {
            sidMenu.style.display = "none"
        })
    }, []);

    const activateLink = (event) => {
        // Loại bỏ class "active" từ tất cả các phần tử <a> trong class "a"
        var links = document.querySelectorAll('.a');
        links.forEach(function (link) {
            link.classList.remove('active');
        });
        var clickedLink = event.currentTarget;
        clickedLink.classList.add('active');
    }

    return (
        <>
            <div className={isDarkMode ? "body dark-theme-variables" : "body"}>
                <div className="container-manager">
                    {/*    aside section start*/}
                    <aside id="aside">
                        <div className="top-manager">
                            <div className="close-manager" id="close_btn">
                                <div className="theme-icon">
                                    <FontAwesomeIcon icon={faX}/>
                                </div>
                            </div>
                        </div>
                        {/*        end top*/}
                        <div className="sidebar-manager">
                            <a href="#" className="a active" onClick={activateLink}>
                                <div className="theme-icon">
                                    <FontAwesomeIcon icon={faUser}/>
                                </div>
                                <h3>Employee</h3>
                            </a>
                            <a href="#" className="a" onClick={activateLink}>
                                <div className="theme-icon">
                                    <FontAwesomeIcon icon={faMagnifyingGlassChart}/>
                                </div>
                                <h3>Analytics</h3>
                            </a>
                            <a href="#" className="a" onClick={activateLink}>
                                <div className="theme-icon">
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </div>
                                <h3>Messages</h3>
                                <span className="msg_count">14</span>
                            </a>
                            <a href="#" className="a" onClick={activateLink}>
                                <div className="theme-icon">
                                    <FontAwesomeIcon icon={faReceipt}/>
                                </div>
                                <h3>Products</h3>
                            </a>
                            <a href="#" className="a" onClick={activateLink}>
                                <div className="theme-icon">
                                    <FontAwesomeIcon icon={faCircleExclamation}/>
                                </div>
                                <h3>Reports</h3>
                            </a>
                            <a href="#" className="a" onClick={activateLink}>
                                <div className="theme-icon">
                                    <FontAwesomeIcon icon={faGear}/>
                                </div>
                                <h3>Settings</h3>
                            </a>
                            <a href="#" className="a" onClick={activateLink}>
                                <div className="theme-icon">
                                    <FontAwesomeIcon icon={faPlus}/>
                                </div>
                                <h3>Add Product</h3>
                            </a>
                            <a href="#" className="a" onClick={activateLink}>
                                <div className="theme-icon">
                                    <FontAwesomeIcon icon={faArrowRightFromBracket}/>
                                </div>
                                <h3>Log out</h3>
                            </a>
                        </div>
                    </aside>
                    {/*    aside section end*/}

                    {/*    main section start*/}
                    <main id="main">
                        <nav class="flex justify-start justify-items-center items-center flex-row undefined">
                        <div className="logo-manager">
                            <h2>
                                <span><img
                                    src="https://www.galaxycine.vn/_next/static/media/galaxy-logo-mobile.074abeac.png"
                                    alt="" width="115px" height="60px"/></span>
                            </h2>
                        </div>
                        <div
                            className="header-templete hidden screen1200:flex screen1200:grow screen1200:basis-full items-center gap-8 px-5 transition-all duration-300 ease-in-out">
                            <h1>Dasboard</h1>
                            <div className="right">
                                <div className="top-manager">
                                    <button id="menu_bar">
                                        <div className="theme-icon">
                                            <FontAwesomeIcon icon={faBars}/>
                                        </div>
                                    </button>
                                    <div className="theme-toggle">
                                        <div style={{color: '#fff'}}
                                             className={isDarkMode ? "theme-icon" : "theme-icon active"}
                                             onClick={() => setIsDarkMode(false)}>
                                            <FontAwesomeIcon icon={faSun}/>
                                        </div>
                                        <div className={isDarkMode ? "theme-icon active2" : "theme-icon"}
                                             onClick={() => setIsDarkMode(true)}>
                                            <FontAwesomeIcon icon={faMoon}/>
                                        </div>
                                    </div>
                                    <div className="profile">
                                        <div className="info">
                                            <p>
                                                <b>Babar</b>
                                            </p>
                                            <p className="p-admin">Admin</p>
                                            <small className="text-muted"/>
                                        </div>
                                        <div className="profile-photo">
                                            <img src="" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                {/*        end top*/}
                            </div>
                        </div>
                        </nav>

                        {/*        start recent order*/}

                        {/*        start recent order*/}
                        <div className="recent_order">

                        </div>
                        {/*        end recent order*/}
                    </main>
                    {/*    main section end*/}

                    {/*    right section start*/}

                    {/*    right section end*/}
                </div>
            </div>
        </>
    );
}

export default Index;
