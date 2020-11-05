const {db} = require('../store/database');

async function query(id) {
    try{
    const dataUser = await db.any('SELECT first_name, last_name, email FROM users WHERE id = $1', [id]);//all data of user  
    const post = await db.any('SELECT post_id FROM users_post WHERE user_id = $1', [id]);//all data of post saved
    var ctg = await db.many('SELECT categories_id FROM users_categories WHERE user_id = $1', [id]);//categories that the person follor
    var categories = [];
    
    async function bringCategories(ctg){
            for(let i=0; i<4; i++){
                let a = ctg[i].categories_id;
                if(a<5){
                    if(a === 1){
                        categories.push('entretainment')
                        console.log("subio entretainment");
                    }else if(a===2){
                        categories.push('sport');
                        console.log("subio sport");
                    }else if(a===3){
                        categories.push('geopolitic');
                        console.log("subio geopolitic");
                    }else if(a===4){
                        categories.push('tech');
                        console.log("subio tech");
                    }else {
                        console.log("no se pudo");
                    }
                }
            }
    }
    bringCategories(ctg);
    
    return {
        dataUser,
        post,
        categories,
    }
    }catch(error){
        console.error(error);
    }
}

module.exports = {
    query,
}
