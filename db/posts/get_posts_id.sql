SELECT posts.title, posts.img,  posts.id, posts.content, users.username, users.profile_pic
FROM posts
JOIN users ON posts.author_id = users.id
WHERE users.id = ${id};
