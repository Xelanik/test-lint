import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";

const UserList = ({ data, searchTerm, sortType }) => {
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sorted = [...filteredData].sort((a, b) => {
      if (sortType === "asc") return a.username.localeCompare(b.username);
      if (sortType === "desc") return b.username.localeCompare(a.username);
      return 0;
    });

    setSortedData(sorted);
  }, [data, searchTerm, sortType]);

  return (
    <>
      {sortedData.map((item) => (
        <UserCard key={item.id} user={item} />
      ))}
    </>
  );
};

export default UserList;
