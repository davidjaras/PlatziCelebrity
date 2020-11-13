const {db} = require('../store/database');

async function insertNotice(values){
    console.log("data but in the model", values);
}

module.exports = {
    insertNotice,
}