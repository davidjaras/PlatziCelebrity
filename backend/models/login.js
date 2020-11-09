const {db} = require('../store/database');


async function login(values){
    try {
        const email = values.email;
    const data = await db.oneOrNone(`SELECT password_ FROM users WHERE email = $1`,[email]);
    //vercel, heroku,firebase,awsapis
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