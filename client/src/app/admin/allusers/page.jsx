"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const usersData = [
  {
    _id: "671a8f9a1c2e9001a1a00101",
    email: "john.doe@example.com",
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    role: "USER",
    status: "ACTIVE",
    image: "/defaultProfile.png",
  },
  {
    _id: "671a8f9a1c2e9001a1a00102",
    email: "jane.smith@example.com",
    username: "janesmith",
    firstName: "Jane",
    lastName: "Smith",
    role: "ADMIN",
    status: "ACTIVE",
    image: "/defaultProfile.png",
  },
  {
    _id: "671a8f9a1c2e9001a1a00103",
    email: "michael.brown@example.com",
    username: "mikebrown",
    firstName: "Michael",
    lastName: "Brown",
    role: "USER",
    status: "ACTIVE",
    image: "/defaultProfile.png",
  },
  {
    _id: "671a8f9a1c2e9001a1a00104",
    email: "sarah.johnson@example.com",
    username: "sarahj",
    firstName: "Sarah",
    lastName: "Johnson",
    role: "USER",
    status: "ACTIVE",
    image: "/defaultProfile.png",
  },
  {
    _id: "671a8f9a1c2e9001a1a00105",
    email: "david.wilson@example.com",
    username: "davidw",
    firstName: "David",
    lastName: "Wilson",
    role: "ADMIN",
    status: "ACTIVE",
    image: "/defaultProfile.png",
  },
  {
    _id: "671a8f9a1c2e9001a1a00106",
    email: "emily.taylor@example.com",
    username: "emilyt",
    firstName: "Emily",
    lastName: "Taylor",
    role: "USER",
    status: "SUSPENDED",
    image: "/defaultProfile.png",
  },
];

function Page() {
  const [users, setUsers] = useState(usersData);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  //   make admin
  const handleMakeAdmin = (id) => {
    console.log("Make Admin:", id);
    setOpenMenu(null);
  };
  // Suspend Activate here
  const handleToggleStatus = (id) => {
    console.log("Toggle Status:", id);
    setOpenMenu(null);
  };
  // Delete User function here
  const handleDeleteUser = (id) => {
    console.log("Delete User:", id);
    setOpenMenu(null);
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl text-white font-semibold ">All Users</h2>
      {/*  Desktop Table */}
      <div className="overflow-x-auto rounded-lg shadow-sm hidden md:block">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-50 text-sm text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left font-semibold">Profile</th>
              <th className="py-3 px-4 text-left font-semibold">
                Username / Full Name
              </th>
              <th className="py-3 px-4 text-left font-semibold">Email</th>
              <th className="py-3 px-4 text-left font-semibold">Role</th>
              <th className="py-3 px-4 text-left font-semibold">Status</th>
              <th className="py-3 px-4 text-left font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-800">
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-t border-gray-200 hover:bg-gray-100 transition-colors relative">
                <td className="py-3 px-4">
                  <Image
                    src={user.image}
                    alt={user.username}
                    width={45}
                    height={45}
                    className="rounded-full object-cover border border-gray-300"
                  />
                </td>

                <td className="py-3 px-4 font-medium text-[#7050ff]">
                  <div>
                    <p>{user.username}</p>
                    <p className="text-gray-500 text-xs">
                      {user.firstName} {user.lastName}
                    </p>
                  </div>
                </td>

                <td className="py-3 px-4 text-gray-600">{user.email}</td>
                <td className="py-3 px-4 text-gray-800">{user.role}</td>

                <td
                  className={`py-3 px-4 font-semibold ${
                    user.status === "ACTIVE" ? "text-green-600" : "text-red-500"
                  }`}>
                  {user.status}
                </td>

                <td className="py-3 px-4 relative">
                  <button
                    onClick={() => toggleMenu(user._id)}
                    className="p-2 rounded-full hover:bg-gray-200">
                    <EllipsisVerticalIcon className="w-5 h-5 text-gray-600" />
                  </button>

                  {openMenu === user._id && (
                    <div className="absolute right-4 top-12 bg-white border border-gray-200 shadow-md rounded-md w-40 z-10">
                      <ul className="text-sm text-gray-700">
                        <li
                          onClick={() => handleMakeAdmin(user._id)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          {user.role === "ADMIN"
                            ? "Remove Admin"
                            : "Make Admin"}
                        </li>
                        <li
                          onClick={() => handleToggleStatus(user._id)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          {user.status === "ACTIVE"
                            ? "Suspend User"
                            : "Activate User"}
                        </li>
                        <li
                          onClick={() => handleDeleteUser(user._id)}
                          className="px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer">
                          Delete User
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile  View  */}
      <div className="space-y-4 md:hidden">
        {users.map((user) => (
          <div
            key={user._id}
            className="bg-white rounded-lg shadow border border-gray-200 p-4 relative">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Image
                  src={user.image}
                  alt={user.username}
                  width={45}
                  height={45}
                  className="rounded-full border border-gray-300"
                />
                <div>
                  <p className="font-semibold text-[#7050ff]">
                    {user.username}
                  </p>
                  <p className="text-xs text-gray-500">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-xs text-gray-600">{user.email}</p>
                </div>
              </div>

              <button
                onClick={() => toggleMenu(user._id)}
                className="p-2 rounded-full hover:bg-gray-100">
                <EllipsisVerticalIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="flex justify-between mt-3 text-sm">
              <span
                className={`font-semibold ${
                  user.status === "ACTIVE" ? "text-green-600" : "text-red-500"
                }`}>
                {user.status}
              </span>
              <span className="text-gray-700">{user.role}</span>
            </div>

            {openMenu === user._id && (
              <div className="absolute right-4 top-12 bg-white border border-gray-200 shadow-md rounded-md w-40 z-10">
                <ul className="text-sm text-gray-700">
                  <li
                    onClick={() => handleMakeAdmin(user._id)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    {user.role === "ADMIN" ? "Remove Admin" : "Make Admin"}
                  </li>
                  <li
                    onClick={() => handleToggleStatus(user._id)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    {user.status === "ACTIVE"
                      ? "Suspend User"
                      : "Activate User"}
                  </li>
                  <li
                    onClick={() => handleDeleteUser(user._id)}
                    className="px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer">
                    Delete User
                  </li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
