import bcrypt from 'bcryptjs'
const users = [
    {
        name: "Admin",
        email: "admin@coracaoselvagem.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: "Ghost",
        email: "ghost@coracaoselvagem.com",
        password: bcrypt.hashSync('123456', 10),

    },
    {
        name: "Tommy",
        email: "tommy@coracaoselvagem.com",
        password: bcrypt.hashSync('123456', 10),

    },
];

export default users