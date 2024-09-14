import React from "react";
import { useNavigate } from "react-router-dom";
import logoWtext from "../assets/EntityC with text Dark.svg";

const ContactForm = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/"); // Navigate back to the home page or any specific page
  };

  return (
    <div className="flex flex-col top-0 bg-black text-white min-h-screen">
      {/* Back Button */}
      <div className="p-4">
        <button
          onClick={handleBackClick}
          className="text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none"
          aria-label="Go back to home page"
        >
          Back
        </button>
      </div>
      <div className="grid justify-items-center">
        <div className="md:w-1/4 w-1/2 ml-8 md:ml-32 pt-2 top-0">
          <img src={logoWtext} alt="Logo Entity C" />
        </div>
      </div>
      <div
        id="contact"
        className="max-w-[1040px] m-auto md:pl-20 pt-2 p-4 py-32"
        role="main"
      >
        <h1
          id="contact-form-title"
          className="py-10 text-4xl font-bold text-center "
        >
          Contact
        </h1>
        <form
          action={import.meta.env.VITE_APP_FORM_ACTION_URL}
          method="POST"
          encType="multipart/form-data"
          aria-labelledby="contact-form-title"
        >
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col ">
              <label htmlFor="name" className="uppercase text-sm py-2">
                Name
              </label>
              <input
                id="name"
                className="border-2 text-black rounded-lg p-3 flex border-gray-500"
                type="text"
                name="name"
                required
                aria-required="true"
                aria-describedby="name-description"
              />
              <span id="name-description" className="sr-only">
                Your full name
              </span>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="email" className="uppercase text-sm py-2">
                Email
              </label>
              <input
                id="email"
                className="border-2 text-black rounded-lg p-3 flex border-gray-500"
                type="email"
                name="email"
                required
                aria-required="true"
                aria-describedby="email-description"
              />
              <span id="email-description" className="sr-only">
                Your email address
              </span>
            </div>
          </div>

          <div className="flex flex-col py-2">
            <label htmlFor="subject" className="uppercase text-sm py-2">
              Subject
            </label>
            <input
              id="subject"
              className="border-2 text-black rounded-lg p-3 flex border-gray-500 "
              type="text"
              name="subject"
              required
              aria-required="true"
              aria-describedby="subject-description"
            />
            <span id="subject-description" className="sr-only">
              The subject of your message
            </span>
          </div>
          <div className="flex flex-col py2">
            <label htmlFor="message" className="uppercase text-sm py-2 ">
              Message
            </label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-500 text-black"
              name="message"
              id="message"
              cols="30"
              rows="10"
              minLength={10}
              required
              aria-required="true"
              aria-describedby="message-description"
            ></textarea>
            <span id="message-description" className="sr-only">
              Your message
            </span>
          </div>
          <button
            type="submit"
            aria-label="Send Message"
            className="bg-red-600 text-white mt-4 w-full p-4 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
