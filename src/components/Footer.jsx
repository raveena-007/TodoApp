import React from "react";
import "./footer.css";

function Footer({ completedTodo, totalCount }) {
  return (
    <div className="footer">
      <span className="item">Completed Todos :{completedTodo}</span>
      <span className="item">Total Todos:{totalCount}</span>
    </div>
  );
}

export default Footer;
