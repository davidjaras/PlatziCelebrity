const {db} = require('../store/database');
const bcrypt = require('bcrypt');

//register user
async function postUser (values){
    try {
        console.log(values);
        if(Object.entries(values).length === 0){
            return "please completed all fields to register page";
        } else {
            const passwordHash = await bcrypt.hash(values.password, 7);
            await db.result(`INSERT INTO users (first_name, last_name, email, password_, level_id) 
            VALUES($1,$2, $3, $4, 2)`,
            [
                values.first_name,
                values.last_name,
                values.email,
                passwordHash,
            ])
            const id= await db.any('SELECT id FROM users WHERE email = $1', values.email);
            let iD = id[0].id;
            postCategory(iD);
            return {
                status:201,
                //id: `${iD}`,
                message: `Registered user`,
            };
        }
    }catch(error){
        console.error(error);
        return {
            status:204
        }
        //return 'we have a user regitered with this email, please insert new email';
    }
}

//register categories
async function postCategory (id){
    try{
        for(i = 1; i<=4; i++){
            await db.none(`INSERT INTO users_categories (user_id, categories_id) VALUES ($1, $2)`, [id, i]);
        }
    }catch(error){
        console.error(error);
    }
}
module.exports = {
    postUser,
    postCategory,
}
