const env = process.env.NODE_ENV;
console.log(env)
let SQL_CONFIG = {}
if (env === 'production') {
    SQL_CONFIG = {
        host: 'localhost',
        user: 'root',
        port: '3306',
        password: 'w.521@@ong.COM',
        database: 'myblog'
    }
}
if (env === 'development') {
    SQL_CONFIG = {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'w.521@@ong.COM',
        database: 'myblog'
    }
}


module.exports = SQL_CONFIG