const {db} = require('../store/database');


async function login(values){
    try {
        const email = values.email;
    const data = await db.oneOrNone(`SELECT password_ FROM users WHERE email = $1`,[email]);
    if(data.password_ === values.password){
        return'Login success'
    }else {
        return'login failed, the password is incorrect'
    };
    }catch(error){
        return 'The email wasnt registered in our page, please go to register page';
    }
}
module.exports = {
    login,
}