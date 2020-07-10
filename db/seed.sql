CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic text
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INT REFERENCES users(id)
);


--Altered users password datatype
--ALTER TABLE users
--ALTER password
--SET DATA TYPE TEXT;



--Inserted random data
-- INSERT INTO users (
--     username,
--     password,
--     profile_pic
-- ) VALUES(
--     'aaron2',
--     'pass2',
--     'https://robohash.org/pic2?set=set2'
-- );