
const pgp = require('pg-promise')();

const {USER, PASSWORD, HOST, PORTDB, DATABASE} = process.env;
const db = pgp(`postgres://${USER}:${PASSWORD}@${HOST}:${PORTDB}/${DATABASE}`);

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


module.exports = {
    db,
    pgp,
}