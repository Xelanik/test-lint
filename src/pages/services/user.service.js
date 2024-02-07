import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const useUserService = () => {
  const getAllUsers = (params) =>
    axios.get("/users", { params }).then((resp) => resp.data);

  return { getAllUsers };
};
