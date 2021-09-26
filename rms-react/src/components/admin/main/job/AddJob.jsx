import React, { useState, useEffect } from "react";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./JobManage.scss";
import Loader from "../../../../services/Loader";
import axios from "../../../../config";
import { notify } from "../../../../services/Notification";
import { getData } from "../../../../api/ApiCall";
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
  checkForm,
} from "../../../../redux/AddJobSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const AddJob = (props) => {
  const [loader, setloader] = useState(true);
  const dispatch = useDispatch();
  const histry = useHistory();
  const [file, setfile] = useState("");
  const [description, setdescription] = useState("");
  const [categories, setCategories] = useState([]);
  const {
    formisValid,
    errorTitle,
    errorCompany,
    errorLocation,
    errorUrl,
    errorDate,
    errorDescription,
    errorMessage,
    errorSalary,
    data,
  } = useSelector((state) => state.addJob);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
      const fetchData = async () => {
        setCategories(await (await getData(`categories`)).categories);
        setloader(false);
      };
      fetchData();
    }, 1000);
  }, []);
  const onChangeDescription = (e, editor) => {
    const data = editor.getData();
    setdescription(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(checkForm());
    if (formisValid) {
      //console.log(data);
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("company", data.company);
      formData.append("location", data.location);
      formData.append("email", data.email);
      formData.append("icon", file);
      formData.append("type", data.type);
      formData.append("salary", data.salary);
      formData.append("description", description);
      formData.append("close_date", data.close_date);
      formData.append("tag", data.tag);
      formData.append("cat_id", data.cat_id);
      axios.post("jobs", formData).then((response) => {
        if (response.data.status === false) {
          dispatch(
            errorChangeHandler({
              type: "error",
              val: response.data.message,
            })
          );
          notify(response.data.message, "error");
        } else {
          console.log(response.data.job);
          histry.push("/admin/manage-job");
          notify("Job created successfully !", "success");
        }
      });
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
                        {errorTitle && <p className="error">{errorTitle}</p>}
                      </div>

                      <div className="input-row">
                        <p className="title"> Company </p>
                        <input
                          type="text"
                          className="form-control"
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
                        {errorCompany && (
                          <p className="error">{errorCompany}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="input-row">
                        <p className="title"> Location </p>
                        <input
                          type="text"
                          className="form-control"
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
                        {errorLocation && (
                          <p className="error">{errorLocation}</p>
                        )}
                      </div>
                      <div className="input-row">
                        <p className="title"> Application email / URL </p>
                        <input
                          type="text"
                          className="form-control"
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
                        {errorUrl && <p className="error">{errorUrl}</p>}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="input-row">
                        <p className="title"> Job Tags (optional) </p>
                        <input
                          type="text"
                          className="form-control"
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
                          onChange={(e) =>
                            dispatch(
                              dateChangeHandler({
                                type: "date",
                                val: e.target.value,
                              })
                            )
                          }
                        />
                        {errorDate && <p className="error">{errorDate}</p>}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="input-row">
                        <p className="title"> Category </p>
                        <select
                          className="form-control"
                          name="category"
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
                        {errorSalary && <p className="error">{errorSalary}</p>}
                      </div>
                      <div className="input-row">
                        <p className="title"> Type </p>
                        <select
                          className="form-control"
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
                        {errorDescription && (
                          <p className="red">{errorDescription}</p>
                        )}
                        <CKEditor
                          editor={ClassicEditor}
                          onChange={onChangeDescription}
                        />
                      </div>
                    </div>

                    <div className="input-row">
                      <button className="button">Add Job</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        )}
        <Sidebar active={props.active} cmp={props.cmp} />
      </div>
    </>
  );
};

export default AddJob;
