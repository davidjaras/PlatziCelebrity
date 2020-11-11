const {db} = require('../store/database');
//bring all data of the user
async function infoProfile(id) {
    try{
        var dataUser = await db.any('SELECT first_name, last_name, email FROM users WHERE id = $1', [id]);//all data of user  
        const post = await db.any('SELECT post_id FROM users_post WHERE user_id = $1', [id]);//all data of post saved
        let ctg = await db.any('SELECT categories_id FROM users_categories WHERE user_id = $1', [id]);//categories that the person follow
        
        //confirm that user exist
        if(Object.entries(dataUser).length == 0){
            var dataUser = "the user don't exist"
        }
        // return categories
        let categoriesId = [];
        let nameCategory = [];
        ctg.map(function(values){
            categoriesId.push(values.categories_id);
        });
        for(let i=0; i<= categoriesId.length; i++){
            
            if(categoriesId.length == 0){
                nameCategory.push("you don't have any category active in this moment");
            } else {
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
        }
        // return bookmarkets of profile
        let idBookMarkets = [];
        let dataBookMarkets = [];
        post.map(function(element){
            idBookMarkets.push(element.post_id);
        });
        for(let i=0; i< idBookMarkets.length; i++){
            if(idBookMarkets.length == 0){
                dataBookMarkets.push('you dont hava bookmarkets');
            }else {
                let a = idBookMarkets[i];
                dataBookMarkets.push( await db.any(`SELECT DISTINCT post.source, post.title, post.date_, post.image
                FROM
                users_post INNER JOIN post ON (post.id =users_post.post_id)
                WHERE post.id = $1
                GROUP BY
                post.source, post.title, post.date_, post.image`,[a]));
            }
        }
        return {
            status: 200,
            dataUser,
            nameCategory,
            dataBookMarkets,
        }
    }catch(error){
        console.error(error);
        return {
            status:400,
            message:"We had a problem bring all data"
        }
    }
}
//Activate a category
async function postCategory(id, values){
    try{
        await db.none(`INSERT INTO users_categories (user_id, categories_id) 
        VALUES($1, $2)`, [ id,values]);
        return {
            status: 201,
            message: "category updated"
        }
    }catch(error){
        console.error(error);
        return {
            status: 204,
        }
    }
}
//Desactivate a category
async function removeCategory(id, values) {
    try{
        //bring ids of registers that user follow in table users_categories
        const idRegister = await db.any(`SELECT DISTINCT users_categories.id
        FROM 
        users INNER JOIN users_categories ON(users_categories.user_id = users.id)
        WHERE users_categories.user_id = $1
        GROUP BY
        users_categories.id`, [id])
        const specificId= [];
        idRegister.map(function (element){
            specificId.push(element.id)
        })
        // bring the ids categories of every register 
        let categoryDelete = [];
        for(i = 0; i < specificId.length; i++){
            const idCategory = await db.any('SELECT categories_id FROM users_categories WHERE id = $1', [specificId[i]])
            idCategory.map(function (element){
                categoryDelete.push(element.categories_id)
                if(categoryDelete[i] == values){
                    db.none('DELETE FROM users_categories WHERE id = $1', [specificId[i]])
                }
            })
        }
        return {
            status: 201,
            message: "category removed"
        }
    }catch(error){
        console.log(error);
        return{
            status:204,
        }
    }
}
//bring data of celebrities
async function followCelebrities(id){
    try{
        const dataCelebrity = await db.any('SELECT celebrity_id FROM users_celebrities WHERE user_id = $1', [id]);
        let idCelebrity = [];
        let nameCelebrity = [];
        dataCelebrity.map(function(element){
            idCelebrity.push(element.celebrity_id);
        });
        for(let i=0; i< idCelebrity.length; i++){
            let a = idCelebrity[i];
            nameCelebrity.push( await db.any(`SELECT DISTINCT celebrities.id, celebrities.name
            FROM
            users_celebrities INNER JOIN celebrities ON (users_celebrities.celebrity_id =celebrities.id)
            WHERE celebrities.id = $1
            ORDER BY name ASC`,[a]));
        }
        const celebrities = await db.any('SELECT DISTINCT id, name, followers FROM celebrities ORDER BY name ASC');
        return {
            status:200,
            nameCelebrity,
            celebrities,
        }
    }catch(error){
        return {
            status: 400,
            message: "we have a problem bring all data"
        }
    }
}
//active follow a celebrity
async function postCelebrity(id, values){
    try{
        await db.none(`INSERT INTO users_celebrities (user_id, celebrity_id) 
        VALUES($1, $2)`, [ id, values]);
        return {
            status: 201,
            message: "celebrity added"
        }
    }catch(error){
        console.error(error);
        return {
            status: 204,
        }
    }
}
//unfollow a celebrity
async function removeCelebrity(id, values){
    try{
        const idCelebrity = await db.any(`SELECT DISTINCT  users_celebrities.id
        FROM 
        users_celebrities INNER JOIN celebrities ON(users_celebrities.celebrity_id = celebrities.id)
        WHERE users_celebrities.user_id = $1 AND celebrities.id = $2
        GROUP BY 
        users_celebrities.id`, [id,values]);
        console.log(idCelebrity[0].id);
        if(idCelebrity){
            await db.none('DELETE FROM users_celebrities WHERE id = $1', [idCelebrity[0].id])    
            return {
                status:201,
                message:"Unfollow celebrity"
            }
        } else{   
            return {
                status:204,
            }
        }
    }catch{
        return {status:204}
    }
}
//bring data of post saved for the user
async function bookMarkets(id){
    try{
        const post = await db.any('SELECT post_id FROM users_post WHERE user_id = $1', [id]);//all data of post saved
        // return bookmarkets of tab
        let idBookMarkets = [];
        let dataBookMarkets = [];
        post.map(function(element){
            idBookMarkets.push(element.post_id);
        });
        for(let i=0; i< idBookMarkets.length; i++){
            let a = idBookMarkets[i];
            dataBookMarkets.push( await db.any(`SELECT DISTINCT post.source, post.title, post.date_, post.image
            FROM
            users_post INNER JOIN post ON (post.id =users_post.post_id)
            WHERE post.id = $1
            GROUP BY
            post.source, post.title, post.date_, post.image`,[a]));
        }
        return{
            status:200,
            dataBookMarkets,
        }
    }catch(error){
        console(error);
        return {
            status: 404,
            message: "We have problems bring all bokkmarks"
        }
    }
}
//remove the post of the bookmarks
async function removeBookMarks(id, values){
    try{
        const idPost = await db.any(`SELECT DISTINCT  users_post.id
        FROM 
        users_post INNER JOIN post ON(users_post.post_id = post.id)
        WHERE users_post.post_id = $1 AND users_post.user_id = $2
        GROUP 
        BY users_post.id`, [values, id]);
        let idDelete =idPost[0].id
        await db.none('DELETE FROM users_post WHERE id = $1', [idDelete]);
        return{
            message: "Removed post of bookmarkets",
            status:201
        }
    }catch{
        return {
            status:204
        }
    }
}
module.exports = {
    infoProfile,
    postCategory,
    removeCategory,
    followCelebrities,
    postCelebrity,
    removeCelebrity,
    bookMarkets,
    removeBookMarks,
}
