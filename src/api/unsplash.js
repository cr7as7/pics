import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ZDYiS6IrdDVdkoHjpNOnM4bCA--qU-mZ7oAtYI-wMIc'
  }
});
