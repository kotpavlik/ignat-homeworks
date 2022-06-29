import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/'
})

export const RequestAPI = {
    updateSuccess(value: boolean) {
        return instance.post(`test/`, {success: value}).then(response => {
            return response
        })
    }
}