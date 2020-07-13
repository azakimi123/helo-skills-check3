const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        console.log(req.body)
        //info off of req.body
        const {username, password} = req.body;
        const db = req.app.get('db');

        //existing email?
        const foundUser = await db.users.check_user({username});
        if(foundUser[0]) {
            return res.status(400).send('Username already in use')
        }

        //hash password
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);

        //register the user
        const newUser = await db.users.register_user({username, password: hash});
        req.session.user = newUser[0];
        res.status(201).send(req.session.user);
    },


    login: async (req, res) => {
        //req.body info
        const {username, password} = req.body;
        const db = req.app.get('db');

        //check to see if user is in database
        const foundUser = await db.users.check_user({username});
        if(!foundUser[0]) {
            return res.status(400).send('Username not found');
        }

        //set the user on the session
        delete foundUser[0].password;
        req.session.user = foundUser[0];
        res.status(202).send(req.session.user);
    } ,

    getPosts: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const{userPosts, title} = req.query;
        console.log(req.params)
        console.log(title)
        console.log(req.query)

        if(userPosts && title) {
            return db.posts.get_post_search({title})
            .then(posts => res.status(200).send(posts))
        }
        if(!userPosts && !title) {
            return db.posts.get_posts_id({id})
            .then(posts => res.status(200).send(posts))
        }
        if(!userPosts && title) {
            return db.posts.get_posts_id_title({id, title})
            .then(posts => res.status(200).send(posts))
        } 
        if(userPosts && !title) {
            return db.posts.get_all()
            .then(post => res.status(200).send(posts))
        }
    },

    onePost: (req, res) => {
        const db = req.app.use('db');
        const {id} = req.params;

        db.posts.get_one_post({id})
        .then(post => res.status(200).send(post))
    }
    

}

// db.posts.get_posts_id({id})
// .then(posts => res.status(200).send(posts))




















    // getUserData: async (req, res) => {
    //     const {username} = req.body;
    //     const db = req.app.get('db');
    //     const foundUser = await db.users.check_user({username});
    //     if (foundUser[0]) {
    //         delete foundUser[0].password;
    //         req.session.user = foundUser[0];
    //         const {user} = req.session;
    //         res.status(202).send(req.session.user);
    //     } else {
    //         return res.sendStatus(401)
    //     }
    // }