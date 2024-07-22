import React from "react";

const AddressInfo = ({ nextStep, prevStep, handleChange, values }) => {
  const continueStep = (e) => {
    e.preventDefault();
    if (values.address) {
      nextStep();
    } else {
      alert("Please fill out all required fields");
    }
  };

  return (
    <form>
      <h2>Address Information</h2>
      <label>
        Address:
        <input
          type="text"
          value={values.address}
          onChange={handleChange("address")}
          required
        />
      </label>
      <div className="form-navigation">
        <button onClick={prevStep}>Back</button>
        <button onClick={continueStep}>Next</button>
      </div>
    </form>
  );
};

export default AddressInfo;
