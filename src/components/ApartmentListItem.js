import React from "react";

const ApartmentListItem = ({ apartment }) => {


  return (
    <tr>
      <td>
        {apartment.status ? (
          "DOLU"
        ) : (
          <span style={{ color: "green" }}>
            <b>BOŞ</b>
          </span>
        )}
      </td>
      <td>{apartment.block.toUpperCase()}</td>
      <td>{apartment.doorNumber}</td>
      <td id={apartment.hirerid ?? null}>
        {apartment.ownerName.toUpperCase()}
      </td>
      <td id={apartment.hirerid ?? null}>
        {apartment.hirerName ? apartment.hirerName.toUpperCase() : "-"}
      </td>
      <td>{apartment.type}</td>
    </tr>
  );
};

export default ApartmentListItem;
