SELECT * FROM posts
WHERE title LIKE ('%' || ${title} || '%');
