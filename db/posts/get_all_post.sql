SELECT posts.title, posts.img, posts.post_id, posts.content, users.username, users.profile_pic
FROM posts
JOIN users ON posts.author_id = users.id;