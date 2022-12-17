import axios from 'axios';
import type { AxiosInstance, HeadersDefaults } from 'axios';

abstract class ApiClient {
  protected readonly instace: AxiosInstance;

  constructor(baseURL: string, headers?: HeadersDefaults) {
    this.instace = axios.create({ baseURL, withCredentials: true });

    if (headers) {
      this.instace.defaults.headers = { ...headers };
    }
  }
}

export default ApiClient;
