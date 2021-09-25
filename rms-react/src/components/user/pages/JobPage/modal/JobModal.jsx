import React, { useState } from "react";
import "./JobModal.scss";
import axios from "../../../../../config";
import { notify } from "../../../../../services/Notification";

const JobModal = ({ jobId, setOpenModal }) => {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (file == null || email == null) {
      setError("Please provide both fields !");
    } else {
      const formData = new FormData();
      formData.append("cv", file);
      formData.append("job_id", jobId);
      formData.append("email", email);
      axios.post("applications", formData).then((response) => {
        if (response.data.status == false) {
          setError(response.data.message[0]);
          notify(response.data.message, "error");
        } else {
          notify("Applied successfully !", "success");
        }
      });
    }
  };
  return (
    <div className="modalBackground">
      <form onSubmit={handleSubmit}>
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              id="cancelBtnColor"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Please provide your CV PDF/DOC formate</h1>
            {error && <p style={{ color: "crimson" }}> {error} *</p>}
          </div>

          <div className="body">
            <div className="field">
              <div className="input">
                <p>Email : </p>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input">
                <p>CV : </p>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setFile(e.target.files[0])}
                  accept="application/pdf,application/msword,
                        application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <button className="button">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobModal;
