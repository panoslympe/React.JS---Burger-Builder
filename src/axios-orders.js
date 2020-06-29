import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-starting-setup.firebaseio.com/'
});

export default instance;