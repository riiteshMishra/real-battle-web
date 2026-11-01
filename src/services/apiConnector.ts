import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
});

interface ApiConnectorProps {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
  body?: unknown;
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
}

const apiConnector = async <T = unknown>({
  method,
  url,
  body,
  headers,
  params,
}: ApiConnectorProps) => {
  try {
    const response = await axiosInstance.request<T>({
      method,
      url,
      data: body,
      headers,
      params,
    });

    return response;
  } catch (error) {
    const message = axios.isAxiosError(error)
      ? error.message
      : "Unexpected request failure";

    console.error("API Error:", message);

    if (axios.isAxiosError(error) && error.response?.status === 401) {
      console.warn("Unauthorized - Token might be expired");
    }

    throw error;
  }
};

export default apiConnector;
