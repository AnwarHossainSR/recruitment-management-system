import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { fetchApiData, storeApiData } from "../../../../api/ApiCall";
import Loader from "../../../../services/Loader";
import { notify } from "../../../../services/Notification";
import Header from "../../navigation/navbar/Hedaer";
import Sidebar from "../../navigation/sidebar/Sidebar";

const AddExam = () => {
  const [loader, setloader] = useState(true);
  const [data, setData] = useState([]);
  const [name, setName] = useState(null);
  const [date, setDate] = useState(null);
  const [training, setTraining] = useState(null);
  const [error, setError] = useState("");
  const histry = useHistory();
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
    const fetch = async () => {
      const response = await fetchApiData(`exams`);
      if (response.status === true) {
        setData(response.data);
      } else {
        console.log(response);
        notify(response.message, "error");
      }
    };
    fetch();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (training !== null && name !== null && date !== null) {
      const store = async () => {
        const response = await storeApiData("exams", {
          name: name,
          exam_date: date,
          training_id: training,
        });
        if (response.status === true) {
          notify(response.message, "success");
          histry.push("/admin/manage-score");
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
        <Header />
        {(loader && <Loader />) || (
          <main>
            <div className="main__container">
              <div className="card-main">
                <h1>Create New Exam</h1>
                <div className="job-form">
                  <form onSubmit={handleSubmit}>
                    <h2 className="error flex content-center items-center">
                      {error !== "" ? error : ""}
                    </h2>
                    <div className="flex-between">
                      <div className="input-row flex-item">
                        <p className="title"> Training </p>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          placeholder="exam name"
                        />
                      </div>
                      <div className="input-row flex-item">
                        <p className="title"> Exam Date </p>
                        <input
                          type="date"
                          name="exam_date"
                          className="form-control"
                          onChange={(e) => {
                            setDate(e.target.value);
                          }}
                        />
                      </div>
                      <div className="input-row flex-item">
                        <p className="title"> Training </p>
                        <select
                          name="cat_id"
                          className="form-control"
                          onChange={(e) => {
                            setTraining(e.target.value);
                          }}
                        >
                          <option>Please select training</option>
                          {data.exams &&
                            data.exams.map((item, i) => (
                              <option key={i} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className="input-row flex-item">
                        <button className="button">Add Exam</button>
                      </div>
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

export default AddExam;
