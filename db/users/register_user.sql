INSERT INTO users (
    username,
    password,
    profile_pic
) VALUES(
    ${username},
    ${password},
    'https://image.flaticon.com/icons/svg/2948/2948218.svg'
)
returning id, username, profile_pic;