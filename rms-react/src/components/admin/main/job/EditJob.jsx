import React, { useState, useEffect } from "react";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./JobManage.scss";
import Loader from "../../../../services/Loader";
import { fetchApiData, storeApiData } from "../../../../api/ApiCall";
import {
  titleChangeHandler,
  companyChangeHandler,
  dateChangeHandler,
  tagChangeHandler,
  urlChangeHandler,
  locationChangeHandler,
  salaryChangeHandler,
  typeChangeHandler,
  catHandleChange,
  errorChangeHandler,
  success,
} from "../../../../redux/AddJobSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

const EditJob = (props) => {
  const [loader, setloader] = useState(true);
  const dispatch = useDispatch();
  const histry = useHistory();
  const { slug } = useParams();
  const [file, setfile] = useState(null);
  const [description, setdescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [job, setJob] = useState([]);
  const { errorMessage, data } = useSelector((state) => state.addJob);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchApiData(`jobs`);
      setCategories(response.data.categories);
      const jobResponse = await fetchApiData(`jobs/${slug}`);
      setJob(jobResponse.data[0]);
    };
    fetchData();
    setTimeout(() => {
      setloader(false);
    }, 1000);
    return () => {};
  }, [slug]);
  const onChangeDescription = (e, editor) => {
    const desData = editor.getData();
    setdescription(desData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("_method", "PUT");
    if (data.title) {
      formData.append("title", data.title);
    }
    if (data.company) {
      formData.append("company", data.company);
    }
    if (data.location) {
      formData.append("location", data.location);
    }
    if (data.email) {
      formData.append("email", data.email);
    }
    if (file !== null) {
      formData.append("icon", file);
    }
    if (data.type) {
      formData.append("type", data.type);
    }
    if (data.salary) {
      formData.append("salary", data.salary);
    }
    if (description !== "") {
      formData.append("description", description);
    }
    if (data.close_date) {
      formData.append("close_date", data.close_date);
    }
    if (data.tag) {
      formData.append("tag", data.tag);
    }
    if (data.cat_id) {
      formData.append("cat_id", data.cat_id);
    }
    const update = async (fFata) => {
      console.log(data);
      const response = await storeApiData(`jobs/${job.id}`, fFata);
      if (response.status === false) {
        dispatch(
          errorChangeHandler({
            type: "error",
            val: response.message,
          })
        );
      } else {
        console.log(data);
        dispatch(success({ val: response.message }));
        histry.push("/admin/manage-job");
      }
    };
    update(formData);
  };

  return (
    <>
      <div className="admin-container">
        <Header />
        {(loader && <Loader />) || (
          <main>
            <div className="main__container">
              <div className="card-main">
                <h1>Post new Job</h1>

                <div className="job-form">
                  <form onSubmit={handleSubmit}>
                    {errorMessage && (
                      <div className="flex items-center content-center">
                        <h2 className="error">{errorMessage}</h2>
                      </div>
                    )}
                    <div className="flex">
                      <div className="input-row">
                        <p className="title"> Job Title </p>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={job.title}
                          onChange={(e) =>
                            dispatch(
                              titleChangeHandler({
                                type: "title",
                                val: e.target.value,
                              })
                            )
                          }
                          placeholder="write job title"
                        />
                      </div>

                      <div className="input-row">
                        <p className="title"> Company </p>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={job.company}
                          onChange={(e) =>
                            dispatch(
                              companyChangeHandler({
                                type: "company",
                                val: e.target.value,
                              })
                            )
                          }
                          placeholder="write company name"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="input-row">
                        <p className="title"> Location </p>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={job.location}
                          onChange={(e) =>
                            dispatch(
                              locationChangeHandler({
                                type: "location",
                                val: e.target.value,
                              })
                            )
                          }
                          placeholder="write location name"
                        />
                      </div>
                      <div className="input-row">
                        <p className="title"> Application email / URL </p>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={job.email}
                          onChange={(e) =>
                            dispatch(
                              urlChangeHandler({
                                type: "url",
                                val: e.target.value,
                              })
                            )
                          }
                          placeholder="write email or website url"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="input-row">
                        <p className="title"> Job Tags (optional) </p>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={job.tag}
                          onChange={(e) =>
                            dispatch(
                              tagChangeHandler({
                                type: "tag",
                                val: e.target.value,
                              })
                            )
                          }
                          placeholder="write some tag for this job"
                        />
                      </div>
                      <div className="input-row">
                        <p className="title"> Closing Date (optional) </p>
                        <input
                          type="date"
                          className="form-control"
                          defaultValue={job.close_date}
                          onChange={(e) =>
                            dispatch(
                              dateChangeHandler({
                                type: "date",
                                val: e.target.value,
                              })
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="input-row">
                        <p className="title"> Category </p>
                        <select
                          className="form-control"
                          name="category"
                          defaultValue={job.cat_id}
                          onChange={(e) =>
                            dispatch(
                              catHandleChange({
                                type: "date",
                                val: e.target.value,
                              })
                            )
                          }
                        >
                          {categories.length > 0 &&
                            categories.map((item, i) => (
                              <option key={i} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className="input-row">
                        <p className="title"> Select Icon </p>
                        <input
                          type="file"
                          onChange={(e) => setfile(e.target.files[0])}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="input-row">
                        <p className="title"> Salary </p>
                        <input
                          type="number"
                          defaultValue={job.salary}
                          onChange={(e) =>
                            dispatch(
                              salaryChangeHandler({
                                type: "salary",
                                val: e.target.value,
                              })
                            )
                          }
                          className="form-control"
                        />
                      </div>
                      <div className="input-row">
                        <p className="title"> Type </p>
                        <select
                          className="form-control"
                          name="type"
                          defaultValue={job.type}
                          onChange={(e) =>
                            dispatch(
                              typeChangeHandler({
                                type: "type",
                                val: e.target.value,
                              })
                            )
                          }
                        >
                          <option value="full time">Full Time</option>
                          <option value="half time">Half Time</option>
                          <option value="part time">Part Time</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="input-row">
                        <p className="title"> Description </p>

                        <CKEditor
                          editor={ClassicEditor}
                          onChange={onChangeDescription}
                          data={job.description}
                        />
                      </div>
                    </div>

                    <div className="input-row flex content-center items-center">
                      <button className="button">Add Job</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        )}
        <Sidebar cmp="/admin/manage-job" />
      </div>
    </>
  );
};

export default EditJob;
