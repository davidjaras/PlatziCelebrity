
const {db} = require('../store/database');

async function query (id){
    try {
        let post = [];
        let idCategory = [];
        const data = await db.any(`SELECT categories_id FROM users_categories WHERE user_id = $1`,[id]);
        data.map( function (element){
            idCategory.push(element.categories_id);
        });
        // Use promise.all
        // Use ORM?
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