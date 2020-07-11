INSERT INTO users (
    username,
    password,
    profile_pic
) VALUES(
    ${username},
    ${password},
)
returning id, username, profile_pic;