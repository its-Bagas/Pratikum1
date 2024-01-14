import React, { useState } from "react";

function Cicilan() {
  const [nominal, setNominal] = useState("");
  const [bunga, setBunga] = useState("");
  const [periode, setPeriode] = useState("");
  const [cil, setCil] = useState(null);

  const calcucicil = () => {
    const setnom = parseInt(nominal);
    const setbung = parseInt(bunga);
    const perioded = parseInt(periode);

    if (setnom <= 0 || setbung <= 0 || perioded <= 0) {
      alert("Masukkan nominal , bunga dan periode yang valid.");
      return;
    }

    const calculatedcil = (setnom + setnom * (setbung / 100)) / perioded;
    setCil(calculatedcil.toFixed(0));
  };
  return (
    <div className=" mt-10 text-center text-xl mx-96 border border-black bg-slate-200">
      <h2 className=" font-semibold text-3xl py-8 bg-sky-400 text-white">Cicilan Bank</h2>
      <div className=" container mt-8 ">
        <label className=" text-2xl" htmlFor="nominal">
          Nominal :
        </label>
        <input className=" ml-10 border-2 border-black rounded-sm" type="number" id="nominal" value={nominal} onChange={(e) => setNominal(e.target.value)} />
      </div>
      <div className=" containe mt-8">
        <label className="text-2xl ml-8" htmlFor="bunga">
          Bunga :
        </label>
        <input className="ml-8 border-2 border-black rounded-sm" type="number" id="bunga" value={bunga} onChange={(e) => setBunga(e.target.value)} />
      </div>
      <div className=" containe mt-8">
        <label className="text-2xl ml-6" htmlFor="Periode">
          Periode :
        </label>
        <input className="ml-8 border-2 border-black rounded-sm" name="type" id="Periode" value={periode} onChange={(e) => setPeriode(e.target.value)} />
      </div>
      <button className=" mt-12 mb-4 bg-sky-300 px-10 py-3 rounded-md" onClick={calcucicil}>
        Hitung BMI
      </button>
      {cil !== null && (
        <div>
          <h4 className=" py-2 bg-white mt-2">Hasil : {cil}</h4>
        </div>
      )}
    </div>
  );
}

export default Cicilan;
