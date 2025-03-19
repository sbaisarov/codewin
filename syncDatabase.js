const sequelize = require('./config/database');
const Task = require('./models/Task');

// Connect to the database
async function syncDatabase() {
    try {
        await sequelize.sync({ force: true });
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
    finally {
        await sequelize.close();
    }
}

syncDatabase();