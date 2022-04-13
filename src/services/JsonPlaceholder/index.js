import axios from 'axios';
import { env } from 'src/config';
import { mapUsers } from './transforms/users';

const api = axios.create({
  baseURL: env.JSON_PLACEHOLDER_BASE_URL,
  timeout: 5000,
});

const getUsers = async () => {
  const { data } = await api.get('/users');
  return mapUsers(data);
};

const getTodos = async (userId) => {
  const { data } = await api.get('/todos', { params: { userId } });
  return data;
};

export default {
  getUsers,
  getTodos,
};
