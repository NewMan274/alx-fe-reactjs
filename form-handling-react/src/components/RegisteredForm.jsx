import { useState } from "react";

function RegisteredForm() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Telephone, setTelephone] = useState(""); 
  
  return (
    <form className="flex flex-col items-center justify-center h-screen bg-gray-500 text-white">
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-96  gap-4 flex flex-col">
        <h2 className="text-2xl font-bold mx-auto">Registered Form</h2>
        <div className="flex flex-col items-start text-lg font-semibod">
          <label htmlFor="FirstName">First Name</label>
          <input
            type="text"
            id="FirstName"
            value={FirstName}
            onChange={e => setFirstName(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>
        <div className="flex flex-col items-start text-lg font-semibod">
          <label htmlFor="LastName">Last Name</label>
          <input
            type="text"
            id="LastName"
            value={LastName}
            onChange={e => setLastName(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>
        <div className="flex flex-col items-start text-lg font-semibod">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={Email}
            onChange={e => setEmail(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>
        <div className="flex flex-col items-start text-lg font-semibod">
          <label htmlFor="telephone">Phone</label>
          <input
            type="tel"
            id="telephone"
            value={Telephone}
            onChange={e => setTelephone(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>
        <button type="submit" className="bg-white hover:bg-gray text-black font-bold py-2 px-4 rounded w-1/4 mx-auto">
          Submit
        </button>
      </div>
    </form>
  )
};

export default RegisteredForm;