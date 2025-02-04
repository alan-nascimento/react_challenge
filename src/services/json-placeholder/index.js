import axios from 'axios';
import { env } from 'src/config';
import transformTodos from './transforms/response/todos';
import transformUsers from './transforms/response/users';

const api = axios.create({
  baseURL: env.JSON_PLACEHOLDER_BASE_URL,
  timeout: 5000,
});

const getUsers = async () => {
  const { data } = await api.get('/users', {
    transformResponse: [...axios.defaults.transformResponse, transformUsers],
  });

  return data;
};

const getTodos = async () => {
  const { data } = await api.get('/todos', {
    transformResponse: [...axios.defaults.transformResponse, transformTodos],
  });

  return data;
};

export default {
  getUsers,
  getTodos,
};
