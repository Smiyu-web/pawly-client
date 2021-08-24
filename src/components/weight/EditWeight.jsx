import React, { useState } from "react";
import Modal from "react-modal";

import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const AddWeight = ({ today, todayWeight }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  // console.log(todayData?.weightNum);
  // const todayWeight = todayData?.weightNum;
  console.log(todayWeight);
  const [weight, setWeight] = useState(todayWeight);
  console.log(weight);

  const submit = (e) => {
    e.preventDefault();
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
        <h6 className="mt-2">EDIT WEIGHT</h6>
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
                  value={todayWeight}
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

export default AddWeight;
