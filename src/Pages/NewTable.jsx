import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateModel from "../Components/CreateModel";
import EditModel from "../Components/Edit";
import ViewModal from "../Components/ViewModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = "http://localhost:4500/students";


const showToastMessage = () => {
  toast.success("Successfully Deleted !", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

const NewTable = () => {
  const [post, setPost] = useState([]);
  const [length, setlength] = useState(0);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, [post]);

  function deletePost(evt,id) {
    // evt.stopPropagation()
    const conf = window.confirm("Do You Want To Delete");
    if (conf) {
      axios
        .delete(`${baseURL}/${id}`)
        .then(() => {
          //alert('Record is deleted');
          // setPost(null)
          showToastMessage();
        })
        .catch((err) => console.log(err));
        
    }
  }

  return (
    <>
    <div className="App">
      <div className="container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-8">
                <h2 style={{ textAlign: "left" }}>
                Employee  <b>List</b>
                </h2>
              </div>

              <div className="col-sm-4" style={{ textAlign: "right" }}>
                <CreateModel
                  setPost={setPost}
                  post={post}
                  setlength={setlength}
                />
                {/* <Button
                  type="button"
                  //onClick={handleShow}
                  className="btn btn-info add-new"
                >
                  <i className="fa fa-plus"></i> Add New
                </Button> */}
              </div>
            </div>
          </div>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>SR.No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {post.map((post, i) => (
                <tr key={i}>
                  <td>{post.id}</td>
                  <td>{post.FirstName}</td>
                  <td>{post.LastName}</td>
                  <td>{post.Age}</td>
                  <td>{post.Gender}</td>
                  <td>
                    <a
                      href="D:\Harkirat kaur\Assignment3\project-3\src\Components\ViewModal\index.jsx"
                      className="view"
                      title="View"
                    >
                      <ViewModal id={post.id} post={post} />
                    </a>
                    <a
                      href="D:\Harkirat kaur\Assignment3\project-3\src\Components\Edit"
                      className="edit"
                      title="Edit"
                    >
                      <EditModel
                        id={post.id}
                        post={post}
                        setlength={setlength}
                      />
                    </a>
                    <a href="aa" className="delete" title="Delete">
                      <i
                        onClick={(evnt) => deletePost(evnt,post.id)}
                        className="material-icons"
                      >
                        &#xE872;
                      </i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      </div>
    </div>
  
    </>
  );
};
export default NewTable;
