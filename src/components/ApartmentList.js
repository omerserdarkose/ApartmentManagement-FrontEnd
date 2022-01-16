import axios from "axios";
import React, { useEffect, useState } from "react";
import Apartment from "./Apartment";

const ApartmentList=()=> {
  const [apartmentList, setApartmentList] = useState([]);

  useEffect(async () => {
    await axios.get("apartments").then((res) => {
      if (res.data.success) {
        setApartmentList([...res.data.data]);
      }
    });
  }, []);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-1">Dolu/Boş</th>
            <th className="col-1">Blok</th>
            <th className="col-1">#</th>
            <th className="col-3">Ev Sahibi</th>
            <th className="col-3">Kiracı</th>
            <th className="col-1">Tip</th>
          </tr>
        </thead>
        {apartmentList && (
          <tbody>
            {apartmentList.map((apartment) => {
              return <Apartment key={apartment.id} apartment={apartment}></Apartment>;
            })}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default ApartmentList;
