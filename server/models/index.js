import regions from './regions';
import employees from './employees'
import countries from './countries'
import users from './users'
import Sequelize from 'sequelize';
import { sequelize } from '../../config/config-db';

const models = {
    Users: users(sequelize, Sequelize),
    Regions: regions(sequelize, Sequelize),
    Employees: employees(sequelize, Sequelize),
    Countries: countries(sequelize, Sequelize)
}

//4. create relation OneToMany | ManyToMany
Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

// 5. export sequalize agar bisa di-call di module lain
export default models;