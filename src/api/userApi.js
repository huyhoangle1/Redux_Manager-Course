import { customAxios } from "./customAxios";


export default {
  CreateAccount: async (name, email, password) => {
    try {
      const res = await customAxios({
        method: "post",
        url: "http://localhost:9000/auth/register",
        data: { name: name, email: email, password: password },
      });
      return res.data;
    } catch (err) {
      throw err.data.message;
    }
  },

  login: async (email, password) => {
    try {
      const res = await customAxios({
        method: "post",
        url: "http://localhost:9000/auth/login",
        data: { email: email, password: password },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  },

  forgotPassword: async(password) =>{
    try {
      const res = await customAxios({
        method: 'POST',
        url:"http://localhost:9000/auth/forgotPassword",
        data: {password: password}
      })
    } catch (error) {
      throw error;
    }
  }
};