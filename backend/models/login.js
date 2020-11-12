const {db} = require('../store/database');
const bcrypt = require('bcrypt');

async function login(values){
    try {
        const email = values.email;
        const data = await db.oneOrNone(`SELECT password_ FROM users WHERE email = $1`,[email]);
        const check = bcrypt.compareSync(values.password, data.password_);
        if(check === true){
            const idUser = await db.any('SELECT id FROM users WHERE email = $1', [email])
            let id = idUser[0].id;
            return {
                id,
                message:'Login success',
                status: 200,
            }
        }else{
            return{
                status: 204
            }
        };
    }catch(error){
        console.error(error)
        return {
            status: 204
        } 
    }
}
module.exports = {
    login,
}