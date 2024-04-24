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
                                <img src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/60493220_2727687037245858_4681446895883649024_n.png?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IQta9GJxB34AX9jKOQt&_nc_ht=scontent.fdad1-4.fna&cb_e2o_trans=t&oh=00_AfDIiOAL8aQzxMBnQl_NQzKhwR18N4EwMBV_Lm6Cx02PXw&oe=66223EB8"
                                     alt="galaxy cinema" style={ {height:'100px', width: '125px'}}/>

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
                        <a href="#" className="a active" onclick="activateLink(event)">
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <h3>Ticket</h3>
                        </a>
                        <a href="#" className="a" onclick="activateLink(event)">
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faMagnifyingGlassChart} />
                            </div>
                            <h3>Customer</h3>
                        </a>
                        <a href="#" className="a" onclick="activateLink(event)">
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <h3>Movie</h3>
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