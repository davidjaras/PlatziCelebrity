const {db} = require('../store/database');

//register user
async function postUser (values){
    try {
    await db.result(`INSERT INTO users (first_name, last_name, email, password_, level_id) 
    VALUES($1,$2, $3, $4, 2)`,
    [
        values.first_name,
        values.last_name,
        values.email,
        values.password,
    ])
    const id= await db.any('SELECT id FROM users WHERE email = $1', values.email);
    //console.log(id[0].id); solucion para acceder a variables que estan en array y dentro objetos
    return {
        id: `${id[0].id}`,
        message: `Registered user`,
    };
    }catch{
        return 'we have a user regitered with this email, please insert new email';
    }
}

//register categories
async function postCategory(values, id){
    try{
        if(Object.entries(values).length === 0){
            return "please completed all fields to register page";
        } else {
            if(values.entretainment == true){
                await db.result(`INSERT INTO users_categories (user_id, categories_id)
                VALUES ($1, $2)`, [id, 1 ]);
            };
            if(values.sport == true){
                await db.result(`INSERT INTO users_categories (user_id, categories_id)
                VALUES ($1, $2)`, [id, 2]);
            };
            if(values.geopolitic == true){
                await db.result(`INSERT INTO users_categories (user_id, categories_id)
                VALUES ($1, $2)`, [id, 3]);
            };
            if(values.tech == true){
                await db.result(`INSERT INTO users_categories (user_id, categories_id)
                VALUES ($1, $2)`, [id, 4]);
            };
            return "registered categories";
        }

    }catch(error){
        return error;
    }
}
module.exports = {
    postUser,
    postCategory,
}
