import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-app-c205f.firebaseio.com/'
});

export default instance;