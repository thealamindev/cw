import React from "react";
import Container from "./Container";

const Contact = () => {
  return (
    <div className="py-10 bg-gray-100">
      <Container>
        <h3 className="text-3xl font-bold text-center text-black">
          Contact Us
        </h3>
        <p className="text-center mt-4 text-black">
          We would love to hear from you! Reach out to us for any inquiries.
        </p>
        <form className="mt-10 max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
