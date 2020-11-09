const {db} = require('../store/database');


async function login(values){
    try {
    const data = await db.any(`SELECT password_ FROM users WHERE email = $1`,[email]);
    const dataPassword = data[0];
    console.log(dataPassword);
    if(data.password_ === values.password){
        return{
            status: "200",
            message:'Login success'
        }
    } else {
        return {
            status: "204"
        }
    }
    }catch(error){
        throw new Error 
    }
}
module.exports = {
    login,
}