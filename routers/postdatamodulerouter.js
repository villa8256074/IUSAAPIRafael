const consult = require('../services/database/consultmotos');

module.exports = {
    findmotos: async function(name, phone, mail) {
        return await consult.searchNameUser(name, phone, mail);
    }
}