import React from "react";

const DetailsTab = ({ trainee, trainers }) => {
  return (
    <div className="main-div">
      <div className="left-side">
        <h2 className="header-info">Personal Info</h2>
        <div className="details">
          <div className="info-row flex justify-around">
            <h4>Full Name :</h4>
            <h4 className="success">{trainee.user.name}</h4>
          </div>
          <div className="info-row flex justify-around">
            <h4>Email :</h4>
            <h4 className="success">{trainee.user.email}</h4>
          </div>
          <div className="info-row flex justify-around">
            <h4>Position :</h4>
            <h4 className="success">Software Engineer</h4>
          </div>
        </div>
      </div>
      <div className="right-side">
        <h2 className="header-info">Training Info</h2>
        <div className="details">
          <div className="info-row flex justify-around">
            <h4>Training</h4>
            <h4 className="success">
              {trainee.training.category.name} Training
            </h4>
          </div>
          <div className="info-row flex justify-around">
            <h4>Training Period</h4>
            <h4 className="success">
              {trainee.training.category.period_start} To{" "}
              {trainee.training.category.period_end}
            </h4>
          </div>
          <div className="info-row flex justify-around">
            <h4>Trainers</h4>
            <h4 className="success">
              {trainers.map((item, i) => (
                <li key={i}>{item.user.name}</li>
              ))}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsTab;
