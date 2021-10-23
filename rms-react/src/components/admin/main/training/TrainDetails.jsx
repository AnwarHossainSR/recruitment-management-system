import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";
import "./Training.scss";
import Loader from "../../../../services/Loader";
import { fetchApiData } from "../../../../api/ApiCall";
import { notify } from "../../../../services/Notification";
import TraineeItem from "./TraineeItem";
const TrainDetails = () => {
  const [loader, setloader] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("");
  const history = useHistory();
  const { catename, slug } = useParams();
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
    const fetch = async () => {
      const response = await fetchApiData(`trainings/${slug}`);
      if (response.status === true) {
        setData(response.data);
      } else {
        notify(response.message);
        console.log(response);
      }
    };
    fetch();
  }, [slug]);
  return (
    <>
      <div className="admin-container">
        <Header />
        {(loader && <Loader />) || (
          <main>
            <div className="main__container">
              <div className="card-main">
                <div className="header-div">
                  <div>
                    <span
                      onClick={() => setToggle(toggle ? false : true)}
                      style={{ color: "green" }}
                    >
                      Trainers
                    </span>
                  </div>
                  <div className="right">
                    {data.trainees && (
                      <Link
                        className="success"
                        to={`/admin/manage-training/${catename.toLowerCase()}/${slug}/add-trainee`}
                      >
                        Add Trainee
                      </Link>
                    )}

                    <span onClick={() => history.goBack()}>Go Back</span>
                  </div>
                </div>

                {toggle && (
                  <div className="table-wrap" style={{ marginBottom: "5rem" }}>
                    <h2 className="flex content-center">
                      Total {data.trainer.length} Trainers for{" "}
                      {data.trainees[0] &&
                        data.trainees[0].training.category.name}{" "}
                      Training
                    </h2>
                    <table className="table">
                      <tbody>
                        {data &&
                          data.trainer.map((item, i) => (
                            <tr className="alert" key={i}>
                              <td>
                                <div className="outer-div">
                                  <h3>{item.user.name}</h3>
                                </div>
                              </td>
                              <td>
                                <div className="outer-div">
                                  <img
                                    src={item.user.image}
                                    alt="trainer"
                                    width="50px"
                                    height="50px"
                                  />
                                </div>
                              </td>
                              <td>
                                <span className="status">
                                  {data.trainees.length &&
                                    data.trainees[0].training.category
                                      .name}{" "}
                                  Trainer
                                </span>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="table-wrap">
                  <h2 className="flex content-center">
                    Total {data.trainees.length} Trainees for{" "}
                    {data.trainees[0] &&
                      data.trainees[0].training.category.name}{" "}
                    Training
                  </h2>
                  <table className="table">
                    <tbody>
                      {data &&
                        data.trainees.map((item, i) => (
                          <TraineeItem
                            key={i}
                            trainee={item}
                            path={history.location.pathname}
                          />
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        )}

        <Sidebar cmp="/admin/manage-training" />
      </div>
    </>
  );
};

export default TrainDetails;
