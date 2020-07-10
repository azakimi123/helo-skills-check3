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
    }   
}

