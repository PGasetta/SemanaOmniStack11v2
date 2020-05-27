const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index (request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const { name, email, whatsapp, city, uf, site } = request.body;
        const id = crypto.randomBytes(5).toString('hex');
        const senha = crypto.randomBytes(2).toString('hex');

        await connection('ongs').insert({
            id,
            senha,
            name,
            email,
            whatsapp,
            city,
            uf,
            site
        });
    
        return response.json({ id });
    }
};