import React from "react";
import { useState } from 'react';


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
  const [isCompleted, setIsCompleted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({ ...prevFormData, [event.target.name]: file }));
  };

  const handleNextStep = () => {
    if (currentStep === steps.length - 1) {
      setIsCompleted(true);
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStep = (stepIndex) => {
    if (isCompleted) {
      return (
        <div>
          <h1 className="text-2xl font-semibold mb-4">Congratulations!</h1>
          <p className="mb-4">The account has been created successfully.</p>
        </div>
      );
    }
    const step = steps[stepIndex];
    return (
      <div key={step.title}>
        <h1 className="text-2xl font-semibold mb-4">Step {stepIndex + 1}: {step.title}</h1>
        <form className="space-y-4 rounded px-8 pt-6 pb-8 mb-4">
          {step.fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name}>{field.label}:</label>
              {field.type === 'file' ? (
                <label className="w-full px-4 py-2 bg-blue-500 text-white text-center rounded cursor-pointer">
                  Upload {field.label}
                  <input
                    type="file"
                    className="hidden"
                    name={field.name}
                    onChange={handleFileInputChange}
                  />
                </label>
              ) : (
                <input
                  type={field.type}
                  className="w-full px-1  border border-gray-300 rounded focus:outline-none focus:border-blue-500 ml-4"
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                  placeholder={`Enter your ${field.label}`}
                />
              )}
            </div>
          ))}
        </form>
        <div className="space-x-4 mt-4">
          {stepIndex > 0 && (
            <button
              className="bg-transparent hover:bg-gray-400 text-gray-700 font-semibold hover:text-black 
              px-6 pb-2 pt-2 border border-gray-700 hover:border-transparent rounded-full"
              onClick={handlePrevStep}
            >
              Previous
            </button>
          )}
          {stepIndex < steps.length - 1 ? (
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
              px-6 pb-2 pt-2 border border-blue-500 hover:border-transparent rounded-full"
              onClick={handleNextStep}
            >
              Next
            </button>
          ) : (
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
              px-6 pb-2 pt-2 border border-blue-500 hover:border-transparent rounded-full"
              onClick={handleNextStep}
            >
              Finish
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center justify-center w-full max-w-md p-8 bg-white rounded-lg shadow-lg ml-96">
          {renderStep(currentStep)}
        </div>
      </div>
    </div>
  );
};

export default AddEmployees;
 

