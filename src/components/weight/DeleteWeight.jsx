import React from "react";
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DELETE_WEIGHT_MUTATION } from "../../GraphQL/Mutations";

const DeleteWeight = ({ todayData }) => {
  const id = todayData?.id;
  const [deleteWeight, { data, loading, error }] = useMutation(
    DELETE_WEIGHT_MUTATION
  );

  const handleDelete = () => {
    deleteWeight({
      variables: {
        id: id,
      },
    })
      .then(({ data }) => {
        console.log("Delete", data);
        Swal.fire({
          title: "Success deleted weight!",
          icon: "success",
          timer: 2000,
        });
      })
      .catch((err) => {
        console.log("Something wrong", err);
        Swal.fire({
          title: "Something wrong!",
          text: "Cannot delete weight.",
          icon: "error",
        });
      })
      .finally(() => {
        location.reload();
      });
  };

  return (
    <div>
      <button onClick={handleDelete} className="weight_btn">
        <FontAwesomeIcon icon={faTrash} size="lg" />
        <h6 className="mt-2">DELETE</h6>
      </button>
    </div>
  );
};

export default DeleteWeight;
