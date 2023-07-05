import React from "react";
import axios from "axios";
import { useState } from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = "http://localhost:4500/students";

function CreateModel({post, setPost, setlength}) {
  const [show, setShow] = useState(false);
  

  const [inputData, setInputData] = useState({
    FirstName: "",
    LastName: "",
    Age: "",
    Gender: "",
  });

  const showToastMessage = () => {
    toast.success('Successfully submitted!', {
        position: toast.POSITION.TOP_RIGHT
    });
};


  function handleSubmit(event) {
    debugger;
    event.preventDefault();
    axios
      .post(baseURL, inputData)
      .then((response) => {
        // setInputData(response);
        console.log(response);
        showToastMessage();
        //alert("Data Added Successfully!");
        setlength(response.data);
        handleClose()
      })
      .catch((err) => console.log(err));
      setInputData({
        FirstName: "",
        LastName: "",
        Age: "",
        Gender: "",
      });
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill The Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
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
                        onChange={(e) =>
                          setInputData({ ...inputData, Gender: e.target.value })
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
                        onChange={(e) =>
                          setInputData({ ...inputData, Gender: e.target.value })
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
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default CreateModel;
