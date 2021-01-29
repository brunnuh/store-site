import axios from 'axios';



const http = axios.create({
    baseURL: 'http://3bb0f1624a83.ngrok.io/api/'
})

export default{

    getProducts(){
        return http.get('products');
    },

    getHiglighted(){
        return http.get('higlighted');
    }
}

