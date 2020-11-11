
const {db} = require('../store/database');

async function home (id){
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
        return {
            post,
            status:200,
        }
    }catch(error){
        return {
            status: 404,
            message: "we cant found notice of this category"
        }
    }
}
async function category (value){
    try {
        let post = [];
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
    return {
        post,
        status:200,
    }
    }catch(error){
        return {
            status: 404,
            message: "we cant found notice of this category"
        }
    }
}
async function bookmarks(id, values){
    try{
        await db.none('INSERT INTO users_post (user_id, post_id) VALUES($1,$2)',[id,values])
        return{
            status:200,
            message:"Post saved in bookmarks"
        }
    }catch{
        return {
            status:204,
            message:"We cant achieved save this post",
        }
    }
}
module.exports = {
    home,
    category,
    bookmarks,
}