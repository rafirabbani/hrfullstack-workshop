import axios from "axios";

const getAll = async () => {
    try {
        let result = await axios.get(`/api/regions`);
        return await result.data
    }
    catch (err) {
        return await err.message
    }
}

const create = async (region) => {
    try {
        let result = await axios.post(`/api/regions`, region);
        return result
        
    }
    catch (err) {
        return err.message
    }
}

const edit = async (region) => {
    try {
        let result = await axios.put(`/api/regions/${region.region_id}`, region)
        return result
    }
    catch (err) {
        return err.message
    }
}

const destroy = async (region) => {
    try {
        let result = await axios.delete(`/api/regions/${region}`)
        return result
    }
    catch (err) {
        return err.message
    }
}

export default {
    getAll,
    create,
    edit,
    destroy
}