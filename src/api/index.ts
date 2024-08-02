import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASEURL,
});

const apiKey: string = import.meta.env.VITE_APP_API_KEY;

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    /**
     * Set Headers
     */
    config.headers["Accept"] = "application/json";
    config.headers["Content-Type"] = "application/json";
    config.headers["X-API-KEY"] = apiKey;

    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError): Promise<AxiosError> => {
    if (error.response) {
      const { status } = error.response;

      if (status === 500) {
        console.error({
          message: "Error",
          description: "Server error occured!",
        });
      }
    }

    return Promise.reject(error);
  }
);

export { instance as httpClient };
