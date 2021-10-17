import React, { useEffect, useState } from "react";
import Loader from "../../../../../services/Loader";
import Header from "../../../navigation/navbar/Hedaer";
import Sidebar from "../../../navigation/sidebar/Sidebar";

const TraineeDetails = () => {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
    // const fetch = async () => {
    //   const response = await fetchApiData(`trainings/${slug}`);
    //   if (response.status === true) {
    //     setData(response.data);
    //   } else {
    //     notify(response.message);
    //     console.log(response);
    //   }
    // };
    // fetch();
  }, []);
  return (
    <>
      <div className="admin-container">
        <Header />
        {(loader && <Loader />) || (
          <main>
            <div className="main__container">
              <div className="card-main">Trainee details</div>
            </div>
          </main>
        )}

        <Sidebar cmp="/admin/manage-training" />
      </div>
    </>
  );
};

export default TraineeDetails;
