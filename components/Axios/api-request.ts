import axios, { Method } from "axios";

const API_URL = process.env.API_ENDPOINT;

interface ApiRequestOptions {
  method?: Method;
  queryParams?: Record<string, any>;
  searchParams?: Record<string, any>;
}

const apiRequest = async <T>(
  url: string,
  options: ApiRequestOptions = {}
): Promise<T | undefined> => {
  try {
    const { method = "GET", queryParams = {}, searchParams = {} } = options;

    const response = await axios({
      method,
      url: `${API_URL}${url}`,
      params: queryParams,
      headers: {
        "Content-Type": "application/json",
      },
      data: searchParams,
    });

    return response.data as T;
  } catch (error) {
    console.error(error);
  }
};

export default apiRequest;
