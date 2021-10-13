import React from "react";

const ChangePasswordTab = () => {
  return (
    <div className="job-form">
      <form onSubmit="">
        <div className="flex-between">
          <div className="input-row flex-item">
            <input
              type="password"
              className="form-control"
              placeholder="current password"
            />
          </div>
        </div>

        <div className="flex-between">
          <div className="input-row flex-item">
            <input
              type="password"
              className="form-control"
              placeholder="new password"
            />
          </div>
          <div className="input-row flex-item">
            <input
              type="password"
              className="form-control"
              placeholder="confirm password"
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

export default ChangePasswordTab;
