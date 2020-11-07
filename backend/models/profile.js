const {db} = require('../store/database');

async function query(id) {
    try{
        const dataUser = await db.any('SELECT first_name, last_name, email FROM users WHERE id = $1', [id]);//all data of user  
        const post = await db.any('SELECT post_id FROM users_post WHERE user_id = $1', [id]);//all data of post saved
        let ctg = await db.many('SELECT categories_id FROM users_categories WHERE user_id = $1', [id]);//categories that the person follor
        // return categories
        let categoriesId = [];
        let nameCategory = [];
        ctg.map(function(values){
            categoriesId.push(values.categories_id);
        });
        for(let i=0; i<= categoriesId.length; i++){
            let a = categoriesId[i]
            if(a<5){
                if(a===1){
                    nameCategory.push('entretainment')
                }else if(a===2){
                    nameCategory.push('sport');
                }else if(a===3){
                    nameCategory.push('geopolitic');
                }else if(a===4){
                    nameCategory.push('tech');
                }
            }
        }
        // return bookmarkets
        let idBookMarkets = [];
        let dataBookMarkets = [];
        post.map(function(element){
            idBookMarkets.push(element.post_id);
        });
        for(let i=0; i<= idBookMarkets.length; i++){
            let a = idBookMarkets[i];
            dataBookMarkets.push( await db.any(`SELECT DISTINCT post.source, post.title, post.date_, post.image
            FROM
            users_post INNER JOIN post ON (post.id =users_post.post_id)
            WHERE post.id = $1
            GROUP BY
            post.source, post.title, post.date_, post.image`,[a]));
        }
        return {
            dataUser,
            nameCategory,
            dataBookMarkets,
        }
    }catch(error){
        throw new Error ('we has problems bring all data');
    }
}

module.exports = {
    query,
}
