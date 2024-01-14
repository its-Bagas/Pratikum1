import React, { useState } from "react";

function Pembelian() {
  const [harga, setHarga] = useState("");
  const [ppn, setPpn] = useState("");
  const [diskon, setDiskon] = useState("");
  const [hargaAkhir, setHargaAkhir] = useState(null);

  const calcuakhir = () => {
    const sethar = parseInt(harga);
    const setpp = parseInt(ppn);
    const setdis = parseInt(diskon);

    if (sethar <= 0 || setpp <= 0 || setdis <= 0) {
      alert("Masukkan harga awal, ppn dan diskon yang valid.");
      return;
    }

    const totalbeli = sethar + (sethar * setpp) / 100;
    const totaldiskon = totalbeli - (totalbeli * setdis) / 100;
    setHargaAkhir(totaldiskon.toFixed(2));
  };

  return (
    <div className=" mt-10 text-center text-xl mx-96 border border-black bg-slate-200">
      <h2 className=" font-semibold text-3xl bg-red-400 text-white py-8">Hitung Harga Akhir</h2>
      <div className=" container mt-8 ">
        <label className=" text-2xl" htmlFor="harga">
          Harga Awal :
        </label>
        <input className=" ml-4 border-2 border-black rounded-sm" type="number" id="harga" value={harga} onChange={(e) => setHarga(e.target.value)} />
      </div>
      <div className=" containe mt-8">
        <label className="text-2xl ml-12" htmlFor="ppn">
          PPN :
        </label>
        <input className="ml-10 border-2 border-black rounded-sm" type="number" id="ppn" value={ppn} onChange={(e) => setPpn(e.target.value)} />
      </div>
      <div className=" containe mt-8">
        <label className="text-2xl ml-8" htmlFor="diskon">
          Diskon :
        </label>
        <input className="ml-8 border-2 border-black rounded-sm" name="type" id="diskon" value={diskon} onChange={(e) => setDiskon(e.target.value)} />
      </div>
      <button className=" mt-12 mb-4 bg-red-300 px-10 py-3 rounded-md" onClick={calcuakhir}>
        Hitung Harga Akhir
      </button>
      {hargaAkhir !== null && (
        <div>
          <h4 className=" mt-2 py-2 bg-white">Hasil : {hargaAkhir} </h4>
        </div>
      )}
    </div>
  );
}

export default Pembelian;
