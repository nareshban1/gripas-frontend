import axios, { Method } from "axios";

const API_URL = process.env.API_ENDPOINT;

interface ApiRequestOptions {
  method?: Method;
  queryParams?: Record<string, any>;
  requestBody?: Record<string, any>;
  headers?: any;
}

const apiRequest = async <T>(
  url: string,
  options: ApiRequestOptions = {}
): Promise<T | undefined> => {
  try {
    const {
      method = "GET",
      queryParams = {},
      requestBody = {},
      headers = {},
    } = options;

    const response = await axios({
      method,
      url: `${API_URL}${url}`,
      params: queryParams,
      headers: {
        // "Accept-Encoding": "gzip,deflate,compress",
        "Content-Type": "application/json",
      },
      data: requestBody,
    });

    return response.data as T;
  } catch (error) {
    console.error(error);
  }
};

export default apiRequest;
