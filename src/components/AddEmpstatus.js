import React, { useState } from "react";

const AddEmpstatus = () => {
  const initialFormData = {
    empname: "",
    department: "",
    startdate: "",
    enddate: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-8 bg-white rounded-lg shadow-lg ml-96">
      <h1 className="text-2xl font-semibold mb-4">Employees Status</h1>

        <form onSubmit={handleSubmit} className="space-y-4 rounded px-8 pt-6 pb-8 mb-4">
          <div>
            <label htmlFor="jobTitle">Employee Name:</label>
            <input
              type="text"
              name="empname"
              value={formData.empname}
              onChange={handleInputChange}
              className="w-full px-1  border border-gray-300 rounded focus:outline-none focus:border-blue-500 ml-4"
              placeholder="Enter the Name"
            />
          </div>
         
          <div>
            <label htmlFor="department">Department :</label>
            <input
              type="text"
             
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="w-full px-1  border border-gray-300 rounded focus:outline-none focus:border-blue-500 ml-4"
              placeholder="Enter the employment type"
            />
          </div>
          <div>
            <label htmlFor="start date">Start date </label>
            <input
              type="date"
             
              name="startdate"
              value={formData.startdate}
              onChange={handleInputChange}
              className="w-full px-1  border border-gray-300 rounded focus:outline-none focus:border-blue-500 ml-4"
              placeholder="Enter educational qualifications"
            />
          </div>

          <div>
            <label htmlFor="start date">End date </label>
            <input
              type="date"
             
              name="enddate"
              value={formData.startdate}
              onChange={handleInputChange}
              className="w-full px-1  border border-gray-300 rounded focus:outline-none focus:border-blue-500 ml-4"
              placeholder="Enter educational qualifications"
            />
          </div>
          <div className="space-x-4 mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmpstatus;
