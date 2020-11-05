const pgp = require('pg-promise')();

const {USER, PASSWORD, HOST, PORT, DATABASE} = process.env;
const db = pgp(`postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`);

function connect(){ 
    db.connect()
    .then(() => {
        console.log('Connected to PosgreSQL');
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
});
};
connect();

async function query (values){
    try {
        const table = values;
        const result = await db.any(`SELECT * FROM ${values}`)
        return result;
    }catch(error){
        return error;
    }
}
async function queryId (id){
    try {
        const result = await db.any(`SELECT * FROM users WHERE id =${id}`)
        console.log(result);
        return result;
    }catch{
        return error;
    }
}

async function post (values){
    try {
    await db.none(`INSERT INTO users (first_name, last_name, email, password_, level_id) VALUES('${values.first_name}','${values.last_name}','${values.email}','${values.password}',${values.level_id})`)
    }catch(error){
        throw new Error ("Houston we can`t create the register")
    }
}
async function put(values, id){
    try {
    await db.none(`UPDATE users SET id = ${values.id} WHERE id > ${id}`)
        return {
            message: "updated register"
        };
    }catch(error){
        console.error(error);
        return error;
        //throw new Error (error);
    }
}
async function remove(id){
    try {
    await db.none(`DELETE FROM users WHERE id = $1`, [id])
        return {
            message: `delete register`
        };
    }catch(error){
        console.error(error);
        return error;
        //throw new Error (error);
    }
}
module.exports = {
    db,
    pgp,
    query,
    queryId,
    post,
    put,
    remove,
}