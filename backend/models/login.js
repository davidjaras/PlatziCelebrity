const {db} = require('../store/database');


async function login(values){
    try {
        const email = values.email;
    const data = await db.oneOrNone(`SELECT password_ FROM users WHERE email = $1`,[email]);
    if(data.password_ === values.password){
        return'Login success'
    }
    }catch(error){
        throw new error('');
    }
}
module.exports = {
    login,
}