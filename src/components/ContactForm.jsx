import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col top-0 bg-black text-white min-h-screen">
      <div></div>
      <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="py-10 text-4xl font-bold text-center ">Contact</h1>
        <form
          action="https://getform.io/f/apjmeqka"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col ">
              <label className="uppercase text-sm py-2">Name</label>
              <input
                className="border-2 text-black rounded-lg p-3 flex border-gray-500"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-col ">
              <label className="uppercase text-sm py-2">Email</label>
              <input
                className="border-2 text-black rounded-lg p-3 flex border-gray-500"
                type="email"
                name="email"
              />
            </div>
          </div>

          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Subject</label>
            <input
              className="border-2 text-black rounded-lg p-3 flex border-gray-500 "
              type="text"
              name="subject"
            />
          </div>
          <div className="flex flex-col py2">
            <label className="uppercase text-sm py-2 ">Message</label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-500 text-black"
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="bg-red-500 text-gray-100 mt-4 w-full p-4 rounded-lg">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
