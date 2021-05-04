import axios from "axios";

const getAll = async () => {
    try {
        let result = await axios.get(`/api/employees`);
        return await result.data
    }
    catch (err) {
        return await err.message
    }
}

const create = async (employee) => {
    try {
        let result = await axios.post(`/api/employees`, employee);
        return result
        
    }
    catch (err) {
        return err.message
    }
}

const edit = async (employee) => {
    try {
        let result = await axios.put(`/api/employees/${employee.employee_id}`, employee)
        return result
    }
    catch (err) {
        return err.message
    }
}

const destroy = async (employee) => {
    console.log(employee)
    try {
        let result = await axios.delete(`/api/employees/${employee}`)
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