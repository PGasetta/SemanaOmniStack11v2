const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        try  {
            const { id, senha } = request.body;
            const ong = await connection('ongs')
                .where('id', id)
                .select(['name', 'senha'])
                .first();
            
            if(!ong){
                return response.send( {
                    status: '400',
                    message: 'ONG não encontrada.'
                  });
            }else{
                if(ong.senha == senha){
                    const { name } = ong;
                    return response.json({ name });
                }else{
                    return response.send( {
                        status: '400',
                        message: 'Senha digitada está incorreta!'
                    });        
                }
            }
        }
        catch(e) {
            return response.send( {
              status: '404',
              message: e.message
            });
        }
    }
};