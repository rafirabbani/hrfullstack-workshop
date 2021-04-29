const update = async (req, res) => {
    //console.log(req.fileName);
    const result = await req.context.models.Employees.update(
        { profile_picture: req.fileName },
        { returning: true, where: { employee_id: req.params.id } }
    );
    return res.send(result);
}

const create = async (req, res) => {
    const data = await req.dataFiles;
    return res.send(data);
}

const findAll = async (req, res) => {
    const result = await req.context.models.Employees.findAll();
    console.log(result)
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
    const {salary,email} = req.body
    const result = await req.context.models.Employees.update(
        {
            salary: salary,
            email: email
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

export default {
    update,
    create,
    findAll,
    bulkImage,
    editEmployee
}