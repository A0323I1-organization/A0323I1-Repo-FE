import "bootstrap/dist/css/bootstrap.css";
import "../dasboard/Dasboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faX,
    faMagnifyingGlassChart,
    faEnvelope,
    faReceipt,
    faCircleExclamation,
    faGear,
    faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import React, {useState} from "react";
import logoBrand from '../../assets/img/brand.jpg';
import ListEmployee from "../employee/ListEmployee";
import {NavLink} from "react-router-dom";

export default function Dasboard() {
    const[isEmployee,setIs] = useState(true);

    const activateLink = (event) => {
        // Loại bỏ class "active" từ tất cả các phần tử <a> trong class "a"
        var links = document.querySelectorAll('.a');
        links.forEach(function (link) {
            link.classList.remove('active');
        });

        // Thêm class "active" vào phần tử <a> được nhấp vào
        var clickedLink = event.currentTarget;
        clickedLink.classList.add('active');
    }

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
                        <NavLink href="#" className="a active" onClick={() => {
                            setIs(true);
                        }}>
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <h3>Employee</h3>
                        </NavLink>
                        <NavLink href="#" className="a active" onClick={() => {
                            setIs(false);
                        }}>
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faMagnifyingGlassChart} />
                            </div>
                            <h3>Analytics</h3>

                        </NavLink>
                        <NavLink href="#" className="a active" onClick={() => {
                            setIs(false);
                        }}>
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <h3>Messages</h3>

                            <span className="msg_count">14</span>
                        </NavLink>
                        <NavLink href="#" className="a active" onClick={() => {
                            setIs(false);
                        }}>
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faReceipt} />
                            </div>
                            <h3>Calendar Show</h3>
                        </NavLink>
                        <a href="#" className="a" onClick={activateLink}>
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faCircleExclamation} />
                            </div>
                            <h3>Show Time</h3>

                        </a>
                        <a href="#" className="a" onClick={activateLink}>
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faGear} />
                            </div>
                            <h3>Settings</h3>
                        </a>
                        <a href="#" className="a" onClick={activateLink}>
                            <div className="theme-icon">
                                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            </div>
                            <h3>Log out</h3>
                        </a>
                    </div>
                </aside>
                {isEmployee ? <ListEmployee></ListEmployee> : <StatisticDashBoard/>}
            </div>
        </>
    );
}
