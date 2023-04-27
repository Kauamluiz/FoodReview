import { Sequelize } from"Sequelize";
import connection from '../config/db.js';

const Review = connection.define(
    'Review',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        idRestaurant: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Comment: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        stars: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
    }
);

Review.belongsTo(User, {
    foreignKey: 'idUser'
});

Review.belongsTo(Restaurant, {
    foreignKey: 'idRestaurant'
});

export default Review;