import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchApiData } from "../../../../api/ApiCall";
import Loader from "../../../../services/Loader";
import { notify } from "../../../../services/Notification";
import Header from "../../navigation/navbar/Hedaer";
import Sidebar from "../../navigation/sidebar/Sidebar";
import ManageExamItem from "./ManageExamItem";

const ManageExam = () => {
  const [loader, setloader] = useState(true);
  const [exams, setExams] = useState([]);
  const fetchData = async () => {
    const response = await fetchApiData(`exams`);
    if (response.status === true) {
      setExams(response.data.exams);
    } else {
      console.log(response);
      notify("something is wrong, check console !", "error");
    }
  };
  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setloader(false);
    }, 1000);
  }, []);
  return (
    <>
      <div className="admin-container">
        <Header />
        {(loader && <Loader />) || (
          <main>
            <div className="main__container">
              <div className="card-main">
                <div className="header-div">
                  <h1>Manage Exams</h1>
                  <div className="right">
                    <Link
                      to="/admin/add-exam"
                      style={{ color: "green", marginRight: "1rem" }}
                    >
                      New Exam
                    </Link>
                  </div>
                </div>
                <div className="table-wrap">
                  {!exams.length && (
                    <h2 className="flex content-center">No Data Found</h2>
                  )}

                  <table className="table">
                    <tbody>
                      {exams &&
                        exams.map((exam, i) => (
                          <ManageExamItem
                            key={i}
                            exam={exam}
                            fetch={fetchData}
                          />
                        ))}
                    </tbody>
                  </table>
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

export default ManageExam;
