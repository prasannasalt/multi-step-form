import React from "react";

const PersonalInfo = ({ nextStep, handleChange, values }) => {
  const continueStep = (e) => {
    e.preventDefault();
    if (values.name && values.number) {
      nextStep();
    } else {
      alert("Please fill out all required fields");
    }
  };

  return (
    <form>
      <h2>Personal Information</h2>
      <label>
        Name:
        <input
          type="text"
          value={values.name}
          onChange={handleChange("name")}
          required
        />
      </label>
      <label>
        Number:
        <input
          type="text"
          value={values.number}
          onChange={handleChange("number")}
          required
        />
      </label>
      <button onClick={continueStep}>Next</button>
    </form>
  );
};

export default PersonalInfo;
