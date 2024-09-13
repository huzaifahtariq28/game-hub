import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'b42516fe9e5442b0ad5abebc4916b30d',
  },
});
