import { AxiosPromise } from 'axios';
import { BASE_API } from '../../constants/requestUris';
import ApiClient from './ApiClient';

class UserService extends ApiClient {
  constructor() {
    super(BASE_API);
  }

  getUser<T>(id?: string): AxiosPromise<T> {
    console.log(id);
    return this.instace.get('...');
  }
}

const userService = new UserService();
export default userService;
