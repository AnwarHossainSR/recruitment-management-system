import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { fetchApiData, storeApiData } from "../../../../../api/ApiCall";
import Loader from "../../../../../services/Loader";
import { notify } from "../../../../../services/Notification";
import Hedaer from "../../../navigation/navbar/Hedaer";
import Sidebar from "../../../navigation/sidebar/Sidebar";

const AddScore = () => {
  const [loader, setloader] = useState(true);
  const { slug } = useParams();
  const [data, setData] = useState([]);
  const [marks, setmarks] = useState(null);
  const [total, settotal] = useState(null);
  const [trainee, settrainee] = useState(null);
  const [error, setError] = useState("");
  const histry = useHistory();
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
    const fetch = async () => {
      const response = await fetchApiData(`admin/create/${slug}/score`);
      if (response.status === true) {
        setData(response.data);
      } else {
        console.log(response);
        notify(response.message, "error");
      }
    };
    fetch();
  }, [slug]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (marks !== null && total !== null && trainee !== null) {
      const store = async () => {
        const response = await storeApiData("scores", {
          marks: marks,
          total: total,
          exam_id: data.exam.id,
          trainee_id: trainee,
        });
        if (response.status === true) {
          notify(response.message, "success");
          histry.push(`/admin/manage-score/${slug}`);
        } else {
          console.log(response);
          notify(response.message, "error");
          setError(
            response.errors !== null ? response.errors[0] : response.message
          );
        }
      };
      store();
    } else {
      setError("please select all filds !");
    }
  };
  return (
    <>
      <div className="admin-container">
        <Hedaer />
        {(loader && <Loader />) || (
          <main>
            <div className="main__container">
              <div className="card-main">
                <h1>Add Training</h1>
                <div className="job-form">
                  <form onSubmit={handleSubmit}>
                    <h2 className="error flex content-center items-center">
                      {error !== "" ? error : ""}
                    </h2>
                    <div className="flex-between">
                      <div className="input-row flex-item">
                        <p className="title"> Marks </p>
                        <input
                          type="number"
                          name="marks"
                          className="form-control"
                          onChange={(e) => {
                            setmarks(e.target.value);
                          }}
                          placeholder="trainee marks"
                        />
                      </div>
                      <div className="input-row flex-item">
                        <p className="title"> Out Of</p>
                        <input
                          type="number"
                          name="total"
                          className="form-control"
                          onChange={(e) => {
                            settotal(e.target.value);
                          }}
                        />
                      </div>
                      <div className="input-row flex-item">
                        <p className="title"> Exam </p>
                        <select name="exam_id" className="form-control">
                          <option>{data && data.exam.name}</option>
                        </select>
                      </div>
                      <div className="input-row flex-item">
                        <p className="title"> Trainee </p>
                        <select
                          name="trainee"
                          className="form-control"
                          onChange={(e) => {
                            settrainee(e.target.value);
                          }}
                        >
                          <option>Please select a trainee</option>
                          {data.trainees &&
                            data.trainees.map((item, i) => (
                              <option key={i} value={item.id}>
                                {item.user.name}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                    <div className="input-row flex content-center items-center">
                      <button className="button">Add Score</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        )}

        <Sidebar cmp="score" />
      </div>
    </>
  );
};

export default AddScore;
