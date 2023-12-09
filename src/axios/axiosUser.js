import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const createUser = async (name, surname, phone, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, {
      name,
      surname,
      phone,
      email,
      password,
    });

    const code = 1;

    return {response : response.data,code};
  } catch (error) {
    console.log(error);    
    return error.response.data.errors.errors[0].msg;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });

    const code = 1;

    return {response : response.data,code};
  } catch (error) {
    console.log(error);
    return error.response.data.msg;
  }
};

export const verifyUser = async (email, code) => {
  try {
    const response = await axios.patch(`${BASE_URL}/auth/verify`, {
      email,
      code,
    });
    const codeVerify = 1;
    
    return {response : response.data, codeVerify};
  } catch (error) {
    console.log(error);
    return error.response.data.msg;
  }
};
