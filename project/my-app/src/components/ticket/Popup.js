import React, {useEffect, useState} from 'react';
import "../ticket/Popup.css";

import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as ticketService from "../../service/TicketService";
export default function Popup({ticketData,handleClosePopup}) {
        const {id,useName} = ticketData;

    useEffect(() => {
        const section = document.querySelector("section.active"),
             success = document.querySelector(".success-btn"),
             overlay = document.querySelector(".overlay"),
            closeBtn = document.querySelector(".close-btn");
        // xử lý sự kiện nhấp chuột vào overlay
        const handleOverlayClick = () => {
            section.classList.remove("active");
            setTimeout(handleClosePopup,500);

        };
        // xử lý sự kiện nhấp chuột vào close button
        const handleCloseButtonClick = () => {
            section.classList.remove("active");
            setTimeout(handleClosePopup,500);
        };
        // xử lý sự kiện nhấp chuột vào success button
        const handleSuccessButton = () => {
            section.classList.remove("active");
            setTimeout(handleClosePopup,500);
        }
        // đăng ký sự kiện click cho các biến đã được định nghĩa trước đó và gọi hàm xử lý sự kiện
        success.addEventListener("click", handleSuccessButton);
        overlay.addEventListener("click", handleOverlayClick);
        closeBtn.addEventListener("click", handleCloseButtonClick);

        // return thực hiện công việc dọn dẹp khi componet bị hủy bỏ
        return () =>{
            overlay.removeEventListener("click", handleOverlayClick);
            closeBtn.removeEventListener("click", handleCloseButtonClick);
            success.removeEventListener("click", handleSuccessButton);
        };

    },[handleClosePopup]);
    const handleExportPdf = async (id) =>{
        console.log(id)
        await ticketService.exportPdf(id);

    }
    return (
        <>
            <section className="active">
            <div className="overlay" />

            <div className="modal-box">
                <FontAwesomeIcon className="icon" icon={faDownload} />
                <h2>Download Now</h2>
                <h3>Do you want to download {useName} tickets?</h3>

                <div className="buttons">
                    <button onClick={() => handleExportPdf(id)} className="success-btn">Download File</button>
                    <button className="close-btn">Close</button>
                </div>
            </div>
        </section>
        </>
    )
}