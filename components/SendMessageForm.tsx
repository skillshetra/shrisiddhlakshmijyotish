// Declaring Client Component //
"use client"

// Importing Neccessary Packages //
import { SendMessage } from "@/app/Server";
import { ChangeEvent, FormEvent, useState } from "react";

// Exporting Default Function for Send Message Form //
export default function SendMessageForm() {
  // State Variables for Errors //
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [numberError, setNumberError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Handling name errors //
  const handleNameInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    // Regular expression: only alphabets (uppercase and lowercase), 5-20 characters
    if (!(/^[A-Za-z\s]{5,20}$/).test(event.target.value)) {
      setNameError('Name must be 5-20 alphabetic characters with no numbers or special characters.');
    } else {
      setNameError(''); // Clear error if valid
    }
  }

  // Handling Email errors //
  const handleEmailInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    // Basic email regex for common format validation
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(event.target.value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  // Handling Number errors //
  const handleNumberInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    // Regex for 10-digit mobile number starting with 0–9
    if (!(/^[0-9]\d{9}$/).test(event.target.value)) {
      setNumberError('Enter a valid 10-digit mobile number.');
    } else {
      setNumberError('');
    }
  };

  // Handling Message errors //
  const handleMessageInputChange = async (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length < 20 || event.target.value.length > 500) {
      setMessageError('Enter a valid message starting with 20-500 characters.');
    } else {
      setMessageError('');
    }
  }

  // Function for handling form submmision //
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // Preventing Default Behaviour //
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Getting FormData //
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const number = formData.get('number') as string;
    const message = formData.get('message') as string;

    // Checking for errors and sending message data to server //
    if ((nameError === "" && emailError === "" && numberError === "") && (name !== "" && email !== "" && number !== "" && message !== "")) {
      const response = await SendMessage(name, email, number, message);
      if (response.error) { setMessageError(response.message); }
      else {
        setSuccessMessage(response.message);
        form.reset();
        setMessageError("");
      }
    } else { setMessageError("Please fill all the fields correctly."); }
  }

  // Returning TSX //
  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
      <div className="flex w-full flex-col gap-1">
        <label htmlFor="name" className="text-base text-gray-600">Name</label>
        <input type="text" name="name" id="name" placeholder="Full Name" className="w-full px-2 py-1 bg-white border border-gray-500 outline-none focus:border-emerald-400 transition duration-300" autoFocus onChange={handleNameInputChange} />
        {nameError ? <p className="bg-red-300 text-red-600 px-2 py-1 rounded">{nameError}</p> : <></>}
      </div>
      <div className="flex w-full flex-col gap-1">
        <label htmlFor="email" className="text-base text-gray-600">Email</label>
        <input type="text" name="email" id="email" placeholder="Email" className="w-full px-2 py-1 bg-white border border-gray-500 outline-none focus:border-emerald-400 transition duration-300" onChange={handleEmailInputChange} />
        {emailError ? <p className="bg-red-300 text-red-600 px-2 py-1 rounded">{emailError}</p> : <></>}
      </div>
      <div className="flex w-full flex-col gap-1">
        <label htmlFor="number" className="text-base text-gray-600">Number</label>
        <input type="number" name="number" id="number" placeholder="Mobile Number" className="w-full px-2 py-1 bg-white border border-gray-500 outline-none focus:border-emerald-400 transition duration-300" onChange={handleNumberInputChange} />
        {numberError ? <p className="bg-red-300 text-red-600 px-2 py-1 rounded">{numberError}</p> : <></>}
      </div>
      <div className="flex w-full flex-col gap-1">
        <label htmlFor="message" className="text-base text-gray-600">Message</label>
        <textarea name="message" id="message" placeholder="Message" className="w-full min-h-40 max-h-40 px-2 py-1 bg-white border border-gray-500 outline-none focus:border-emerald-400 transition duration-300 resize-none" onChange={handleMessageInputChange}></textarea>
        {messageError ? <p className="bg-red-300 text-red-600 px-2 py-1 rounded">{messageError}</p> : <></>}
      </div>
      {successMessage ? <p className="bg-emerald-300 text-emerald-600 px-2 py-1 rounded">{successMessage}</p> : <></>}
      <button className="w-fit text-lg bg-primary text-primary px-6 py-0.5 border border-gray-500 cursor-pointer hover:border-gray-800 transition duration-300">Submit</button>
    </form>
  )
}