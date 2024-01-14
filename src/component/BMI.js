import React, { useState } from "react";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [ket, setKet] = useState(null);

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;

    if (isNaN(weightInKg) || isNaN(heightInM) || heightInM <= 0 || weightInKg <= 0) {
      alert("Masukkan berat dan tinggi yang valid.");
      return;
    }

    const calculatedBMI = weightInKg / (heightInM * heightInM);
    setBMI(calculatedBMI.toFixed(2));

    // Memberikan pemberitahuan berdasarkan nilai BMI

    if (calculatedBMI < 18.5) {
      setKet("BMI Anda menunjukkan bahwa Anda mungkin kurang berat badan (kurus).");
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
      setKet("BMI Anda dalam kisaran normal.");
    } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
      setKet("BMI Anda menunjukkan bahwa Anda mungkin kelebihan berat badan (gemuk).");
    } else {
      setKet("BMI Anda menunjukkan bahwa Anda mungkin mengalami obesitas.");
    }
  };

  return (
    <div className=" mt-10 text-center text-xl mx-96 border border-black bg-slate-200">
      <h2 className=" font-semibold text-3xl py-8 bg-teal-400 text-white">Body Mass Index</h2>
      <div className=" container mt-8 ">
        <label className=" text-2xl" htmlFor="weight">
          Berat (kg):
        </label>
        <input className=" ml-10 border-2 border-black rounded-sm" type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div className=" containe mt-8">
        <label className="text-2xl" htmlFor="height">
          Tinggi (cm):
        </label>
        <input className="ml-8 border-2 border-black rounded-sm" type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <button className=" mt-12 mb-4 bg-teal-300 px-10 py-3 rounded-md" onClick={calculateBMI}>
        Hitung BMI
      </button>
      {bmi !== null && (
        <div>
          <h3 className=" py-2 bg-white mt-2">Hasil BMI : {bmi}</h3>
          <p className="py-2 bg-white">{ket}</p>
        </div>
      )}
    </div>
  );
};

export default BMI;
