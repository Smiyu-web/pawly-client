import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";

import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UPDATE_WEIGHT_MUTATION } from "../../GraphQL/Mutations";

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

const EditWeight = ({ today, todayData }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [weight, setWeight] = useState();
  const todayWeight = todayData?.weightNum;
  const id = todayData?.id;

  const [updateWeight, { data, loading, error }] = useMutation(
    UPDATE_WEIGHT_MUTATION
  );

  useEffect(() => {
    setWeight(todayWeight);
  }, [todayWeight]);

  const submit = (e) => {
    e.preventDefault();

    // weight is string type.
    console.log("weight type", typeof weight);

    updateWeight({
      variables: {
        id: id,
        updateWeightNum: parseFloat(weight),
      },
    })
      .then(({ data }) => {
        console.log("Updated data", data);
        Swal.fire({
          title: "Success updated weight!",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log("Something wrong", err);
        Swal.fire({
          title: "Something wrong!",
          text: "Cannot update weight.",
          icon: "error",
        });
      })
      .finally(() => {
        closeModal();
        location.reload();
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
        <FontAwesomeIcon icon={faPen} size="lg" />
        <h6 className="mt-2">EDIT</h6>
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
                  value={weight}
                  step="0.01"
                  style={{ textAlignLast: "center" }}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>
            <div className="text-center flex justify-center">
              <input className="add" type="submit" value="Edit" />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditWeight;
