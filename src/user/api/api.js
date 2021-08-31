//   name :  redux - api   //
//   author : suman       //
//   Date  : 24/08/2021   //

import axios from "axios";

export const loadUsersApi = async () =>
  await axios.get("http://localhost:9090/employees");

export const createUserApi = async () =>
  await axios.post("http://localhost:9090/employees");

export const deleteUserApi = async (userId) =>
  await axios.delete(`http://localhost:9090/employees/${userId}`);

export const updateUserApi = async (userId, userInfo) =>
  await axios.put(`http://localhost:9090/employees/${userId}`, userInfo);
