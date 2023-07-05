import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Form, Row, Col, Button  } from "react-bootstrap";

const baseURL = "http://localhost:4500/students";

const showToastMessage = () => {
  toast.success("Successfully submitted !", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

const EditModel = ({ id, post, setlength }) => {
  const [inputData, setInputData] = useState({
    FirstName: "",
    LastName: "",
    Age: "",
    Gender: "",
  });

  useEffect(() => {
    if (id) {
      setInputData({
        ...inputData,
        id: post.id,
        FirstName: post.FirstName,
        LastName: post.LastName,
        Age: post.Age,
        Gender: post.Gender,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    axios.put(`${baseURL}/${id}`, inputData).then((response) => {
      // setInputData(response.data);
      setlength(response.data);
      showToastMessage();
      //alert("data update successfully..!");
    });
    setShow(false);
  }

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(()=>{
    console.log("----" ,inputData)
  }, [inputData])

  return (
    <>
      <i className="material-icons" onClick={handleShow}>
        &#xE254;
      </i>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update The Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="FirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    required
                    name="FirstName"
                    value={inputData.FirstName}
                    onChange={(e) =>
                      setInputData({ ...inputData, FirstName: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="LastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    required
                    name="LastName"
                    value={inputData.LastName}
                    onChange={(e) =>
                      setInputData({ ...inputData, LastName: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3 " controlId="Age">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Age"
                    required
                    name="Age"
                    value={inputData.Age}
                    onChange={(e) =>
                      setInputData({ ...inputData, Age: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="Gender">
                  <Form.Label>Gender</Form.Label>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="female"
                        value="female"
                        name="Gender"
                        type={type}
                        checked={inputData.Gender === "female"}
                        onChange={(e) =>
                          setInputData({
                            ...inputData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        id={`inline-${type}-1`}
                        required
                      />
                      <Form.Check
                        inline
                        label="male"
                        value="male"
                        name="Gender"
                        type={type}
                        checked={inputData.Gender === "male"}
                        onChange={(e) =>
                          setInputData({
                            ...inputData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        id={`inline-${type}-2`}
                        required
                      />
                    </div>
                  ))}
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <ToastContainer /> */}
    </>
  );
};
export default EditModel;
