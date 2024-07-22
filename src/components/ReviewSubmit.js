import React from "react";

const ReviewSubmit = ({ prevStep, handleSubmit, values }) => {
  return (
    <form>
      <h2>Review Your Information</h2>
      <p>
        <strong>Name:</strong> {values.name}
      </p>
      <p>
        <strong>Number:</strong> {values.number}
      </p>
      <p>
        <strong>Address:</strong> {values.address}
      </p>
      <p>
        <strong>Skills:</strong> {values.skills}
      </p>
      <p>
        <strong>Experience:</strong> {values.experience}
      </p>
      <div className="form-navigation">
        <button type="button" onClick={prevStep}>
          Back
        </button>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewSubmit;
