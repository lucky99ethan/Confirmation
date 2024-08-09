"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [showEmailConfirmation, setShowEmailConfirmation] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowEmailConfirmation(true);
  };

  const handleEmailConfirm = () => {
    // Handle confirmation logic here
    setShowEmailConfirmation(false);
    alert(`Email: ${email}\nPhone Number: ${phoneNumber}\nName: ${name}\nSecond Name: ${secondName}`);
  };

  const handleCloseConfirmation = () => {
    setShowEmailConfirmation(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-white justify-between p-24  w-full h-full">
      <h1 className="text-black mb-10">Wellcome to registration</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-red-600 mb-80">
        <div>
          <label>Email</label>
          <br/>
          <input 
            type="text" 
            placeholder="Enter email" 
            value={email}
            className="rounded-lg p-2 border-2 text-black border-black"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <br/>
          <input 
            type="text" 
            placeholder="Enter Phone Number" 
            className="rounded-lg p-2 border-2 text-black border-black"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>First Name</label>
          <br/>
          <input 
            type="text" 
            placeholder="Enter First Name" 
            className="rounded-lg p-2 border-2 text-black border-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Second Name</label>
          <br/>
          <input 
            type="text" 
            placeholder="Enter Second Name" 
            className="rounded-lg p-2 border-2 text-black border-black"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
          />
        </div>
        <button type="submit" className="border-2 border-red-400 w-24 h-10 rounded-xl text-black ml-9">Submit</button>
      </form>

      {showEmailConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full flex  bg-opacity-30 items-center justify-center z-10">
          <div className="p-4 w-84 h-61 rounded-xl shadow-2xl bg-black">
            <div className="flex justify-center items-center mt-4 mb-4">
            </div>
            <h2 className="text-xl font-bold mb-2 text-base-neutral-focus text-center">
              Do you want to save this values?
            </h2>
            <p className="mb-4">
              Please confirm if you want to save the values.
            </p>
            <div className="flex justify-center gap-4">
              <button
                className=" border-2 border-orange-400 w-93 h-13 p-2 rounded-lg text-white"
                onClick={handleEmailConfirm}
              >
               Save
              </button>
              <button
                className=" border-white-400 border-2 w-93 h-13 p-2 rounded-lg text-white"
                onClick={handleCloseConfirmation}
              >
               Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

