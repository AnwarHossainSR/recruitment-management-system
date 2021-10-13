import React from "react";

const SettingsTab = ({ user, onsubmit, handleChange }) => {
  return (
    <div className="job-form">
      <form onSubmit={onsubmit}>
        <div className="flex-between">
          <div className="input-row flex-item">
            <input
              type="text"
              name="name"
              defaultValue={user.name}
              onChange={handleChange}
              className="form-control"
              placeholder="write name"
            />
          </div>
          <div className="input-row flex-item">
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              onChange={handleChange}
              className="form-control"
              placeholder="write email"
            />
          </div>
        </div>

        <div className="flex-between">
          <div className="input-row flex-item">
            <textarea
              type="text"
              name="about"
              defaultValue={user.about}
              onChange={handleChange}
              className="form-control-textarea"
              placeholder="say something about you"
            />
          </div>
        </div>
        <div className="flex-between">
          <div className="input-row flex-item">
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="form-control"
            />
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
