import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchApiData } from "../../../../../api/ApiCall";
import Loader from "../../../../../services/Loader";
import { notify } from "../../../../../services/Notification";
import Hedaer from "../../../navigation/navbar/Hedaer";
import Sidebar from "../../../navigation/sidebar/Sidebar";
import ScoreItem from "./ScoreItem";

const Score = () => {
  const [loader, setloader] = useState(true);
  const [scores, setScore] = useState([]);
  const { slug } = useParams();
  const fetchData = async (pslug) => {
    const response = await fetchApiData(`scores/${pslug}`);
    if (response.status === true) {
      setScore(response.data.scores);
    } else {
      console.log(response);
      notify("something is wrong, check console !", "error");
    }
  };
  useEffect(() => {
    fetchData(slug);
    setTimeout(() => {
      setloader(false);
    }, 1000);
  }, [slug]);

  return (
    <>
      <div className="admin-container">
        <Hedaer />
        {(loader && <Loader />) || (
          <main>
            <div className="main__container">
              <div className="card-main">
                <div className="header-div">
                  <h1>Scores for {scores.length && scores[0].exam.name}</h1>
                  <div className="right">
                    <Link
                      to={`/admin/${slug}/add-marks`}
                      style={{ color: "green", marginRight: "1rem" }}
                    >
                      Add trainee marks
                    </Link>
                  </div>
                </div>
                <div className="table-wrap">
                  {!scores.length && (
                    <h2 className="flex content-center">No Data Found</h2>
                  )}

                  <table className="table">
                    <tbody>
                      {scores &&
                        scores.map((item, i) => (
                          <ScoreItem
                            key={i}
                            sid={item.id}
                            exam={item.exam}
                            trainee={item.trainee}
                            marks={item.marks}
                            total={item.total}
                            fetch={fetchData}
                            eslug={slug}
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

export default Score;
