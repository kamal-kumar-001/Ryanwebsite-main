import { useState } from "react";
import "./bmi.css"; // Import your CSS file for styling

const BMI = () => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmiResult, setBmiResult] = useState(null);

  const validateForm = () => {
    if (!age || !height || !weight || !gender) {
      alert("All fields are required!");
    } else {
      countBmi();
    }
  };

  const countBmi = () => {
    const bmi = (parseFloat(weight) / (parseFloat(height) / 100) ** 2).toFixed(
      2
    );

    let result = "";
    if (bmi < 18.5) {
      result = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result = "Healthy";
    } else if (bmi >= 25 && bmi <= 29.9) {
      result = "Overweight";
    } else if (bmi >= 30 && bmi <= 34.9) {
      result = "Obese";
    } else if (bmi >= 35) {
      result = "Extremely obese";
    }

    setBmiResult({ bmi, result });
  };
  const resetform = () => {
    // Reset the form
    setAge("");
    setHeight("");
    setWeight("");
    setGender("");
  };

  return (
    <div className="bmi-container">
      <h1 className="bmi-header">BMI Calculator</h1>
      <div className="bmi-form">
        <div className="bmi-inputRow">
          <label className="bmi-label">Age</label>
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="bmi-inputRow">
          <label className="bmi-label">Height (cm)</label>
          <input
            type="number"
            placeholder="Enter your height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="bmi-inputRow">
          <label className="bmi-label">Weight (kg)</label>
          <input
            type="number"
            placeholder="Enter your weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="bmi-genderRow">
          <button
            className={`bmi-genderButton ${
              gender === "male" ? "bmi-selectedGender" : ""
            }`}
            onClick={() => setGender("male")}
          >
            Male
          </button>
          <button
            className={`bmi-genderButton ${
              gender === "female" ? "bmi-selectedGender" : ""
            }`}
            onClick={() => setGender("female")}
          >
            Female
          </button>
        </div>
        <div className="bmi-both-button">
          <button className="bmi-submitButton" onClick={validateForm}>
            Calculate BMI
          </button>
          <button onClick={resetform} className="bmi-reset-button"> Reset</button>
        </div>

        {bmiResult && (
          <div className="bmi-resultContainer">
            <p className="bmi-resultLabel">BMI:</p>
            <p className="bmi-resultText">{bmiResult.bmi}</p>
            <p className="bmi-resultLabel">Result:</p>
            <p
              className={`bmi-resultText ${
                bmiResult.result === "Healthy" ? "bmi-healthy" : "bmi-unhealthy"
              }`}
            >
              {bmiResult.result}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMI;
