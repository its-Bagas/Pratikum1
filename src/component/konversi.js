import React, { useState } from "react";
import ubahkonversi from "./ubahkonversi";

const Konversi = () => {
  const [bilangan, setBil] = useState(null);
  const [kebilangan, setkebil] = useState(null);
  const [value, setValue] = useState("");
  const [hasil, setHasil] = useState(null);

  const handlebbilangan = (e) => {
    setBil(e.target.value);
  };
  const handlekebilangan = (e) => {
    setkebil(e.target.value);
  };
  const handlevaluechange = (e) => {
    setValue(e.target.value);
  };
  const handlehasil = () => {
    const hasil = ubahkonversi.handlerhasil(bilangan, kebilangan, value);
    setHasil(hasil);
  };
  return (
    <div className=" mt-5 mx-96 border border-black bg-slate-200">
      <div className="">
        <h2 className=" py-8 bg-red-400 text-white text-3xl">Konversi Bilangan {bilangan}</h2>

        <div className=" mt-4">
          <label htmlFor="">Bilangan Awal : </label>

          <div className="mt-2">
            <select className=" border-2 border-black rounded-sm" name="type" value={bilangan} onChange={handlebbilangan}>
              <option value="decimal">Decimal</option>
              <option value="octal">Octal</option>
              <option value="binary">Binary</option>
              <option value="hexadecimal">Hexadecimal</option>
            </select>
          </div>
          <div className=" mt-3"></div>
          <label htmlFor="">
            Konversikan Ke :
            <div className=" mt-2">
              <select className="border-2 border-black rounded-sm" name="type" id="" value={kebilangan} onChange={handlekebilangan}>
                <option value="decimal">Decimal</option>
                <option value="octal">Octal</option>
                <option value="binary">Binary</option>
                <option value="hexadecimal">Hexadecimal</option>
              </select>
            </div>
          </label>
        </div>
        <div className=" mt-6"></div>
        <label className="" htmlFor="">
          Masukkan Bilangan:{" "}
        </label>

        <div className="">
          <input type="text" className="border-2 border-black rounded-sm" id="" value={value} onChange={handlevaluechange} />
        </div>
        <button className=" mt-6 px-6 py-2 bg-red-300 rounded-sm" onClick={handlehasil}>
          Convert
        </button>
        <div className="mt-5">{hasil !== null && <div className=" px-56 bg-white py-2">Hasil: {hasil}</div>}</div>
      </div>
    </div>
  );
};
export default Konversi;
