import axios from "axios";

const getAll = async () => {
    try {
        let res = await axios.get(`/api/regions`);
        return await res.data
    }
    catch (err) {
        return await err.message
    }
}

const create = async (region) => {
    try {
        let req = await axios.post(`/api/regions`, region);
        return req
        
    }
    catch (err) {
        return err.message
    }
}

export default {
    getAll,
    create
}