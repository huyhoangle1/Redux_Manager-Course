import axios from "axios";
import { message } from "antd";

const customAxios = axios.create();

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // debugger
    message.error(error.response?.data?.message || error.message);
    if (axios.isCancel(error)) {
    }
    const response = {
      code: 0,
      data: error?.response?.data,
    };

    throw response;
  }
);
export { customAxios };




