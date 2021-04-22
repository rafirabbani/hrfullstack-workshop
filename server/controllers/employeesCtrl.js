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
    return res.send(result);
}

const bulkImage = async (req, res) => {
    const data = await req.dataFiles
    console.log(data);
    for(let i = 0; i < data.files.length; i++) {
        req.context.models.Employees.update(
            { profile_picture : data.files[i].fileName}, {returning: true, where: {employee_id: data.fields[i].value}}
        )
    }
    return res.send(data);
}

export default {
    update,
    create,
    findAll,
    bulkImage
}