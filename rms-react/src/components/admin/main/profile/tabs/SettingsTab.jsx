import React from "react";

const SettingsTab = ({ user }) => {
  return (
    <div className="job-form">
      <form onSubmit="">
        <div className="flex-between">
          <div className="input-row flex-item">
            <input
              type="text"
              defaultValue={user.name}
              className="form-control"
              placeholder="write name"
            />
          </div>
          <div className="input-row flex-item">
            <input
              type="email"
              defaultValue={user.email}
              className="form-control"
              placeholder="write email"
            />
          </div>
        </div>

        <div className="flex-between">
          <div className="input-row flex-item">
            <textarea
              type="text"
              defaultValue={user.about}
              className="form-control-textarea"
              placeholder="say something about you"
            />
          </div>
        </div>
        <div className="flex-between">
          <div className="input-row flex-item">
            <input type="file" className="form-control" />
          </div>
        </div>
        <div className="input-row flex content-center">
          <button className="button">Update</button>
        </div>
      </form>
    </div>
  );
};

export default SettingsTab;
