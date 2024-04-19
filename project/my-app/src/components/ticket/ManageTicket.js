import "../dasboard/Dasboard.css";
import React, {useEffect, useState} from "react";

import * as ticketService from "../service/TicketService";
export  default  function ManagerTicket() {
    const [tickets,setTickets] = useState([]);

    useEffect(() =>{
        getAll();
    },[])

    const getAll = async () =>{
       try {
           const temp = await ticketService.findAllTicket();
           setTickets(temp);
           console.log(temp);
       } catch (err) {
           console.log(err);
       }
    }
        return(
            <>
                <main>
                    <h1>Manage Ticket</h1>
                    <div className="date">
                        <input type="date" />
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
                            {tickets?.map((ticket,index) =>(
                                <tr key={ticket.ticketId}>
                                    <td>TK{String(ticket.ticketId).padStart(4,'0')}</td>
                                    <td>CS{String(ticket.customerId).padStart(4,'0')}</td>
                                    <td>{ticket.fullName}</td>
                                    <td>{ticket.idCard}</td>
                                    <td>{ticket.phoneNumber}</td>
                                    <td>{ticket.movieName}</td>
                                    <td>{ticket.showDate}</td>

                                    <td className="primary">Confirm</td>
                                </tr>
                            ))}

                            </tbody>
                        </table>
                    </div>
                    {/*        end recent order*/}
                </main>
            </>
        )
}