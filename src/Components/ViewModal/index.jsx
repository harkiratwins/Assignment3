import React, { useEffect } from "react";
import { useState } from "react";
import { Modal, ListGroup, ListGroupItem } from "react-bootstrap";

const ViewModal = ({ id, post }) => {
  const [inputData, setInputData] = useState({
    id: "",
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

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <i className="material-icons" onClick={handleShow}>
        &#xE417;
      </i>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>View Employee Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            <ListGroup>
              <ListGroupItem>
                FirstName - {inputData.FirstName}
              </ListGroupItem>
              <ListGroupItem>
                LastName - {inputData.LastName}
              </ListGroupItem>
              <ListGroupItem>
                Age - {inputData.Age}
              </ListGroupItem>
              <ListGroupItem>
                Gender - {inputData.Gender}
              </ListGroupItem>
            </ListGroup>
          }
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ViewModal;
