const {db} = require('../store/database');
const bcrypt = require('bcrypt');

async function login(values){
    try {
        const email = values.email;
        const data = await db.any(`SELECT password_ FROM users WHERE email = $1`,[email]);
        const check = bcrypt.compareSync(values.password, data[0].password_);
        if(true){
            const idUser = await db.one('SELECT id FROM users WHERE email = $1', [email])
            let iD = idUser.id;
            return {
                iD,
                message:'Login success',
                status: 200,
            }
        }
    }catch(error){
        //console.error(error)
        return {
            status: 204
        } 
    }
}
module.exports = {
    login,
}