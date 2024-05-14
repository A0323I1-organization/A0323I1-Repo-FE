import "bootstrap/dist/css/bootstrap.css";
import "../dasboard/Dasboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faX,
    faMagnifyingGlassChart,
    faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import React, {useState} from "react";
import logoBrand from '../../assets/img/brand.jpg';
import ListEmployee from "../employee/ListEmployee";
import {NavLink} from "react-router-dom";
import Static from "../statistics/StatisticDashBoard";

export default function Dasboard() {
    const[isEmployee,setIs] = useState(true);
    const [count ,setCount] = useState(0)

    // const activateLink = (event) => {
    //     var links = document.querySelectorAll('.a');
    //     links.forEach(function (link) {
    //         link.classList.remove('active');
    //     });
    //     var clickedLink = event.currentTarget;
    //     clickedLink.classList.add('active');
    //     setCount(() => count + 1);
    //     if(count % 2 === 0) {
    //         setIs(true);
    //     } else {
    //         setIs(false);
    //     }
    // }

    console.log(count)

    return (
        <>
            <div class="total">
                <div className="container-manager">
                    {/*    aside section start*/}
                    <aside>
                        <div className="top-manager">
                            <div className="logo-manager">
                                <h2 class="title">
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
                            <NavLink href="#" className={isEmployee ? "active23" : ""} onClick={() => setIs(true)}>
                                <div className={isEmployee ? "theme-icon active1" : "theme-icon"}>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <h3 className={isEmployee ? "t3 active1" : "t3"}>Employee</h3>
                            </NavLink>
                            <NavLink href="#" className={isEmployee ? "" : "active23"} onClick={() => setIs(false)}>
                                <div className={isEmployee ? "theme-icon" : "theme-icon active1"}>
                                    <FontAwesomeIcon icon={faMagnifyingGlassChart} />
                                </div>
                                <h3 className={isEmployee ? "t3" : "t3 active1"}>Analytics</h3>

                            </NavLink>
                            {/*<a href="#" className="a" onClick={activateLink}>*/}
                            {/*    <div className="theme-icon">*/}
                            {/*        <FontAwesomeIcon icon={faArrowRightFromBracket} />*/}
                            {/*    </div>*/}
                            {/*    <h3 class="t3">Log out</h3>*/}
                            {/*</a>*/}
                        </div>
                    </aside>
                    {isEmployee ? <ListEmployee></ListEmployee> : <Static></Static>}
                </div>
            </div>
        </>
    );
}