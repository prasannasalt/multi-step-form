import React from "react";

const ExperienceInfo = ({ nextStep, prevStep, handleChange, values }) => {
  const continueStep = (e) => {
    e.preventDefault();
    if (values.experience) {
      nextStep();
    } else {
      alert("Please fill out all required fields");
    }
  };

  return (
    <form>
      <h2>Experience Information</h2>
      <label>
        Experience:
        <textarea
          value={values.experience}
          onChange={handleChange("experience")}
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

export default ExperienceInfo;
