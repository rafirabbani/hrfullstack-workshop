const update = async (req, res) => {
    //console.log(req.fileName);
    const result = await req.context.models.Employees.update(
        { profile_picture: req.fileName },
        { returning: true, where: { employee_id: req.params.id } }
    );
    return res.send(result);
}

const createEmployee = async (req, res) => {
    const result = await req.context.models.Employees.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        hire_date: req.body.hire_date,
        job_id: req.body.job_id,
        salary: req.body.salary,
        manager_id: req.body.manager_id,
        department_id: req.body.department_id,

    });
    return res.send(result)
}

const findAll = async (req, res) => {
    const result = await req.context.models.Employees.findAll();
    return res.send(result);
}

const bulkImage = async (req, res) => {
    const data = await req.dataFiles
    let res0 = []
    for(let i = 0; i < data.files.length; i++) {
        const result = req.context.models.Employees.update(
            { profile_picture : data.files[i].fileName}, {returning: true, where: {employee_id: data.fields[i].value}}
        )
        console.log(result)
    }
    return res.send(res0);
}

const editEmployee = async (req,res) => {
    const {first_name, last_name, salary,email, job_id, department_id, manager_id, phone_number, hire_date, } = req.body
    const result = await req.context.models.Employees.update(
        {
            first_name: first_name,
            last_name: last_name,
            salary: salary,
            email: email,
            job_id: job_id,
            department_id: department_id,
            manager_id: manager_id,
            phone_number: phone_number,
            hire_date: hire_date
        },
        {
            returning: true, 
            where : {
                employee_id: req.params.id
            }
        }
        );
    return res.send(result)
}

const deleteEmployee = async (req, res) => {
    const result = await req.context.models.Employees.destroy({
        where: {employee_id: req.params.id}
    });
    return res.send('deleted ' + result + ' row(s)')   
}

export default {
    update,
    createEmployee,
    findAll,
    bulkImage,
    editEmployee,
    deleteEmployee
}