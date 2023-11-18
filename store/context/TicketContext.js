import { createContext, useState } from "react";

export const TicketContext = createContext({
  ticket: {
    billID: 0,
    movieID: 0,
    movieDetail: "",
    moviePoster: "",
    date: "",
    time: "",
    numberOfSeats: "",
    selectedSeats: [],
    email: "",
    displayName: "",
    total: "",
    day: "",
    date: "",
    time: "",
  },
  addTicket: (data) => {},
  delete: () => {},
});

function TicketContextProvider({ children }) {
  const [tickets, setTickets] = useState([]);
  function addTicket(data) {
    setTickets((prev) => [...prev, data]);
  }
  function deleteTicket() {
    setTickets([]);
  }
  const value = {
    ticket: tickets,
    addTicket: addTicket,
    delete: deleteTicket,
  };

  return (
    <TicketContext.Provider value={value}>{children}</TicketContext.Provider>
  );
}

export default TicketContextProvider;
