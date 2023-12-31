import React from "react";

const Header = function () {
  return (
    <div className="header">
      <div className="close--btn">
        <p><i className="fa-solid fa-xmark"></i></p>
      </div>
      <h2 className="heading">New Task</h2>
      <div className="text">
        <p className="today--text">Today</p>
        <p className="tomorrow--text">Tomorrow</p>
      </div>
      <div className="notification-icons">
        <div className="close--btn">
          <p><i className="fa-regular fa-clock"></i></p>
        </div>
        <div className="close--btn">
          <p><i className="fa-regular fa-bell"></i></p>
        </div>
      </div>
      <div className="select-task">
        <h3>Messages</h3>
        <h3>Today's Task</h3>
        <h3>Last Activity</h3>
      </div>
      <hr />
    </div>
  );
}

export default Header;