const {db} = require('../store/database');
//query of all post of one celebrity
async function query (id){
    try {
       const data = await db.any(`SELECT categories_id FROM users_categories WHERE user_id = $1`,[id]);
       console.log(data);
       var endposts1;
       var endposts2;
       var endposts3;
       var endposts4;
        for(let i = 0; i<5; i++){
            var idCategory = data[i].categories_id;
            console.log(idCategory);
            if(idCategory == 1){
                var dataPost1 = await dataPost(1);
            }else if(idCategory == 2){
                var dataPost2 = await dataPost(2);
            }else if (idCategory == 3){
                var dataPost3 = await dataPost(3);
            }else if (idCategory == 4){
                var dataPost4 = await dataPost(4);
            } else{
                console.log("no entro");
            }
            return{
                dataPost1,
                dataPost2,
                dataPost3,
                dataPost4,
            }
            /*var endposts1 = dataPost1;
            var endposts2 = dataPost2;
            var endposts3 = dataPost3;
            var endposts4 = dataPost4;
            return{
                endposts1,
                endposts2,
                endposts3,
                endposts4,
            }*/
        }
       async function dataPost (id){
           return await db.any(`SELECT DISTINCT users_categories.categories_id,
           post_categories.post_id, post.title, post.content, post.source, post.views_, post.date_, post.image
           FROM 
           users_categories INNER JOIN post_categories ON(users_categories.categories_id = post_categories.categories_id)
           INNER JOIN post ON(post.id = post_categories.post_id)
           WHERE post_categories.categories_id = $1
           GROUP BY 
           users_categories.categories_id,
           post_categories.post_id, post.title, post.content, post.source, post.views_, post.date_, post.image
           ORDER BY post.date_ DESC
           LIMIT 30`,[id]);
       }
       
    }catch(error){
        console.error(error);
        //return error;
    }
}

module.exports = {
    query
    
}