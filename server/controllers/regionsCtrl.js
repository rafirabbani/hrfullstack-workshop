import { sequelize } from '../../config/config-db'

// select *

const findAll = async (req, res) => {
    const regions = await req.context.models.Regions.findAll({
        include: [{
            model: req.context.models.Countries
        }]
    });
    return res.send(regions);
}

// select region by id

const findOne = async (req,res) => {
    const regions = await req.context.models.Regions.findOne({
        where: {region_id: req.params.id}
    });
    return res.send(regions)
}

// create new region

const createNewRegion = async (req,res) => {
    const regions = await req.context.models.Regions.create({
        //region_id: null,
        region_name : req.body.region_name
    });
    return res.send(regions)
}

// change region_name on region_id

const changeRegionName = async (req,res) => {
    const {region_name} = req.body
    const regions = await req.context.models.Regions.update(
        {
            region_name: region_name
        },
        {
            returning: true, 
            where : {
                region_id: req.params.id
            }
        }
        );
    return res.send(regions)
}

// delete a region

const deleteRegion = async (req, res) => {
    const result = await req.context.models.Regions.destroy({
          where: { region_id: req.params.id }
    });
    return res.send('deleted ' + result + ' row(s)')    
}

// raw query select by id

const rawQuery = async (req,res) => {
    await sequelize.query('select * from regions where region_id = :regionId', 
    {
        replacements: {regionId: parseInt(req.params.id)},
        type: sequelize.QueryTypes.SELECT
    }).then (result => {
        return res.send(result)
    })
}





export default {
    findAll,
    findOne,
    createNewRegion,
    changeRegionName,
    deleteRegion,
    rawQuery
}