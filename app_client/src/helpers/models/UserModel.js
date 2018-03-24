import axios from "axios";
const ROUTE = "/user/profile"
export default {
    /**
     * getOne User
     * @param {*} id 
     */
    getOne(id) {
        return axios.get(`${ROUTE}/${id}`)
    },
    /**
     * getAll Users
     */
    getAll() {
        return axios.get(ROUTE)
    },
    /**
     * Create Users
     * @param {*} employee 
     */
    create(user) {
        return axios.post(ROUTE, user);
    },
    /**
     * update Users
     * @param {*} id 
     * @param {*} employee 
     */
    update(id, user) {
        return axios.put(`${ROUTE}/${id}`, user);        
    },
    /**
     * delete Users
     * @param {*} id 
     */
    delete(id) {
        return axios.delete(`${ROUTE}/${id}`);
    }

}  