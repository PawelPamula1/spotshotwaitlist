import React from "react";

const JoinButton = () => {
  return (
    <form className="mt-8 w-full max-w-md flex flex-col items-center space-y-3">
      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-3 rounded-xl bg-[#f2eafa] text-[#333] placeholder:text-gray-500"
        required
      />
      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-[#4a5c6a] text-white font-medium"
      >
        Join the waitlist
      </button>
    </form>
  );
};

export default JoinButton;
