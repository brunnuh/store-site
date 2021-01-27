import axios from 'axios';



const http = axios.create({
    baseURL: 'http://48a7eaf785a7.ngrok.io/api/'
})

export default{
    getProducts(){
        return http.get('products');
    }
}

