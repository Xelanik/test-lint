import React, { useEffect, useState } from "react";

import { useUserService } from "../services/user.service";

import UserList from "../../components/UserList/UserList";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [sortType, setSortType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { getAllUsers } = useUserService();

  useEffect(() => {
    getAllUsers().then((resp) => setUsers(resp));
    // eslint-disable-next-line
  }, []);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleSort = (type) => {
    if (type === sortType) setSortType("");
    else setSortType(type);
  };

  return (
    <div className="p-5">
      <div className="mb-4">
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Search by Username
        </label>

        <input
          onChange={handleSearch}
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search by Username"
          required
        />
      </div>

      <div class="inline-flex rounded-md shadow-sm mb-4" role="group">
        <button
          onClick={() => handleSort("asc")}
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          ASC
        </button>

        <button
          onClick={() => handleSort("desc")}
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          DESC
        </button>
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-center w-full">
        <UserList data={users} searchTerm={searchTerm} sortType={sortType} />
      </div>
    </div>
  );
};

export default HomePage;
