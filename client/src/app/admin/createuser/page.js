"use client";

import { createUserByAdmin } from "@/actions/admin.action";
import { useState } from "react";
import { toast } from "react-hot-toast";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await createUserByAdmin({ name, email, password });
      if (res.success) {
        toast.success("User created successfully!");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        toast.error(res.message || "Failed to create user");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-6 flex justify-center items-center flex-col md:flex-row">
      <div className="text-center space-y-1">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
          Want Create An User
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          Please enter user info to continue
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#7050ff] text-white disabled:bg-gray-400 py-2 rounded-lg hover:bg-[#7033ff] transition duration-200 "
        >
          {isLoading ? "Creating..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
