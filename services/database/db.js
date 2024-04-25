const mongoose = require('mongoose');

async function conecctionMongoDB() {

    const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
    console.log(`${uri}`);


	const connection = await mongoose.connect(
        `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`, 
        {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('Base de datos conectada'))
        .catch(e => console.log(e));
}

module.exports = {
	conecctionMongoDB
}