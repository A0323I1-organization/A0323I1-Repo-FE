import "bootstrap/dist/css/bootstrap.css";
import "../dasboard/Dasboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { faUser } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import StatisticDashBoard from "../statistics/StatisticDashBoard";
import logoBrand from '../../assets/img/brand.jpg'
import ManagerTicket from "../ticket/ManageTicket";

export default function Dasboard() {

    return (
        <>
            <div className="container-manager">
                {/*    aside section start*/}
                <aside>
                    <div className="top-manager">
                        <div className="logo-manager">
                            <h2>
                                <img src={logoBrand} style={ {height:'100%', width: '100%'}}/>
                            </h2>
                        </div>
                        <div className="close-manager" id="close_btn">
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faX} />
                            </div>
                        </div>
                    </div>
                    {/*        end top*/}
                    <div className="sidebar-manager">
                        <a href="#" className="a" onclick="activateLink(event)">
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <h3>Customers</h3>
                        </a>
                        <a href="#" className="a active" onclick="activateLink(event)">
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faMagnifyingGlassChart} />
                            </div>
                            <h3>Analytics</h3>

                        </a>
                        <a href="#" className="a" onclick="activateLink(event)">
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <h3>Messages</h3>

                            <span className="msg_count">14</span>
                        </a>
                        <a href="#" className="a" onclick="activateLink(event)">
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faReceipt} />
                            </div>
                            <h3>Calendar Show</h3>
                        </a>
                        <a href="#" className="a" onclick="activateLink(event)">
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faCircleExclamation} />
                            </div>
                            <h3>Show Time</h3>

                        </a>
                        <a href="#" className="a" onclick="activateLink(event)">
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faGear} />
                            </div>
                            <h3>Settings</h3>
                        </a>
                        <a href="#" className="a" onclick="activateLink(event)">
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            </div>
                            <h3>Log out</h3>
                        </a>
                    </div>
                </aside>

                       <StatisticDashBoard/>
                {/*    aside section end*/}

                {/*    main section start*/}
                <ManagerTicket/>
                {/*    main section end*/}



                {/*    right section start*/}
                <div className="right">
                    <div className="top-manager">
                        <button id="menu_bar">
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faBars} />
                            </div>
                        </button>
                        <div className="theme-toggle">
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faSun} className="active" />
                            </div>
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faMoon} />
                            </div>
                        </div>
                        <div className="profile">
                            <div className="info">
                                <p>
                                    <b>Babar</b>
                                </p>
                                <p>Admin</p>
                                <small className="text-muted" />
                            </div>
                            <div className="profile-photo">
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                    {/*        end top*/}
                </div>
                {/*    right section end*/}
            </div>
        </>
    );
}