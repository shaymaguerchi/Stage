import React from "react";
import { useState } from 'react';

import { Stepper, Step, Button } from "@material-tailwind/react";

const steps = [
  {
    title: "Personal Information",
    fields: [
      { name: "photo", label: "Photo", type: "file" },
      { name: "name", label: "Name", type: "text" },
      { name: "gender", label: "Gender", type: "text" },
      { name: "dateOfBirth", label: "Date of Birth", type: "date" },
      { name: "identificationNumber", label: "Identification Number", type: "text" },
    ],
  },
  {
    title: "Contact Information",
    fields: [
      { name: "address", label: "Address", type: "text" },
      { name: "email", label: "Email", type: "email" },
      { name: "phone", label: "Phone", type: "tel" },
    ],
  },
  {
    title: "Employment Details",
    fields: [
      { name: "manager", label: "Manager", type: "text" },
      { name: "department", label: "Department", type: "text" },
      { name: "jobTitle", label: "Job Title", type: "text" },
      { name: "startDate", label: "Start Date", type: "date" },
      { name: "status", label: "Status", type: "text" },
    ],
  },
  {
    title: "Compensation and Benefits",
    fields: [
      { name: "salaryOrHourlyRate", label: "Salary or Hourly Rate", type: "number" },
      { name: "payFrequency", label: "Pay Frequency", type: "text" },
      { name: "bankAccountDetails", label: "Bank Account Details", type: "text" },
    ],
  },
  {
    title: "Emergency Contacts",
    fields: [
      { name: "emergencyContactName", label: "Name", type: "text" },
      { name: "relationship", label: "Relationship", type: "text" },
      { name: "emergencyContactPhone", label: "Phone", type: "tel" },
    ],
  },
  {
    title: "Education and Qualifications",
    fields: [
      { name: "highestEducationLevel", label: "Highest Level of Education", type: "text" },
      { name: "degreesOrCertifications", label: "Degrees or Certifications Earned", type: "text" },
      { name: "professionalLicenses", label: "Professional Licenses or Designations", type: "text" },
    ],
  },
  {
    title: "Skills and Experience",
    fields: [
      { name: "workExperience", label: "Relevant Work Experience", type: "text" },
      { name: "keySkills", label: "Key Skills or Competencies", type: "text" },
    ],
  },
  {
    title: "Time Off and Leave",
    fields: [
      { name: "vacationLeaveBalance", label: "Vacation Leave Balance", type: "number" },
      { name: "sickLeaveBalance", label: "Sick Leave Balance", type: "number" },
    ],
  },
];

const AddEmployees = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStep = (stepIndex) => {
    const step = steps[stepIndex];
    return (
      <div key={step.title}>
        <h1 className="text-2xl font-semibold mb-4">Step {stepIndex + 1}: {step.title}</h1>
        <form className="space-y-4">
          {step.fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name}>{field.label}:</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleInputChange}
                placeholder={`Enter your ${field.label}`}
              />
            </div>
          ))}
        </form>
        <div className="space-x-4 mt-4">
          {stepIndex > 0 && (
            <button
              className="px-4 py-2 bg-gray-300 rounded-md"
              onClick={handlePrevStep}
            >
              Previous
            </button>
          )}
          {stepIndex < steps.length - 1 && (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={handleNextStep}
            >
              Next
            </button>
          )}
        
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Stepper component */}
      <Stepper
        activeStep={currentStep}
        isLastStep={(value) => setCurrentStep(steps.length - 1)}
        isFirstStep={(value) => setCurrentStep(0)}
      >
        {/* Render the steps */}
        {steps.map((step, index) => (
          <Step key={index} onClick={() => setCurrentStep(index)}>
            {index + 1}
          </Step>
        ))}
      </Stepper>

      {/* Render the form for the current step */}
      {renderStep(currentStep)}

      {/* Navigation buttons */}
      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrevStep} disabled={currentStep === 0}>
          Previous
        </Button>
        <Button onClick={handleNextStep} disabled={currentStep === steps.length - 1}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default AddEmployees;
