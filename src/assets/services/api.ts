import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
    baseURL: 'https://fk7.tech/api'
})

export default {
    all(){
        return api.get('/v1/cpf-fk.php?con=00791329445')
    }
}