const { Success, Error } = require('../module');
const { mockList } = require('../controller');
const sql_serch = require('../db');
const handleblog = (req, res) => {
    console.log(req.method,req.url)
    if (req.method === 'GET' && req.url === '/api/blog/list') {
        sql_serch('select * from blogs').then(res=>{
            console.log(res);
        });
    }
    if (req.method === 'POST' && req.url === '/api/blog/add') {
        return new Success('插入成功')
    }
} 
module.exports = handleblog;