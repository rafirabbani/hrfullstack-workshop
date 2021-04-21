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
}

const findAll = async (req, res) => {
    const result = await req.context.models.Employees.findAll();
    return res.send(result);
}

const bulkCreate = async (req, res) => {
    const data = await req.dataFiles  
     return res.send(data);
}

export default {
    update,
    create,
    findAll,
    bulkCreate
}