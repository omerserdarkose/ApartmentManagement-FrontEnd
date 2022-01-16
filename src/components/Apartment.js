import React from "react";

const Apartment = ({ apartment }) => {
  return (
    <tr>
      <td>{apartment.status?"DOLU":<span style={{color:"green"}}><b>BOŞ</b></span>}</td>
      <td>{apartment.block.toUpperCase()}</td>
      <td>{apartment.doorNumber}</td>
      <td>{apartment.ownerName.toUpperCase()}</td>
      <td>{apartment.hirerName?apartment.hirerName.toUpperCase():"-"}</td>
      <td>{apartment.type}
      </td>
    </tr>
  );
};

export default Apartment;
