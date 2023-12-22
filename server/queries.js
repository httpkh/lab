const Pool = require('pg').Pool
const pool = new Pool({
user: 'postgres',
host: 'localhost',
database: 'test1',
password: '    ',
port: 5432,
})
const getPosts = (request, response) => {
    pool.query('SELECT * FROM post', (error, results) => {
    if (error) {
    throw error
    }
    response.status(200).json(results.rows)
    })
    }
    const createPost = (request, response) => {
    const {post_image} = request.body
    pool.query('INSERT INTO post (picture,post_id) VALUES ($1, $2)',
    [picture,1], (error, results) => {
    if (error) {
    throw error
    }
    response.status(201).send('PostAdded')
    })
    }
    module.exports = {
    getPosts,
    createPost,
    }