import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-70150.firebaseio.com/'
})

export default instance;