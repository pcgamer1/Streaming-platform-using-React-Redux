import axios from 'axios'

export default axios.create({
    baseURL: 'https://stream-app-api.herokuapp.com'
})