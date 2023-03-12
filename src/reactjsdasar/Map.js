import React from "react";

const makanans = [
  {
    nama: "soto",
    harga: 12000,
  },
  {
    nama: "Bakso",
    harga: 10000,
  },
  {
    nama: "Mie Ayam",
    harga: 7000,
  },
  {
    nama: "Nasi Goreng",
    harga: 15000,
  },
];

//REDUCE

const total_bayar = makanans.reduce((total_harga, makanan) => {
  return total_harga + makanan.harga;
}, 0);

const Map = () => {
  return (
    <div>
      <h2>Map Sederhana </h2>
      <u>
        {makanans.map((makanan, index) => (
          <li>
            {index + 1} {makanan.nama} - Harga {makanan.harga}
          </li>
        ))}
      </u>

      <h2>Map Filter Harga yang lebih dari 11000</h2>

      <u>
        {makanans
          .filter((makanan) => makanan.harga > 11000)
          .map((makanan, index) => (
            <li>
              {index + 1} {makanan.nama} - Harga {makanan.harga}
            </li>
          ))}
      </u>

      <h3>Total Harga:{total_bayar}</h3>
    </div>
  );
};

export default Map;
