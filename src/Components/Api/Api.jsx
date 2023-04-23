import axios from 'axios';

axios.defaults.baseURL = 'https://64450bb0b80f57f581aff67e.mockapi.io';

export const fetchUsers = async () => {
  const response = await axios.get(`/users`);
  return response.data;
};
