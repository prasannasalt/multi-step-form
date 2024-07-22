import React from "react";

const SkillsInfo = ({ nextStep, prevStep, handleChange, values }) => {
  const continueStep = (e) => {
    e.preventDefault();
    if (values.skills) {
      nextStep();
    } else {
      alert("Please fill out all required fields");
    }
  };

  return (
    <form>
      <h2>Skills Information</h2>
      <label>
        Skills:
        <input
          type="text"
          value={values.skills}
          onChange={handleChange("skills")}
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

export default SkillsInfo;
