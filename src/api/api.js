import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "80a40969-c576-430a-8d09-c5073671dcfd"}})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    unfollowUser (id) {
        return instance.post(`follow/${id}`, {}).then(response => response.data)
    },
}
