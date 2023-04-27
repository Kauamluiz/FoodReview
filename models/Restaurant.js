import { Sequelize } from"Sequelize";
import connection from '../config/db.js';

const Restaurant = connection.define(
    'Restaurant',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }
);

export default Restaurant;