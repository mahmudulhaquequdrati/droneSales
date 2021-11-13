import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const form = document.getElementById("submitForm");
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleOnSubmit = (e) => {
    const user = { email };
    fetch("https://drone-sales-2021.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          form.reset();
          setError("");
        } else {
          setError("email not registered");
          form.reset();
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h2 className="text-center text-2xl lg:text-4xl text-blue-600 font-sans font-bold mb-4">
        Make an admin
      </h2>

      {success && (
        <div className="flex justify-center w-96 mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-green-600 flex justify-center text-center">
            Admin added successfully
          </h2>
        </div>
      )}
      {error && (
        <div className="flex justify-center w-96 mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-500 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-red-600 flex justify-center text-center">
            {error}
          </span>
        </div>
      )}
      <form id="submitForm" onSubmit={handleOnSubmit}>
        <div className="lg:w-6/12 md:w-8/12 sm:w-8/12 w-10/12 mt-4 mx-auto">
          <input
            onBlur={handleOnBlur}
            placeholder="Email Address"
            type="email"
            className="w-full lg:w-8/12 md:w-8/12 mx-auto rounded-md border border-blue-400"
          />
          <div className="flex justify-center lg:inline md:inline">
            <input
              type="submit"
              value="Submit"
              className="mx-4 mt-4 h-10 px-6 bg-blue-600 cursor-pointer text-white rounded-md"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
