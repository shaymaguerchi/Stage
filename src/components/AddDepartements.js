import React from "react";
import { useState } from 'react';


const steps = [
  {
    title: "Personal Information",
    fields: [
      { name: "name", label: "Name", type: "text" },
      { name: "manager", label: "Manager", type: "text" },
      { name: "nbemployees", label: "Number of employees", type: "number" },
      
    ],
  },
  {
    title: "Contact Information",
    fields: [
    
      { name: "email", label: "Email", type: "email" },
      { name: "phone", label: "Phone", type: "tel" },
    ],
  },
  {
    title: "Description and Purpose",
    fields: [
      { name: "description", label: "Brief Description of the Departement", type: "textarea" },
      { name: "department's purpose", label: "Department's Purpose or Mission Statement", type: "textarea" },
    ],
  },
  {
    title: "List of employees",
    fields: [
       { name: "photo", label: "Photo", type: "file" },
      { name: "name", label: "Name", type: "text" },
      { name:"email", label:" Email" , type:"text"},
      { name: "job title", label:"Job Title" , type:"text"},
      { name: "status", label :"Status" , type:"text"},
      
    ],
  },


  
];

const AddDepartements = () => {
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
          <p className="mb-4">The Department has been created successfully.</p>
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
              ): field.type === 'textarea' ? (
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                  placeholder={`Enter your ${field.label}`}
                />
              )  : (
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

export default AddDepartements;
 

