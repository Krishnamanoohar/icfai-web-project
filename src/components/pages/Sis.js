import React from "react";
import ReactDOM from "react-dom/client";
import "../../App.css";
import Documents from "./siscomponents/Documents";
import Attendence from "./siscomponents/Attendence";
import Gradelist from "./siscomponents/Gradelist";
import Complaint from "./siscomponents/Complaint";

function Sis() {
  const ondoc = function () {
    const root = ReactDOM.createRoot(
      document.getElementById("componentRender")
    );
    root.render(
      <React.StrictMode>
        <Documents />
      </React.StrictMode>
    );
  };
  const onAtt = function () {
    alert("Attendance sheet has been shared to you Parents");
    const root = ReactDOM.createRoot(
      document.getElementById("componentRender")
    );
    root.render(
      <React.StrictMode>
        <Attendence />
      </React.StrictMode>
    );
  };

  const onGrade = function () {
    alert("Grade List has been sent to your Parents ");
    const root = ReactDOM.createRoot(
      document.getElementById("componentRender")
    );
    root.render(
      <React.StrictMode>
        <Gradelist />
      </React.StrictMode>
    );
  };

  const oncomplaint = function () {
    const root = ReactDOM.createRoot(
      document.getElementById("componentRender")
    );
    root.render(
      <React.StrictMode>
        <Complaint />
      </React.StrictMode>
    );
  };

  return (
    <div className="sisContainer" id="sisContainer">
      <div className="sisNav" id="sisNav">
        <div className="menuDiv">
          <button className="menuButton">Menu</button>
          <div className="menu" id="menu">
            <div onClick={ondoc}>Documents</div>
            <div onClick={onAtt}>Attendence</div>
            <div>Fee</div>
            <div>NoticeBoard</div>
            <div>Announcements</div>
            <div>Feedback</div>
            <div>My Info</div>
            <div onClick={onGrade}>Grade List</div>
            <div>Academic</div>
            <div>Hall ticket</div>
            <div>Transport</div>
            <div>Activities</div>
            <div>Resources</div>
            <div>Help desk</div>
            <div>Attendace %</div>
            <div>Day wise Attendace</div>
            <div onClick={oncomplaint}>Complaint Register</div>
          </div>
        </div>
      </div>
      <div className="componentRender" id="componentRender"></div>
    </div>
  );
}

export default Sis;
