const {db} = require('../store/database');
const fetch = require('node-fetch');
async function data (url){
        await fetch(url,{
            method:'GET',
            headers:{
            'Content-Type': 'application/json'
            },
        })
        .then(async res =>{
            let a = await res.json();
            for(let i = 0; i<a.length; i++){
                if(a[i].title!= null){
                    let {id}= await idCelebrity(a[i].celebrity);
                    let title = await registeredPost(a[i].title);
                    let category = await categoryId(a[i].category);
                    if(a[i].title != title){
                        let idPost = await db.any(`INSERT INTO public.post(title, content, source, views_, date_, image)
                            VALUES ($1,$2,$3,$4,$5,$6) RETURNING id`,[
                                a[i].title,
                                a[i].content,
                                a[i].source,
                                1,
                                a[i].date,
                                a[i].image,
                        ]);
                        await db.none(`INSERT INTO public.post_celebrities(post_id, celebrity_id)
                            VALUES ($1, $2)`, [
                                idPost[0].id,
                                id,
                        ]);
                        await db.none(`INSERT INTO public.post_categories(post_id, categories_id)
                            VALUES ($1,$2)`, [
                                idPost[0].id,
                                category
                        ])
                    }
                }   
            }
        })
    .catch(error =>{
        console.warn(error);
        return {status: 400}
    })
}

//returning the id of celebrity
async function idCelebrity (name){
    try{
        return await db.one(`SELECT id FROM celebrities WHERE name ILIKE '${name}'`)
    }catch(error){
        console.warn(error)
    }
}
//Search if a notice did register already
async function registeredPost (title){
    try{
        const result = await db.any('SELECT title FROM post WHERE title = $1', [title]);
        return result[0].title;
    }catch(error){
        return "not found";
    }
}
//select the category of the post
async function categoryId(category){
    switch(category){
        case 'entretenimiento':
            return 1;
        case 'deportes':
            return 2;
        case 'geopolitica':
            return 3;
        case 'tecnologia':
            return 4;
    }
}
async function posts(name){
    try{
        let post = [];
        let idPost = [];
        let {id}= await idCelebrity(name)
        const specificId = await db.any(`SELECT DISTINCT post_celebrities.post_id
        FROM 
        post_celebrities INNER JOIN post ON(post.id = post_celebrities.post_id)
        WHERE post_celebrities.celebrity_id = $1`, [id])
        specificId.map( function (element){
            idPost.push(element.post_id);
        });
        for (let i = 0; i < idPost.length; i++){
            let value = idPost[i];
            post.push(await db.any(`SELECT DISTINCT post_celebrities.post_id, post.title, post.content, post.source, post.views_, post.date_, post.image
            FROM 
            post_celebrities INNER JOIN post ON(post.id = post_celebrities.post_id)
            WHERE post_celebrities.post_id = $1
            GROUP BY 
            post_celebrities.post_id, post.title, post.content, post.source, post.views_, post.date_, post.image
            ORDER BY post.date_ DESC`, [value]))
        }
        return {
            status:200,
            post,
        }
    }catch(error){
        console.error(error);
    }
}
// insert post
async function all(url){
    await fetch(url,{
        method:'GET',
        headers:{
        'Content-Type': 'application/json'
        },
    })
    .then(async res =>{
        let a = await res.json();
        console.log(a);
        for(let i = 0; i<a.length; i++){
            if(a[i].title!= null){
                let {id}= await idCelebrity(a[i].celebrity);
                let title = await registeredPost(a[i].title);
                let category = await categoryId(a[i].category);
                if(a[i].title != title){
                    let idPost = await db.any(`INSERT INTO public.post(title, content, source, views_, date_, image)
                        VALUES ($1,$2,$3,$4,$5,$6) RETURNING id`,[
                            a[i].title,
                            a[i].content,
                            a[i].source,
                            1,
                            a[i].date,
                            a[i].image,
                    ]);
                    await db.none(`INSERT INTO public.post_celebrities(post_id, celebrity_id)
                        VALUES ($1, $2)`, [
                            idPost[0].id,
                            id,
                    ]);
                    await db.none(`INSERT INTO public.post_categories(post_id, categories_id)
                        VALUES ($1,$2)`, [
                            idPost[0].id,
                            category
                    ])
                }
            }   
        }
    })
.catch(error =>{
    console.error(error);
    return {
        status: 400,
        message:"post did not inserted"
    }
})
}
module.exports = {
    data,
    posts,
    all,
}