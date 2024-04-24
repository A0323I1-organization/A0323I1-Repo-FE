import "../dasboard/Dasboard.css";
import "../ticket/ManageTicket.css";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import * as ticketService from "../../service/TicketService";
import Popup from "./Popup";

export  default  function ManagerTicket() {

    const [tickets,setTickets] = useState([]);
    const [search, setSearch] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [showPopup,setShowPopup] = useState(false);
    const [ticketData,setTicketData] = useState({id : '', useName :''})

    // variable paging
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages,setTotalPages] = useState(0);
    const result = tickets.length > 0 ? tickets : [];

    const numbers = tickets ? [...Array(totalPages + 1).keys()].slice(1) : [];

    useEffect(() => {
        handleSearchForStartAndEndDates(currentPage);
    }, [startDate,endDate,currentPage]);


    // const getAll = async () =>{
    //    try {
    //        const temp = await ticketService.findAllTicket();
    //        setTickets(temp);
    //
    //    } catch (err) {
    //        console.log(err);
    //    }
    //
    // }

    const handleSearchForStartAndEndDates = async (page) =>{

            const resultsSet = await ticketService.searchForStartAndEndDates(startDate, endDate,page);
        if (resultsSet && resultsSet.success ) {
            const { content, totalPages } = resultsSet.results;
            const displayedTickets = content?.slice(0, 5) || [];
            setTickets(displayedTickets);
            setTotalPages(totalPages);
        } else {
            setTickets([]);
            setTotalPages(0);
        }
    }

    //function paging
    const  prePage = () => {
        if (currentPage !== 1){
            setCurrentPage(currentPage -1);
        }
    }
    const  nextPage = () => {
        if(currentPage !== totalPages){
            setCurrentPage(currentPage + 1);
        }
    }
    const changeCPage = (id) => {
        setCurrentPage(id)
    }


    //popup
    const handleClickShowPopup = (id, fullName) => {
        setTicketData({id : id, useName : fullName});
        setShowPopup(true);

    }
    // close popup
    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return(
            <>
                <main>
                    <h1>Manage Ticket</h1>
                    <div className="box__search">
                        <div className="box__search__date">
                            <div >
                                <span>Start date :</span>
                                <div className="date">
                                    <input type="date" name="starDate" onChange={(e) =>setStartDate(e.target.value)}/>
                                </div>
                            </div>
                            <div>
                                <span>End date :</span>
                                <div className="date">
                                    <input type="date" name="endDate" onChange={(e) =>setEndDate(e.target.value)}/>
                                </div>
                            </div>
                            {/*<button >*/}
                            {/*    <span className="button__search" >Search</span>*/}
                            {/*</button>*/}
                        </div>
                        <div className="box__search__text">
                            <div className="text">
                                <input type="text"  placeholder="Enter ticket..." onChange={(e) =>setSearch(e.target.value)}/>
                            </div>

                        </div>
                    </div>
                    {/*        start recent order*/}
                    <div className="recent_order">

                        <table>
                            <thead>
                            <tr>
                                <th>Ticket ID</th>
                                <th>Customer ID</th>
                                <th>Full Name</th>
                                <th>Identity Card</th>
                                <th>Phone Number</th>
                                <th>Movie</th>
                                <th>Showing</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {result && result.length > 0 ? (tickets.filter((ticket) =>{
                                const formattedTicketId = `TK${String(ticket.ticketId).padStart(4, '0')}`;
                                const formattedCustomerId = `CS${String(ticket.customerId).padStart(4, '0')}`;
                                const searchQuery = search.toLowerCase();
                                return (
                                    searchQuery === '' ? ticket :
                                        formattedTicketId.toLowerCase().includes(searchQuery) ||
                                        formattedCustomerId.toLowerCase().includes(searchQuery) ||
                                        ticket.fullName.toLowerCase().includes(searchQuery)
                                );
                            }).map((ticket,index) =>(
                                <tr key={ticket.ticketId}>
                                    <td>TK{String(ticket.ticketId).padStart(4,'0')}</td>
                                    <td>CS{String(ticket.customerId).padStart(4,'0')}</td>
                                    <td>{ticket.fullName}</td>
                                    <td>{ticket.idCard}</td>
                                    <td>{ticket.phoneNumber}</td>
                                    <td>{ticket.movieName}</td>
                                    <td>{ticket.showDate}</td>

                                    <td className="primary">
                                        {/*<button onClick={() => handleExportPdf(ticket.ticketId)}>*/}
                                        {/*    <span className="button__text">Confirm</span>*/}
                                        {/*</button>*/}
                                        <button onClick={() => handleClickShowPopup(ticket.ticketId,ticket.fullName)}>
                                            <span className="button__text">Confirm</span>
                                        </button>
                                    </td>
                                </tr>
                            ))):(
                                        <div>
                                            <span className="not__found">Không tìm thấy vé xem phim phù hợp.</span>
                                        </div>
                            )}

                            </tbody>
                        </table>
                        {
                            result && result.length > 0 ? (
                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item">

                                            <a href="#" className="page-link" onClick={prePage} >
                                                Previous
                                            </a>
                                        </li>
                                        {
                                            numbers.map((n,i) => (
                                                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                                    <a href="#" className="page-link"
                                                       onClick={() => changeCPage(n)}>{n}</a>

                                                </li>
                                            ))
                                        }
                                        <li className="page-item">

                                            <a href="#" className="page-link" onClick={nextPage}>
                                                Next
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            ) : null
                        }
                    </div>
                    {/*        end recent order*/}
                    {showPopup && (<Popup ticketData={ticketData} handleClosePopup={handleClosePopup}/>)}
                </main>

            </>
        )
}