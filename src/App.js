import React, { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import AddressInfo from "./components/AddressInfo";
import SkillsInfo from "./components/SkillsInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import ReviewSubmit from "./components/ReviewSubmit";
import "./App.css";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    address: "",
    skills: "",
    experience: "",
  });

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "formData"), formData);
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        number: "",
        address: "",
        skills: "",
        experience: "",
      });
      setStep(1);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const steps = [
    <PersonalInfo
      nextStep={nextStep}
      handleChange={handleChange}
      values={formData}
    />,
    <AddressInfo
      nextStep={nextStep}
      prevStep={prevStep}
      handleChange={handleChange}
      values={formData}
    />,
    <SkillsInfo
      nextStep={nextStep}
      prevStep={prevStep}
      handleChange={handleChange}
      values={formData}
    />,
    <ExperienceInfo
      nextStep={nextStep}
      prevStep={prevStep}
      handleChange={handleChange}
      values={formData}
    />,
    <ReviewSubmit
      prevStep={prevStep}
      handleSubmit={handleSubmit}
      values={formData}
    />,
  ];

  return (
    <div className="App">
      <div className="step-indicator">
        <div className={step >= 1 ? "active" : ""}>Step 1</div>
        <div className={step >= 2 ? "active" : ""}>Step 2</div>
        <div className={step >= 3 ? "active" : ""}>Step 3</div>
        <div className={step >= 4 ? "active" : ""}>Step 4</div>
        <div className={step >= 5 ? "active" : ""}>Review</div>
      </div>
      {steps[step - 1]}
    </div>
  );
}

export default App;
