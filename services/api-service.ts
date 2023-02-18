import axios from "axios";

const baseURL = process.env.API_ENDPINT;

const request = async (method: string, endpoint: string, data?: any) => {
  try {
    const res = await axios({
      method,
      baseURL,
      url: endpoint,
      data,
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export default request;
