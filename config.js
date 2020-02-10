module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'vbpN8YjvqV',
        password: process.env.MYSQL_PASS || 'sWrFOMSBob',
        database: process.env.MYSQL_DB || 'vbpN8YjvqV',
    },
}