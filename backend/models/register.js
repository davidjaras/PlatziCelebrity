const {db} = require('../store/database');

//register user
async function postUser (values){
    try {
        if(Object.entries(values).length === 0){
            return "please completed all fields to register page";
        } else {
            await db.result(`INSERT INTO users (first_name, last_name, email, password_, level_id) 
            VALUES($1,$2, $3, $4, 2)`,
            [
                values.first_name,
                values.last_name,
                values.email,
                values.password,
            ])
            const id= await db.any('SELECT id FROM users WHERE email = $1', values.email);
            return {
                id: `${id[0].id}`,
                message: `Registered user`,
            };
        }
    }catch(error){
        console.error(error);
        return 'we have a user regitered with this email, please insert new email';
    }
}
//register categories
async function postCategory(values){
    try{
        if(Object.entries(values).length === 0){
            return "please completed all fields to register page";
        } else {
            const userId = await db.one('SELECT MAX(id) FROM users')
            if(values.entretainment == true){
                await db.result(`INSERT INTO users_categories (user_id, categories_id)
                VALUES ($1, $2)`, [userId.max, 1 ]);
            };
            if(values.sport == true){
                await db.result(`INSERT INTO users_categories (user_id, categories_id)
                VALUES ($1, $2)`, [userId.max, 2]);
            };
            if(values.geopolitic == true){
                await db.result(`INSERT INTO users_categories (user_id, categories_id)
                VALUES ($1, $2)`, [userId.max, 3]);
            };
            if(values.tech == true){
                await db.result(`INSERT INTO users_categories (user_id, categories_id)
                VALUES ($1, $2)`, [userId.max, 4]);
            };
            return "registered categories";
        }
    }catch(error){
        console.error(error);
    }
}
module.exports = {
    postUser,
    postCategory,
}
