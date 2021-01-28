import axios from 'axios';



const http = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
})

export default{

    getProducts(){
        return http.get('products');
    },

    getHiglighted(){
        return http.get('higlighted');
    }
}

