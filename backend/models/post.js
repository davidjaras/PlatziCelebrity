<<<<<<< HEAD
const {db} = require('../store/database');
//query of all post of one celebrity
async function query (id){
    try {
        let post = [];
        const data = await db.any(`SELECT categories_id FROM users_categories WHERE user_id = $1`,[id]);
        data.map( async function (element){
            try{
             post.push(await dataPost(element.categories_id));
            }catch{}
            console.log(post);
        });
        function dataPost (id){
            return db.any(`SELECT DISTINCT users_categories.categories_id,
            post_categories.post_id, post.title, post.content, post.source, post.views_, post.date_, post.image
            FROM 
            users_categories INNER JOIN post_categories ON(users_categories.categories_id = post_categories.categories_id)
            INNER JOIN post ON(post.id = post_categories.post_id)
            WHERE post_categories.categories_id = $1
            GROUP BY 
            users_categories.categories_id,
            post_categories.post_id, post.title, post.content, post.source, post.views_, post.date_, post.image
            ORDER BY post.date_ DESC
            LIMIT 1`,[id]);
            
        };
    return {
        post,
    }
    }catch(error){
        console.error(error);
    }
    
}

module.exports = {
    query
    
}
=======

const {db} = require('../store/database');

async function query (id){
    try {
        let post = [];
        let idCategory = [];
        const data = await db.any(`SELECT categories_id FROM users_categories WHERE user_id = $1`,[id]);
        data.map( function (element){
            idCategory.push(element.categories_id);
        });
        for (let i = 0; i <= idCategory.length; i++){
            let value = idCategory[i];
            post.push( await db.any(`SELECT DISTINCT users_categories.categories_id,
            post_categories.post_id, post.title, post.content, post.source, post.views_, post.date_, post.image
            FROM 
            users_categories INNER JOIN post_categories ON(users_categories.categories_id = post_categories.categories_id)
            INNER JOIN post ON(post.id = post_categories.post_id)
            WHERE post_categories.categories_id = $1
            GROUP BY 
            users_categories.categories_id,
            post_categories.post_id, post.title, post.content, post.source, post.views_, post.date_, post.image
            ORDER BY post.date_ DESC
            LIMIT 10`,[value]));
        }
    return post;
    }catch(error){
        console.error(error);
    }
}

module.exports = {
    query
    
}
>>>>>>> 4d687fc07faef7c591c8501ac5bf844bacfebf6e
