import axios, {
	AxiosInstance,
	AxiosResponse,
	AxiosError,
	InternalAxiosRequestConfig,
} from "axios";
import { useAuthStore } from "~/store";

const instance: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_APP_API_BASEURL,
});

instance.interceptors.request.use(
	(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
		const API_KEY: string = import.meta.env.VITE_APP_API_KEY;
		const AUTH_TOKEN: string | undefined = useAuthStore().token;

		/**
		 * Set Headers
		 */
		config.headers["Accept"] = "application/json";
		config.headers["Content-Type"] = "application/json";
		config.headers["Authorization"] = "Bearer " + AUTH_TOKEN;
		config.headers["X-API-KEY"] = API_KEY;

		return config;
	},
	(error: AxiosError): Promise<AxiosError> => {
		return Promise.reject(error);
	},
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
	},
);

export { instance as httpClient };
