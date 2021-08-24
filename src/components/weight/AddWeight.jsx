import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { useMutation } from "@apollo/client";

import { faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CREATE_WEIGHT_MUTATION } from "../../GraphQL/Mutations";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
  },
};

const AddWeight = ({ today, todayData }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [weight, setWeight] = useState();

  const [addWeight, { data, loading, error }] = useMutation(
    CREATE_WEIGHT_MUTATION
  );

  const submit = (e) => {
    e.preventDefault();

    // weight is string type.
    console.log("weight type", typeof weight);

    addWeight({
      variables: {
        weightNum: parseFloat(weight),
      },
    })
      .then(({ data }) => {
        console.log("Insert data", data);
        Swal.fire({
          title: "Success add weight!",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log("Something wrong", err);
        Swal.fire({
          title: "Something wrong!",
          text: "Cannot add weight.",
          icon: "error",
        });
      })
      .finally(() => {
        closeModal();
      });
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="weight_btn">
        <FontAwesomeIcon icon={faPlus} size="lg" />
        <h6 className="mt-2">ADD WEIGHT</h6>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} size="lg" className="" />
        </button>
        <div className="flex justify-center mb-5">
          <h4>{today}</h4>
        </div>
        <div>
          <form onSubmit={submit} encType="multiple/form-data">
            <div className="flex justify-center">
              <div className="input_qty">
                <label className="input_label">Today's Weight</label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  step="0.01"
                  style={{ textAlignLast: "center" }}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>
            <div className="text-center flex justify-center">
              <input className="add" type="submit" value="Add" />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddWeight;
