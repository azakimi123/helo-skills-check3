INSERT INTO users (
    username,
    password,
    profile_pic
) VALUES(
    ${username},
    ${password},
    'https://robohash.org/pic3?set=set2'
)
returning id, username, profile_pic;